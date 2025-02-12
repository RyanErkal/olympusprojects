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
import { Dumbbell, Calendar, Heart, Utensils } from "lucide-react";
import sophie1 from "@/public/sophie/sophie1.webp";
import sophie2 from "@/public/sophie/sophie2.webp";
import sophie3 from "@/public/sophie/sophie3.webp";
import sophie4 from "@/public/sophie/sophie4.webp";
import eralda1 from "@/public/eralda/eralda1.webp";
import eralda2 from "@/public/eralda/eralda2.webp";

export const metadata = {
	title: "Personal Training Manchester | The Olympus Projects",
	description:
		"Transform your body with expert personal training in Manchester. Our experienced coaches provide customised workout plans, nutrition guidance, and dedicated support to help you achieve your fitness goals."
};

export default function Home() {
	return (
		<>
			<Hero
				callout="TRANSFORM YOUR BODY"
				title={
					<>
						Achieve Your Dream Physique{" "}
						<span className="font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
							With Expert Guidance
						</span>
					</>
				}
				description="Ready to transform your body and life? Our expert personal trainers will create a custom program designed specifically for your goals, whether that's building muscle, losing fat, or improving overall fitness"
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
			<Features
				title={
					<>
						THE OLYMPUS{" "}
						<span className="font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
							DIFFERENCE
						</span>
					</>
				}
				features={[
					{
						title: "Bespoke Training Programs",
						description:
							"Get a fully customised training program that evolves with you, designed to maximize results while fitting your schedule and lifestyle",
						svg: <Dumbbell className="w-12 h-12" />
					},
					{
						title: "Flexible Scheduling",
						description:
							"Train at times that work for you with early morning, evening, and weekend slots available. We're here to make fitness fit your life",
						svg: <Calendar className="w-12 h-12" />
					},
					{
						title: "Expert Coaching",
						description:
							"Work with experienced trainers who will perfect your form, push your limits safely, and keep you accountable to your goals",
						svg: <Heart className="w-12 h-12" />
					},
					{
						title: "Complete Nutrition Support",
						description:
							"Get expert nutrition guidance tailored to your goals, with practical meal plans and ongoing support to optimize your results",
						svg: <Utensils className="w-12 h-12" />
					}
				]}
			/>
			<Contact />
			<TestimonialsSmall />
			<FAQ faqItems={faqItems} />
			<CTA />
			<Address />
			<Footer />
		</>
	);
}

const faqItems = [
	{
		question: "How often should I train with you?",
		answer: "For optimal results, we recommend 2-3 personal training sessions per week, each lasting 60 minutes. We'll work together to find the perfect schedule that fits your lifestyle, with flexible morning, evening, and weekend appointments available."
	},
	{
		question: "I'm a complete beginner to exercise...",
		answer: "Perfect! Personal training is ideal for beginners as you'll receive 100% attention and guidance. We'll start at your level, focusing on proper form and gradually progress as your confidence and strength improve. Many of our most successful clients started as complete beginners."
	},
	{
		question:
			"What makes personal training different from regular gym workouts?",
		answer: "With personal training, every session is tailored specifically to you. You'll receive undivided attention, custom programming based on your goals, constant form correction, and detailed progress tracking. Plus, we adjust your program in real-time based on your progress."
	},
	{
		question: "Do you provide nutrition support?",
		answer: "Yes! We include personalized nutrition coaching with your training. No strict diets - instead, we'll create a sustainable eating plan that fits your lifestyle and preferences. You'll receive ongoing support, meal ideas, and adjustments based on your progress."
	},
	{
		question: "What if I have injuries or health concerns?",
		answer: "Personal training is perfect for managing injuries or health conditions. During your initial consultation, we'll discuss your medical history in detail and design a program that's safe and effective for your specific situation. We also coordinate with healthcare providers when needed."
	},
	{
		question: "What results can I expect?",
		answer: "With consistent training and following our nutrition guidance, clients typically see significant changes within 8-12 weeks. This includes increased strength, improved posture, better energy levels, and clothing fitting differently. We'll take measurements and progress photos to track your transformation."
	},
	{
		question: "What are your personal training rates?",
		answer: "We offer several personal training packages to suit different budgets and goals. All packages start with a detailed consultation and assessment. We'll discuss pricing options during your initial consultation, with discounts available for bulk session bookings."
	},
	{
		question: "I'm nervous about one-on-one training...",
		answer: "This is completely normal! Many of our clients felt the same way initially. We pride ourselves on creating a comfortable, judgment-free environment. The first session focuses on getting to know each other and ensuring you feel completely at ease."
	},
	{
		question: "What's your cancellation policy?",
		answer: "We require 24 hours notice for session cancellations to avoid being charged for the session. We understand that emergencies happen, so you get one late cancellation grace per package. Unused sessions remain valid for 6 months from purchase."
	}
];
