import { User, Users, Dumbbell, List, UtensilsCrossed } from "lucide-react";

export default function Features({ title, features }) {
	return (
		<section className="bg-slate-950">
			<div className="max-w-7xl mx-auto py-24 px-4">
				<div className="flex flex-col items-center gap-12">
					<h2 className="text-4xl xl:text-6xl font-semibold text-center text-slate-100">
						{title}
					</h2>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 lg:mt-16">
					{features.map((feature) => (
						<FeatureCard
							key={feature.title}
							title={feature.title}
							description={feature.description}
							svg={feature.svg}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function FeatureCard({ title, description, svg }) {
	return (
		<div className="bg-slate-900 border-2 border-slate-800 p-6 xl:p-8 rounded-lg flex flex-col justify-between">
			<div className="border-2 border-gradient-to-r border-[#FDD557] to-amber-500 text-[#FDD557] h-20 w-20 rounded-lg flex items-center justify-center overflow-hidden">
				<div className="bg-gradient-to-r from-[#FDD557]/20 to-amber-500/20 p-2 h-full w-full flex items-center justify-center">
					{svg}
				</div>
			</div>
			<div className="flex flex-col gap-4 mt-6 lg:mt-12">
				<h3 className="text-2xl 3xl:text-3xl font-bold text-[#FDD557]">
					{title}
				</h3>
				<p className="text-slate-300">{description}</p>
			</div>
		</div>
	);
}

// const features = [
// 	{
// 		title: "Transform Your Shape",
// 		description:
// 			"Sculpt a strong, feminine lower body with expert guidance - designed specifically for your body type and goals",
// 		svg: <Dumbbell className="w-12 h-12" />
// 	},
// 	{
// 		title: "Support That Fits Your Life",
// 		description:
// 			"Get flexible training times and realistic nutrition plans that work around your busy schedule, without strict restrictions",
// 		svg: <Users className="w-12 h-12" />
// 	},
// 	{
// 		title: "Expert Coaches",
// 		description:
// 			"Train with experienced women who understand your journey and will personally guide your transformation every step of the way",
// 		svg: <List className="w-12 h-12" />
// 	},
// 	{
// 		title: "Supportive Community",
// 		description:
// 			"Join a community of like-minded Manchester women who'll celebrate your wins and keep you motivated through your journey",
// 		svg: <UtensilsCrossed className="w-12 h-12" />
// 	}
// ];
