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
import transformation1 from "@/public/transformations/transformation1.webp";
import transformation2 from "@/public/transformations/transformation2.webp";

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
						name: "John Doe",
						image: transformation1,
						quote: "“I had tried so many PTs and programs before and never got anything sustainable or permanent. At the Olympus Projects I really felt like I was part of the team, same faces, same classes, everyone getting better and pushing each other forward. I'm 6 months in and don't see myself training anywhere else.”",
						weightLost: 10,
						timeTaken: 12
					},
					{
						name: "Jane Smith",
						image: transformation2,
						quote: "“I had tried so many PTs and programs before and never got anything sustainable or permanent. At the Olympus Projects I really felt like I was part of the team, same faces, same classes, everyone getting better and pushing each other forward. I'm 6 months in and don't see myself training anywhere else.”",
						weightLost: 15,
						timeTaken: 12
					}
				]}
			/>
			<Contact />
			<TestimonialsSmall />
			<Countdown />
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
