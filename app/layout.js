import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Personal Training & Group Classes Manchester | The Olympus Projects",
	description:
		"The Olympus Projects is a gym in Manchester that offers personal training and group classes. We are a team of experienced trainers who are dedicated to helping you achieve your fitness goals."
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head></head>
			<body className={`antialiased`}>
				{children}

				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-MM8KME8WMM"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-MM8KME8WMM');
					`}
				</Script>
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=AW-16870560347"
					strategy="afterInteractive"
				/>
				<Script id="google-ads" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'AW-16870560347');
					`}
				</Script>
				<Analytics />
			</body>
		</html>
	);
}
