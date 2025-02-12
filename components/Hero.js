import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.webp";

export default function Hero({ callout, title, description, buttonText }) {
	return (
		<section className="bg-slate-950">
			<div className="w-full max-w-7xl mx-auto flex justify-between items-center p-4">
				<Link href="/">
					<Image
						src={logo}
						alt="Hero Background"
						height={100}
						width={100}
						className="object-cover"
					/>
				</Link>
				<Link
					href="#contact"
					className="relative bg-gradient-to-r from-[#FDD557] to-amber-500 text-slate-100 hover:text-slate-900 font-bold py-3 px-5 rounded-lg hover:brightness-110 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FDD557] focus:ring-offset-2 focus:ring-offset-slate-900 w-fit before:absolute before:inset-0 before:bg-slate-800 hover:before:bg-opacity-0 before:transition-all before:duration-200 before:rounded-lg isolate">
					<span className="relative z-10">Join Now</span>
				</Link>
			</div>
			<div className="relative max-w-7xl mx-auto py-24 px-4">
				<div className="flex flex-col items-center justify-center text-center gap-4">
					<h2 className="text-xl lg:text-2xl xl:text-3xl font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
						{callout}
					</h2>
					<h1 className="text-slate-100 text-4xl lg:text-5xl xl:text-6xl font-semibold uppercase">
						{title}
					</h1>
					<p className="text-slate-400 max-w-2xl text-base lg:text-lg">
						{description}
					</p>
					<div className="flex items-center justify-center gap-2 mt-4 lg:mt-6">
						<Link
							href="#contact"
							className="w-full mt-6 bg-gradient-to-r from-[#FDD557] to-amber-500 text-slate-900 font-bold py-4 px-6 rounded-lg hover:brightness-110 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FDD557] focus:ring-offset-2 focus:ring-offset-slate-900">
							{buttonText}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
