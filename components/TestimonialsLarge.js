"use client";

import Image from "next/image";
import { useState } from "react";

export default function TestimonialsLarge({ title, testimonials }) {
	return (
		<section className="bg-slate-950">
			<div className="max-w-7xl mx-auto py-24 px-4">
				<div className="flex flex-col items-center gap-12">
					<h2 className="text-4xl xl:text-6xl font-semibold text-center text-slate-100">
						{title}
					</h2>
				</div>
				<div className="flex flex-col gap-8 mt-12 lg:mt-16">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard key={index} {...testimonial} />
					))}
				</div>
			</div>
		</section>
	);
}

function TestimonialCard({
	title,
	name,
	images,
	quote,
	weightLost,
	timeTaken
}) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const maxLength = 600;
	const shouldTruncate = quote.length > maxLength;
	const displayedQuote =
		!isExpanded && shouldTruncate
			? quote.slice(0, maxLength) + "..."
			: quote;

	const nextImage = () => {
		setCurrentImageIndex((prev) => (prev + 1) % images.length);
	};

	const previousImage = () => {
		setCurrentImageIndex(
			(prev) => (prev - 1 + images.length) % images.length
		);
	};

	return (
		<article className="h-full bg-gradient-to-tr from-slate-800 to-slate-900 border-2 border-slate-800 p-6 xl:p-8 rounded-xl flex flex-col-reverse xl:flex-row xl:justify-between gap-6">
			<div className="flex-1 flex flex-col justify-start xl:justify-between gap-6 xl:w-1/2">
				{/* Name and Quote */}
				<div className="flex flex-col gap-4">
					<h2 className="text-2xl xl:text-3xl font-bold italic bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
						{title}
					</h2>
					<h3 className="text-xl xl:text-2xl font-semibold text-slate-200 mt-2">
						{name}
					</h3>
					<div className="flex flex-col items-start gap-2">
						<blockquote className="text-lg xl:text-xl text-slate-300">
							<p className="italic">{displayedQuote}</p>
						</blockquote>
						{shouldTruncate && (
							<button
								onClick={() => setIsExpanded(!isExpanded)}
								className="text-slate-400 hover:text-slate-100 transition-colors text-sm font-medium">
								{isExpanded ? "Read Less" : "Read More"}
							</button>
						)}
					</div>
				</div>

				{/* Stats */}
				<div className="flex gap-12 font-black">
					<div className="flex flex-col items-center gap-2 text-center">
						<div
							className="text-4xl xl:text-5xl font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent"
							aria-label={`${weightLost} kilograms lost`}>
							{weightLost}
							<span className="text-2xl xl:text-3xl">kg</span>
						</div>
						<p className="text-slate-300 text-sm uppercase tracking-wider">
							Weight Lost
						</p>
					</div>
					<div className="flex flex-col items-center gap-2 text-center">
						<div
							className="text-4xl xl:text-5xl font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent"
							aria-label={`${timeTaken} weeks duration`}>
							{timeTaken}
						</div>
						<p className="text-slate-300 text-sm uppercase tracking-wider">
							Weeks
						</p>
					</div>
				</div>
			</div>
			<div className="flex-1 xl:w-1/2 bg-slate-800 rounded-lg relative aspect-square">
				<div className="relative w-full h-full">
					<Image
						src={images[currentImageIndex]}
						alt={`${name}'s transformation ${
							currentImageIndex + 1
						}`}
						fill
						className="object-contain aspect-square rounded-lg"
					/>
					{images.length > 1 && (
						<>
							<button
								onClick={previousImage}
								className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
								aria-label="Previous image">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-6 h-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 19.5L8.25 12l7.5-7.5"
									/>
								</svg>
							</button>
							<button
								onClick={nextImage}
								className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
								aria-label="Next image">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-6 h-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.25 4.5l7.5 7.5-7.5 7.5"
									/>
								</svg>
							</button>
							<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
								{images.map((_, index) => (
									<button
										key={index}
										onClick={() =>
											setCurrentImageIndex(index)
										}
										className={`w-2 h-2 rounded-full transition-colors ${
											index === currentImageIndex
												? "bg-white"
												: "bg-white/50"
										}`}
										aria-label={`Go to image ${index + 1}`}
									/>
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</article>
	);
}

// const testimonials = [
// 	{
// 		name: "John Doe",
// 		images: [transformation1, transformation2, transformation3],
// 		quote: "“I had tried so many PTs and programs before and never got anything sustainable or permanent. At the Olympus Projects I really felt like I was part of the team, same faces, same classes, everyone getting better and pushing each other forward. I'm 6 months in and don't see myself training anywhere else.”",
// 		weightLost: 10,
// 		timeTaken: 12
// 	},
// 	{
// 		name: "Jane Smith",
// 		image: transformation2,
// 		quote: "“I had tried so many PTs and programs before and never got anything sustainable or permanent. At the Olympus Projects I really felt like I was part of the team, same faces, same classes, everyone getting better and pushing each other forward. I'm 6 months in and don't see myself training anywhere else.”",
// 		weightLost: 15,
// 		timeTaken: 12
// 	}
// ];
