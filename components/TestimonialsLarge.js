import Image from "next/image";
import transformation1 from "@/public/transformations/transformation1.webp";
import transformation2 from "@/public/transformations/transformation2.webp";

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

function TestimonialCard({ name, image, quote, weightLost, timeTaken }) {
	return (
		<article className="h-full bg-gradient-to-tr from-slate-800 to-slate-900 border-2 border-slate-800 p-6 xl:p-8 rounded-xl flex flex-col-reverse xl:flex-row xl:justify-between gap-6">
			<div className="flex-1 flex flex-col justify-start xl:justify-between gap-6 xl:w-1/2">
				{/* Name and Quote */}
				<div className="flex flex-col gap-4">
					<h3 className="text-3xl xl:text-4xl font-black text-slate-100">
						{name}
					</h3>
					<blockquote className="text-lg xl:text-xl text-slate-300">
						<p className="italic">{quote}</p>
					</blockquote>
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
			<div className="flex-1 xl:w-1/2 bg-slate-800 overflow-hidden rounded-lg">
				<Image
					src={image}
					alt={`${name}'s transformation`}
					width={500}
					height={500}
					className="w-full h-full object-cover"
				/>
			</div>
		</article>
	);
}

// const testimonials = [
// 	{
// 		name: "John Doe",
// 		image: transformation1,
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
