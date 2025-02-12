import Hero from "@/components/Hero";
import CarouselComponent from "@/components/Carousel";
import Features from "@/components/Features";
import TestimonialsLarge from "@/components/TestimonialsLarge";
import Contact from "@/components/Contact";
import TestimonialsSmall from "@/components/TestimonialsSmall";
import Countdown from "@/components/Countdown";
import FAQ from "@/components/FAQ";
import Address from "@/components/Address";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Dumbbell, Users, List, UtensilsCrossed } from "lucide-react";
import sophie1 from "@/public/sophie/sophie1.webp";
import sophie2 from "@/public/sophie/sophie2.webp";
import sophie3 from "@/public/sophie/sophie3.webp";
import sophie4 from "@/public/sophie/sophie4.webp";
import eralda1 from "@/public/eralda/eralda1.webp";
import eralda2 from "@/public/eralda/eralda2.webp";

export const metadata = {
	title: "Personal Training & Group Classes | The Olympus Projects",
	description:
		"The Olympus Projects is a group training studio in Manchester that offers a range of classes for all fitness levels. We offer a range of classes from HIIT to strength and conditioning, with a focus on fun and community."
};

export default function Home() {
	return (
		<>
			{/* Hero - Make these specific to who we're targeting */}
			<Hero
				callout="LADIES OF MANCHESTER"
				title={
					<>
						Get The Sculpted Lower Body You Want{" "}
						<span className="font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
							Without Endless Cardio
						</span>
					</>
				}
				description="Tired of fad diets and endless cardio? We're here to help you sculpt a strong, feminine lower body with expert guidance - designed specifically for your body type and goals"
				buttonText="Book Your Free Consultation"
			/>
			<CarouselComponent />
			<Countdown />
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
			{/* Features - Make these specific to who we're targeting */}
			<Features
				title={
					<>
						DESIGNED FOR YOUR{" "}
						<span className="font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
							SUCCESS
						</span>
					</>
				}
				features={[
					{
						title: "Transform Your Shape",
						description:
							"Sculpt a strong, feminine lower body with expert guidance - designed specifically for your body type and goals",
						svg: <Dumbbell className="w-12 h-12" />
					},
					{
						title: "Support That Fits Your Life",
						description:
							"Get flexible training times and realistic nutrition plans that work around your busy schedule, without strict restrictions",
						svg: <Users className="w-12 h-12" />
					},
					{
						title: "Expert Coaches",
						description:
							"Train with experienced women who understand your journey and will personally guide your transformation every step of the way",
						svg: <List className="w-12 h-12" />
					},
					{
						title: "Supportive Community",
						description:
							"Join a community of like-minded Manchester women who'll celebrate your wins and keep you motivated through your journey",
						svg: <UtensilsCrossed className="w-12 h-12" />
					}
				]}
			/>
			{/* Large Testimonials - Make these specific to who we're targeting */}

			<Contact />
			<TestimonialsSmall />

			{/* FAQ - Make these specific to who we're targeting */}
			<FAQ faqItems={faqItems} />
			<CTA />
			<Address />
			<Footer />
		</>
	);
}

const faqItems = [
	{
		question: "How much time do I need to commit?",
		answer: "Our program is designed for busy women, requiring just 3 sessions per week, each lasting 45-60 minutes. We offer flexible scheduling with morning, evening,  and weekend slots to fit your lifestyle."
	},
	{
		question: "I'm not fit enough to start...",
		answer: "Every journey starts somewhere! Our program is designed for all fitness levels, with exercises modified to your current ability. Our expert coaches will guide you through proper form and progression at your own pace."
	},
	{
		question:
			"What makes your group training different from regular gym classes?",
		answer: "Unlike typical gym classes, we offer small group sessions (max 6 people) with personalized attention. You'll get custom programming, form correction, and progress tracking while enjoying the motivation of a supportive community."
	},
	{
		question: "Do I need to follow a strict diet?",
		answer: "No strict diets here! Our nutrition guidance focuses on sustainable habits that fit your lifestyle. We'll help you make simple, effective changes while still enjoying your favorite foods in moderation."
	},
	{
		question: "What if I have injuries or health concerns?",
		answer: "Your safety is our priority. During your initial consultation, we'll discuss any injuries or health concerns and modify exercises accordingly. Our coaches are qualified to work with various conditions and will ensure safe, effective workouts."
	},
	{
		question: "What results can I expect in 90 days?",
		answer: "While results vary, committed members typically see increased strength, improved energy levels, better muscle definition, and clothing fitting better within 90 days. You'll also gain confidence in your exercise form and nutritional choices."
	},
	{
		question: "Is there a joining fee or contract?",
		answer: "We believe in transparency. There's a one-time joining fee of £25 which includes your welcome pack and initial assessment. Our memberships are available in 3, 6, or 12-month packages with no hidden fees."
	},
	{
		question: "I'm worried about working out in a group...",
		answer: "We understand this concern! Our small group size (max 6 people) ensures you get plenty of personal attention. Plus, our community is incredibly supportive - many members started feeling the same way and now love the group energy."
	},
	{
		question: "What's your cancellation policy?",
		answer: "We require 24 hours notice for session cancellations. This allows us to offer your spot to another member. If you need to pause or cancel your membership, we require 30 days written notice."
	}
];
