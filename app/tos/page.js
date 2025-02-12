import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.webp";

export default function TermsOfService() {
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
						Terms of Service
					</h1>

					<div className="max-w-4xl mx-auto">
						<section className="mb-12">
							<h2 className="text-2xl font-bold text-slate-100 mb-4">
								1. Introduction
							</h2>
							<p className="text-lg text-slate-400">
								Welcome to our gym facilities. These Terms of
								Service govern your use of our website and
								services. By accessing or using our services,
								you agree to be bound by these terms.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl font-bold text-slate-100 mb-4">
								2. Information Collection
							</h2>
							<p className="text-lg text-slate-400 mb-4">
								We collect and process personal information to
								provide our services. This includes:
							</p>
							<ul className="list-disc ml-6 text-lg text-slate-400">
								<li>
									Contact information (name, email, phone
									number)
								</li>
							</ul>
							<p className="text-lg text-slate-400 mt-4">
								Your information is processed in accordance with
								UK data protection laws, including the UK GDPR
								and Data Protection Act 2018.
							</p>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl font-bold text-slate-100 mb-4">
								3. Use of Information
							</h2>
							<p className="text-lg text-slate-400 mb-4">
								We use your information to:
							</p>
							<ul className="list-disc ml-6 text-lg text-slate-400">
								<li>Manage your membership</li>
								<li>Contact you about your services</li>
								<li>
									Send important updates about our facilities
								</li>
								<li>Process payments</li>
								<li>Respond to your inquiries</li>
							</ul>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl font-bold text-slate-100 mb-4">
								4. Your Rights
							</h2>
							<p className="text-lg text-slate-400 mb-4">
								Under UK data protection law, you have rights
								including:
							</p>
							<ul className="list-disc ml-6 text-lg text-slate-400">
								<li>The right to access your personal data</li>
								<li>The right to correct inaccurate data</li>
								<li>
									The right to request deletion of your data
								</li>
								<li>
									The right to restrict processing of your
									data
								</li>
							</ul>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl font-bold text-slate-100 mb-4">
								5. Contact Us
							</h2>
							<p className="text-lg text-slate-400 mb-4">
								If you have any questions about these Terms of
								Service or our data practices, please contact us
								at:
							</p>
							<div className="text-lg text-slate-400">
								<p>The Olympus Projects</p>
								<p>109-113 Corporation Street</p>
								<p>Manchester, M4 4DX</p>
								<p>Email: train@theolympusprojects.com</p>
								<p>Phone: 0161 547 2679</p>
							</div>
						</section>

						<section className="mb-12">
							<h2 className="text-2xl font-bold text-slate-100 mb-4">
								6. Changes to Terms
							</h2>
							<p className="text-lg text-slate-400">
								We reserve the right to modify these terms at
								any time. We will notify members of any material
								changes via email or through our website.
							</p>
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
