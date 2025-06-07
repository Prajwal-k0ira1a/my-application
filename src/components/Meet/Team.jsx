import React from "react";
import ThemeToggle from '../ThemeToggler/ThemeToggle';
import { Mail, Phone } from "lucide-react"; // Using lucide icons
const teamMembers = [
	{
		name: "Durga Devi Basnet",
		role: "Creative Leader",
		email: "durga@mail.com",
		phone: "+880123456789",
		img: require("../Assets/Durga.jpg"),
		borderColor: "#8E9792",
		btnColor: "#8E9792",
	},
	{
		name: "Shyam Raj Koirala",
		role: "Sales Manager",
		email: "shyam@mail.com",
		phone: "+880123456789",
		img: require("../Assets/Shyam.jpg"),
		borderColor: "#C89F9C",
		btnColor: "#C89F9C",
	},
	{
		name: "Prajwal Koirala",
		role: "Web Developer",
		email: "prajwal@mail.com",
		phone: "+880123456789",
		img: require("../Assets/Prajwal.jpg"),
		borderColor: "#15307D",
		btnColor: "#15307D",
	},
];

export default function Team() {
	return (
		<div id="team" className="min-h-screen bg-white dark:bg-gray-900 px-4 py-12 font-montserrat">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold text-gray-800 dark:text-white">Meet Our Team</h1>
				<p className="text-gray-500 mt-2 dark:text-gray-300">Passionate. Skilled. Professional.</p>
			</div>
			<div className="flex flex-wrap justify-center gap-10">
				{teamMembers.map((member, idx) => (
					<div
						key={idx}
						className={`w-[260px] bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-5 text-center border-t-4`}
						style={{ borderColor: member.borderColor }}
					>
						<img
							src={member.img}
							alt={member.name}
							className="w-32 h-32 object-cover mx-auto rounded-full border-4"
							style={{ borderColor: member.borderColor }}
						/>
						<h2 className="text-lg font-semibold mt-4 dark:text-white">{member.name}</h2>
						<p className="text-sm text-gray-600 mb-1 dark:text-gray-300">{member.role}</p>
						<div className="flex items-center justify-center gap-2 text-sm text-gray-700 mt-2 dark:text-gray-200">
							<Mail size={16} />
							<span>{member.email}</span>
						</div>
						<button
							className="mt-4 inline-flex items-center justify-center gap-2 w-full text-white py-2 rounded-full transition duration-200 hover:brightness-110"
							style={{ backgroundColor: member.btnColor }}
						>
							<Phone size={16} />
							Call
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
