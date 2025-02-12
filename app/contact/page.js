import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Countdown from "@/components/Countdown";
import Address from "@/components/Address";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Contact Us | The Olympus Projects",
	description:
		"Get in touch with The Olympus Projects in Manchester. We're here to answer your questions about our personal training and group fitness programs."
};

export default function ContactPage() {
	return (
		<>
			<Hero
				callout="GET IN TOUCH"
				title={
					<>
						Ready to Start Your
						<span className="font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
							{" "}
							Fitness Journey?
						</span>
					</>
				}
				description="Have questions about our programs? Want to learn more about how we can help you achieve your fitness goals? We're here to help!"
				buttonText="Contact Us Now"
			/>
			<Contact />
			<Countdown />
			<Address />
			<Footer />
		</>
	);
}
