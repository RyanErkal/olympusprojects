import "./globals.css";

export const metadata = {
	title: "Personal Training & Group Classes Manchester | The Olympus Projects",
	description:
		"The Olympus Projects is a gym in Manchester that offers personal training and group classes. We are a team of experienced trainers who are dedicated to helping you achieve your fitness goals."
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}
