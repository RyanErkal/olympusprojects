import Link from "next/link";

export default function TestimonialsSmall() {
	return (
		<section className="bg-slate-950">
			<div className="max-w-7xl mx-auto py-24 px-4">
				<h2 className="text-4xl xl:text-6xl font-semibold text-center text-slate-100">
					DON&apos;T BELIEVE US?
					<br />
					<span className="font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
						SEE WHAT OUR CLIENTS SAY
					</span>
				</h2>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-12 lg:mt-16">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard key={index} {...testimonial} />
					))}
				</div>
				<div className="flex items-center justify-center gap-2 mt-12 lg:mt-16">
					<Link
						href="#contact"
						className="bg-gradient-to-r from-[#FDD557] to-amber-500 text-slate-900 font-bold py-4 px-6 rounded-lg hover:brightness-110 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FDD557] focus:ring-offset-2 focus:ring-offset-slate-900">
						Book Your Free Consultation Now
					</Link>
				</div>
			</div>
		</section>
	);
}

function TestimonialCard({ title, name, image, quote }) {
	return (
		<div className="h-full bg-gradient-to-tr from-slate-800 to-slate-900 border-2 border-slate-800 p-6 xl:p-8 rounded-xl flex flex-col-reverse xl:flex-row xl:justify-between gap-4">
			<div className="flex-1 flex flex-col justify-start xl:justify-between gap-6">
				<div className="flex flex-col gap-6">
					<h3 className="text-2xl xl:text-3xl font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
						{title}
					</h3>
					<p className="text-lg xl:text-xl text-slate-300 italic">
						{quote}
					</p>
				</div>
				<div className="flex flex-col gap-2 border-t-2 border-slate-800 pt-4">
					<h3 className="text-xl xl:text-2xl font-semibold text-slate-300">
						{name}
					</h3>
					<div className="flex items-center gap-2">
						<svg
							className="w-5 h-5 text-[#FDD557]"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
						</svg>
						<p className="text-slate-400 font-medium">
							Verified Client
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

const testimonials = [
	{
		title: "8kg Weight Loss",
		name: "Josh Nelson",
		quote: "“Phenomenal place to train AJ is really good at helping ensure your using the correct posture and technique, keeping you motivated by pushing you and is always happy help with nutritional advice. It is a really friendly environment at the gym with everyone happy to help each other”"
	},
	{
		title: "15kg Weight Loss",
		name: "Namaan Ul-Haq",
		quote: "“I've been training at Olympus for 6 months now. In that time, I've become stronger than ever, having blown through previous PRs, whilst being 15kg lighter than when I first turned up. Classes are fun and engaging, and AJ and Stefan are both friendly yet promote a no-nonsense approach to strength training. I've really enjoyed my time here so far, and can't wait to see where I am in another 6 months.”"
	},
	{
		title: "Highly Recommend",
		name: "Alexandra Lavery",
		quote: `“After trying a few gyms in town and struggling with consistency I found Olympus Projects, I now look forward to going to the gym again and I'm back in a good routine.

		AJ is very knowledgeable, especially if you have any pains or injuries, helping with technique, mobility and building strength to overcome these.

		The classes are great and suitable for all fitness levels, I always feel like I've had a great workout. I would highly recommend this gym.”`
	},
	{
		title: "Couldn't Recommend More",
		name: "Rui Hou",
		quote: "“Never thought my first gym experience would be so amazing! You have everything you need here to embark your journey of being stronger and healthier, ranging from nutrition suggestions, mental support from tutors and other friendly members of the community to tailored instruction during the training. Couldn't recommend here more if you are aiming to become stronger from the very moment.”"
	},
	{
		title: "Truly Tailored",
		name: "Cath Brown",
		quote: `“A great place to train with an excellent blend of support, structure, challenge and innovation.
				I've had personal trainers before but the training here has been the best because it is truly tailored to me and every session is different but there is enough consistency to be able to really see progress.
				Recommended to both the already-fit but especially those who would like to improve their fitness.”`
	},
	{
		title: "Made Me Feel At Home",
		name: "Ome Alika",
		quote: `“When I spoke to AJ, I told him I wanted to learn the form because I had injuries due to bad formation and also I wanted to get stronger. I wasn't keen on losing weight but if it happens then is a bonus.
		Stepping into the gym that faithful day was a different experience all together, seeing other women do things like lifting weights, boxing made me feel I was home.”`
	}
];
