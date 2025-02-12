import Hero from "@/components/Hero";
import CarouselComponent from "@/components/Carousel";
import Features from "@/components/Features";
import TestimonialsLarge from "@/components/TestimonialsLarge";
import TestimonialsSmall from "@/components/TestimonialsSmall";
import CTA from "@/components/CTA";
import Countdown from "@/components/Countdown";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Dumbbell, Users, List, UtensilsCrossed } from "lucide-react";
import sophie1 from "@/public/sophie/sophie1.webp";
import sophie2 from "@/public/sophie/sophie2.webp";
import sophie3 from "@/public/sophie/sophie3.webp";
import sophie4 from "@/public/sophie/sophie4.webp";
import eralda1 from "@/public/eralda/eralda1.webp";
import eralda2 from "@/public/eralda/eralda2.webp";

export const metadata = {
	title: "Results | The Olympus Projects",
	description:
		"See real transformation stories and results from The Olympus Projects members. Our Manchester-based training programs have helped hundreds of people achieve their fitness goals."
};

export default function Home() {
	return (
		<>
			<Hero
				callout="REAL TRANSFORMATIONS"
				title={
					<>
						See What&apos;s Possible With{" "}
						<span className="font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
							The Right Support
						</span>
					</>
				}
				description="Discover how our members have transformed their bodies and lives with our proven training methods and expert coaching"
				buttonText="Start Your Transformation"
			/>
			<CarouselComponent />
			<TestimonialsLarge
				title={
					<>
						REAL PEOPLE,{" "}
						<span className="font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
							REAL RESULTS
						</span>
					</>
				}
				testimonials={[
					{
						title: 'I was "that girl" who tried every fad diet under the sun',
						name: "Sophie Karim",
						images: [sophie1, sophie2, sophie3, sophie4],
						quote: `“I'm now exactly 6 months into my training at The Olympus Projects. I just completed my 24th week. This journey for me has been life changing. I was "that girl" who tried every fad diet under the sun, kept yoyoing up and down with my weight, telling myself I wanted to get fit but not ever managing to stick at it, and thinking that killing myself doing a tonne of cadio only would help me change my body. This cycle continued for years. 
						
						This time was different. Beacuse of the Olympus Projects I'm still 12kg down, and my body has completely changed to the extent where people tell me I look like I work out regularly. I'm now a size XS or small or size 8/10 and I've had to buy an entire new wardrobe. I've built a tonne of muscle and reversed my metabolism so that now I don't even track my calories, I'm actually eating more food than I've ever ate in my life. I'm fitter, healthier and stronger than I have ever felt in my life. I was often sad because I knew I could do better and look better but I could never stick to it. Since joining The Olympus Projects I haven't been sad at all.
						

						The trainers have worked with me to consistently hit pbs and lift heavier and heavier (for example, I've gone from zero to 130kg deadlift pb so far!), achieving a pull up, completing a half marathon in a very respectable time, competing in a charity boxing match and more. My coach is always adjusting my programe depending on my needs and he's currently working with me to now increase strength, grow my glutes and improve my boxing skills. They also have a nutritionist who helped me with the diet side of things, he was brilliant and has reversed my negative behaviours and attitude towards food. My coach is patient, knowledgeable and has become like my friend and mentor.
						
						I don't know how to thank The Olympus Projects enough, and I would tell anyone who wants to change physically and mentally, to just start. Getting started is the hardest part, once you're in there and you start to see the results and momentum just flows you would not regret starting ever. If you want to break the cycle and finally see some results, like I did, this is the best place to do it.”`,
						weightLost: 13,
						timeTaken: 24
					},
					{
						title: "“Mummy your body has changed, you're so pretty!”",
						name: "Eralda Koxhaj",
						images: [eralda1, eralda2],
						quote: `“I'm thrilled that I was able to achieve my fitness goals. I recall making the decision on March 14th to start coming to the gym twice a week. Initially, I was hesitant, but after discussing my fitness journey, you reassured me that we could shed 15 kg together. Following intense and enjoyable workouts, I managed to reach my goal.
						
						Losing 15 kg has not only transformed my weight but also my lifestyle and mindset, leading to a more positive and active feeling. Thank you so much Olympus Project.”`,
						weightLost: 15,
						timeTaken: 24
					}
				]}
			/>
			<Contact />
			<Features
				title={
					<>
						HOW WE DELIVER{" "}
						<span className="font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
							RESULTS
						</span>
					</>
				}
				features={[
					{
						title: "Proven Training Methods",
						description:
							"Science-backed training programs tailored to your goals and current fitness level",
						svg: <Dumbbell className="w-12 h-12" />
					},
					{
						title: "Expert Coaching",
						description:
							"Experienced coaches providing form guidance and continuous support throughout your journey",
						svg: <Users className="w-12 h-12" />
					},
					{
						title: "Progress Tracking",
						description:
							"Regular measurements and progress photos to keep you motivated and on track",
						svg: <List className="w-12 h-12" />
					},
					{
						title: "Nutrition Support",
						description:
							"Practical nutrition guidance that fits your lifestyle and helps maximize your results",
						svg: <UtensilsCrossed className="w-12 h-12" />
					}
				]}
			/>
			<Countdown />
			<TestimonialsSmall />
			<CTA />
			<Footer />
		</>
	);
}
