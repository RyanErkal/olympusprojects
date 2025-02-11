import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.webp";
import class6 from "@/public/class6.webp";

export default function CTA() {
	return (
		<section className="bg-slate-950 py-24 px-4">
			<div className="relative max-w-7xl mx-auto flex justify-between rounded-2xl overflow-hidden border-2 border-slate-800">
				<Image
					src={class6}
					alt="CTA"
					width={600}
					height={600}
					className="absolute w-full h-full top-0 left-0 object-cover brightness-50"
				/>
				<div className="relative z-10 flex flex-col items-start p-6 lg:p-12">
					<h2 className="text-3xl xl:text-5xl font-black text-left bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
						START YOUR FITNESS JOURNEY TODAY
					</h2>
					<p className="text-slate-100 text-left max-w-2xl font-semibold text-lg mt-4">
						Book your Free Consultation with one of our experts now
					</p>
					<Link
						href="#contact"
						className="bg-gradient-to-r from-[#FDD557] to-amber-500 text-slate-900 font-bold py-4 px-6 rounded-lg hover:brightness-110 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FDD557] focus:ring-offset-2 focus:ring-offset-slate-900 mt-8">
						Book Your Free Consultation
					</Link>
				</div>
				<div className="relative flex flex-col items-center">
					<Image
						src={logo}
						alt="CTA"
						width={300}
						height={300}
						className="rounded-lg"
					/>
				</div>
			</div>
		</section>
	);
}
