"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const newErrors = {};

		if (!name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			newErrors.email = "Please enter a valid email address";
		}

		if (!phone.trim()) {
			newErrors.phone = "Phone number is required";
		} else if (!/^[\d\s+()-]{10,}$/.test(phone)) {
			newErrors.phone = "Please enter a valid phone number";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			toast.error("Please fill in all required fields correctly");
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await fetch("/api/ContactFormSubmission", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ name, email, phone })
			});

			if (response.ok) {
				toast.success("Form submitted successfully!");
				setIsSubmitted(true);
			} else {
				const errorData = await response.json();
				toast.error(
					`Submission failed: ${errorData.message || "Unknown error"}`
				);
			}
		} catch (error) {
			toast.error("Network error: Could not submit form.");
		} finally {
			setIsSubmitting(false);
			setName("");
			setEmail("");
			setPhone("");
		}
	};

	return (
		<section id="contact" className="bg-slate-950 py-24 px-4">
			<Toaster position="bottom-right" />
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col items-center">
					<h2 className="uppercase text-center text-4xl sm:text-5xl xl:text-6xl font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
						Book Your Free Consultation
					</h2>
					<p className="mt-4 text-lg text-slate-400 text-center max-w-2xl">
						Take the first step towards your fitness goals.
						Let&apos;s discuss how we can help you achieve the
						results you want.
					</p>
				</div>

				<div className="w-full max-w-[600px] mx-auto mt-12 lg:mt-16">
					<form
						onSubmit={handleSubmit}
						className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 xl:p-12 shadow-xl">
						<div className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-slate-300 mb-2">
									Full Name *
								</label>
								<input
									id="name"
									type="text"
									required
									className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border ${
										errors.name
											? "border-red-500"
											: "border-slate-700"
									} text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FDD557] focus:border-transparent transition-all duration-200`}
									placeholder="John Doe"
									value={name}
									onChange={(e) => {
										setName(e.target.value);
										setErrors({
											...errors,
											name: undefined
										});
									}}
								/>
								{errors.name && (
									<p className="mt-1 text-sm text-red-500">
										{errors.name}
									</p>
								)}
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-slate-300 mb-2">
									Email Address *
								</label>
								<input
									id="email"
									type="email"
									required
									className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border ${
										errors.email
											? "border-red-500"
											: "border-slate-700"
									} text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FDD557] focus:border-transparent transition-all duration-200`}
									placeholder="john@example.com"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
										setErrors({
											...errors,
											email: undefined
										});
									}}
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-500">
										{errors.email}
									</p>
								)}
							</div>

							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-medium text-slate-300 mb-2">
									Phone Number *
								</label>
								<input
									id="phone"
									type="tel"
									required
									className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border ${
										errors.phone
											? "border-red-500"
											: "border-slate-700"
									} text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FDD557] focus:border-transparent transition-all duration-200`}
									placeholder="+1 (555) 000-0000"
									value={phone}
									onChange={(e) => {
										setPhone(e.target.value);
										setErrors({
											...errors,
											phone: undefined
										});
									}}
								/>
								{errors.phone && (
									<p className="mt-1 text-sm text-red-500">
										{errors.phone}
									</p>
								)}
							</div>

							<button
								type="submit"
								disabled={isSubmitting || isSubmitted}
								className={`w-full mt-6 bg-gradient-to-r from-[#FDD557] to-amber-500 text-slate-900 font-bold py-4 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FDD557] focus:ring-offset-2 focus:ring-offset-slate-900 flex gap-2 items-center justify-center ${
									isSubmitting || isSubmitted
										? "cursor-not-allowed"
										: "hover:brightness-110 transform hover:-translate-y-0.5"
								}`}>
								{isSubmitting ? (
									<>
										<svg
											className="animate-spin h-5 w-5"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24">
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
										</svg>
										Submitting...
									</>
								) : isSubmitted ? (
									"Thank You!"
								) : (
									"Get Started"
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
