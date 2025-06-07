export function addToCart(cart, setCart, product) {
  setCart(prev => [...prev, product]);
}

export function removeFromCart(cart, setCart, idx) {
  setCart(prev => prev.filter((_, i) => i !== idx));
}

export function checkoutCart(cart) {
  let bill = 'Bhawana Kirana\n\n';
  bill += 'Items:\n';
  let total = 0;
  cart.forEach((item, idx) => {
    bill += `${idx + 1}. ${item.name} - Rs ${item.price}\n`;
    total += item.price;
  });
  bill += `\nTotal: Rs ${total}`;
  const printWindow = window.open('', '', 'width=600,height=600');
  printWindow.document.write(`<pre style='font-size:18px;'>${bill}</pre>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
}
