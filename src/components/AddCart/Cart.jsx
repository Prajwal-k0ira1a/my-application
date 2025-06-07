export function addToCart(cart, setCart, product) {
  setCart(prev => {
    const idx = prev.findIndex(item => item.name === product.name);
    if (idx !== -1) {
      // Product already in cart, increment quantity
      return prev.map((item, i) =>
        i === idx ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
    } else {
      // Add new product with quantity 1
      return [...prev, { ...product, quantity: 1 }];
    }
  });
}

export function removeFromCart(cart, setCart, idx) {
  setCart(prev => {
    if (prev[idx].quantity && prev[idx].quantity > 1) {
      // Decrement quantity if more than 1
      return prev.map((item, i) =>
        i === idx ? { ...item, quantity: item.quantity - 1 } : item
      );
    } else {
      // Remove item if quantity is 1 or undefined
      return prev.filter((_, i) => i !== idx);
    }
  });
}
export function checkoutCart(cart) {
  const now = new Date();
  let bill = `Date: ${now.toLocaleString()}\n\n`;
  bill += 'Items:\n';
  let total = 0;

  cart.forEach((item, idx) => {
    const qty = item.quantity || 1;
    bill += `${idx + 1}. ${item.name} x${qty} - Rs ${item.price} each = Rs ${item.price * qty}\n`;
    total += item.price * qty;
  });

  bill += `\nTotal: Rs ${total}`;

  const printWindow = window.open('', '', 'width=600,height=600');
  if (!printWindow) {
    alert('Popup blocked! Please allow popups for this site to print your bill.');
    return false;
  }
  printWindow.document.write(`
  <html>
    <head>
      <title>Invoice - Bhawana Kirana</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        h2 { text-align: center; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; }
        th { background-color: #f4f4f4; }
        tfoot td { font-weight: bold; }
        .right { text-align: right; }
        .center { text-align: center; }
      </style>
    </head>
    <body>
      <h2>Bhawana Kirana - Invoice</h2>
      <p>Date: ${now.toLocaleString()}</p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Price (Rs)</th>
            <th>Total (Rs)</th>
          </tr>
        </thead>
        <tbody>
          ${cart.map((item, idx) => {
            const qty = item.quantity || 1;
            const total = item.price * qty;
            return `
              <tr>
                <td class="center">${idx + 1}</td>
                <td>${item.name}</td>
                <td class="center">${qty}</td>
                <td class="right">Rs ${item.price}</td>
                <td class="right">Rs ${total}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4" class="right">Grand Total</td>
            <td class="right">Rs ${total}</td>
          </tr>
        </tfoot>
      </table>
    </body>
  </html>
`);

  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  setTimeout(() => { printWindow.close(); }, 500);
  return true; // So we can clear the cart
}
