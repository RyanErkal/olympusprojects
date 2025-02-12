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
import { Dumbbell, Users, Calendar, Heart } from "lucide-react";
import sophie1 from "@/public/sophie/sophie1.webp";
import sophie2 from "@/public/sophie/sophie2.webp";
import sophie3 from "@/public/sophie/sophie3.webp";
import sophie4 from "@/public/sophie/sophie4.webp";
import eralda1 from "@/public/eralda/eralda1.webp";
import eralda2 from "@/public/eralda/eralda2.webp";

export const metadata = {
	title: "Group Fitness Classes Manchester | The Olympus Projects",
	description:
		"Join Manchester's most effective group training classes at The Olympus Projects. Experience high-energy workouts, expert coaching, and a supportive community that gets results. Perfect for all fitness levels."
};

export default function Home() {
	return (
		<>
			{/* Hero - Make these specific to who we're targeting */}
			<Hero
				callout="GROUP TRAINING MANCHESTER"
				title={
					<>
						Transform Your Fitness With{" "}
						<span className="font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
							Group Training That Works
						</span>
					</>
				}
				description="Join Manchester's most effective group training classes. Experience high-energy workouts, expert coaching, and a supportive community that gets results - perfect for all fitness levels"
				buttonText="Book Your Free Class"
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
						title: "Small Group Training",
						description:
							"Train in intimate groups of maximum 6 people, ensuring you get personalized attention while enjoying the energy of group workouts",
						svg: <Users className="w-12 h-12" />
					},
					{
						title: "Flexible Schedule",
						description:
							"Choose from multiple class times throughout the week, including early morning and evening sessions to fit your busy lifestyle",
						svg: <Calendar className="w-12 h-12" />
					},
					{
						title: "Expert Coaching",
						description:
							"Train with certified coaches who provide form correction, motivation, and programming tailored to your fitness level",
						svg: <Heart className="w-12 h-12" />
					},
					{
						title: "Progressive Programming",
						description:
							"Follow our structured training approach that builds strength, improves conditioning, and delivers consistent results",
						svg: <Dumbbell className="w-12 h-12" />
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
		question:
			"I'm nervous about starting... I've never done fitness classes before",
		answer: "Everyone starts somewhere! Our classes are designed to welcome beginners and experienced members alike. You'll get step-by-step guidance, modifications for all fitness levels, and a supportive environment where you can progress at your own pace."
	},
	{
		question: "I'm worried I won't be able to keep up with the class",
		answer: "Our small group size (maximum 6 people) means you get plenty of personal attention and support. Every exercise can be modified to suit your fitness level, and our expert coaches ensure everyone feels comfortable and successful in their workout."
	},
	{
		question: "I have a busy schedule - how can I fit this in?",
		answer: "We understand busy lifestyles! That's why we offer flexible class times throughout the day, including early mornings, evenings, and weekends. You'll need just 3 sessions per week (45-60 minutes each) to see great results."
	},
	{
		question:
			"I'm worried about the commitment - what if it doesn't work for me?",
		answer: "We offer a trial session so you can experience our training style firsthand. Our memberships are flexible with 3, 6, or 12-month options. Plus, with our 24-hour cancellation policy, you can easily reschedule sessions when life gets busy."
	},
	{
		question: "Do I need to follow a strict meal plan to see results?",
		answer: "Not at all! We focus on sustainable nutrition habits that fit your lifestyle. No strict diets or restrictive meal plans - instead, we'll help you make simple, effective changes while still enjoying your favorite foods in moderation."
	},
	{
		question: "What kind of results can I realistically expect?",
		answer: "With consistent attendance (3x/week) and following our basic nutrition guidance, members typically notice improved energy, better strength, increased confidence, and clothes fitting better within 8-12 weeks. Everyone's journey is different, and we'll help you set realistic goals for your body."
	},
	{
		question: "I have old injuries/health concerns - is this safe for me?",
		answer: "Your safety is our top priority. During your initial consultation, we'll discuss any injuries or health concerns and modify exercises accordingly. Our qualified coaches have experience working with various conditions and will ensure your workouts are both safe and effective."
	},
	{
		question: "What makes your classes different from regular gym classes?",
		answer: "Our small group size (max 6 people) means you get personal attention while enjoying group motivation. You'll receive custom exercise modifications, form correction, and progress tracking. Plus, our supportive atmosphere helps everyone feel welcome and motivated."
	},
	{
		question: "What are the costs involved?",
		answer: "We believe in transparent pricing. Membership options include 3, 6, or 12-month packages - we'll discuss these during your consultation to find the best fit for you."
	}
];
