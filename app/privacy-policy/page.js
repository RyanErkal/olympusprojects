import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.webp";

export default function PrivacyPolicy() {
	return (
		<>
			<div className="bg-slate-950">
				<div className="max-w-7xl mx-auto px-4 py-4">
					<Link href="/" className="flex items-center gap-2 w-fit">
						<Image
							src={logo}
							alt="The Olympus Projects"
							height={100}
							width={100}
							className="object-cover"
						/>
					</Link>
				</div>

				<div className="max-w-7xl mx-auto px-4 py-12 lg:py-24">
					<h1 className="text-4xl xl:text-6xl font-black text-center bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent pb-12">
						Privacy Policy
					</h1>

					<div className="max-w-4xl mx-auto">
						<section className="mb-12">
							<h2 className="text-2xl font-bold text-slate-100 mb-4">
								Introduction
							</h2>
							<p className="text-lg text-slate-400">
								Welcome to The Olympus Projects&apos;s Privacy
								Policy. We respect your privacy and are
								committed to protecting your personal data. This
								privacy policy explains how we handle your
								personal information when you use our services.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl font-bold text-slate-100 mb-4">
								Information We Collect
							</h2>
							<p className="text-lg text-slate-400 mb-4">
								We collect the following personal information
								when you opt-in to our services:
							</p>
							<ul className="list-disc ml-6 text-lg text-slate-400">
								<li>Name</li>
								<li>Email address</li>
								<li>Phone number</li>
							</ul>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl font-bold text-slate-100 mb-4">
								How We Use Your Information
							</h2>
							<p className="text-lg text-slate-400">
								We use your personal information to:
							</p>
							<ul className="list-disc ml-6 text-lg text-slate-400">
								<li>Contact you about your membership</li>
								<li>
									Send you important updates about our
									services
								</li>
								<li>Respond to your inquiries</li>
								<li>Process your bookings and payments</li>
							</ul>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl font-bold text-slate-100 mb-4">
								Data Protection
							</h2>
							<p className="text-lg text-slate-400">
								We are committed to ensuring your information is
								secure. We follow industry standards and have
								implemented suitable physical, electronic, and
								managerial procedures to safeguard and secure
								the information we collect.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl font-bold text-slate-100 mb-4">
								Your Rights
							</h2>
							<p className="text-lg text-slate-400">
								Under UK data protection law, you have the right
								to:
							</p>
							<ul className="list-disc ml-6 text-lg text-slate-400">
								<li>Access your personal data</li>
								<li>
									Correct any mistakes in your information
								</li>
								<li>Request erasure of your personal data</li>
								<li>
									Object to processing of your personal data
								</li>
								<li>
									Request restriction of processing your
									personal data
								</li>
								<li>Request transfer of your personal data</li>
								<li>Withdraw consent</li>
							</ul>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl font-bold text-slate-100 mb-4">
								Contact Us
							</h2>
							<p className="text-lg text-slate-400 mb-4">
								If you have any questions about this Privacy
								Policy or how we handle your personal
								information, please contact us at:
							</p>
							<div className="text-lg text-slate-400">
								<p>The Olympus Projects</p>
								<p>109-113 Corporation Street</p>
								<p>Manchester, M4 4DX</p>
								<p>Email: train@theolympusprojects.com</p>
								<p>Phone: 0161 547 2679</p>
							</div>
						</section>

						<footer className="text-sm text-slate-600 border-t border-slate-800 pt-4">
							<p>
								Last updated: {new Date().toLocaleDateString()}
							</p>
						</footer>
					</div>
				</div>
			</div>
		</>
	);
}
