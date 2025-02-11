import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion";

export default function FAQ({ faqItems }) {
	return (
		<section className="bg-slate-950">
			<div className="max-w-7xl mx-auto py-24 px-4">
				<div className="flex flex-col items-center gap-12">
					<h2 className="text-4xl xl:text-6xl font-black text-center bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
						FREQUENTLY ASKED QUESTIONS
					</h2>
				</div>
				<Accordion
					type="single"
					collapsible
					className="mt-12 text-slate-100 max-w-3xl mx-auto">
					{faqItems.map((item, index) => (
						<AccordionItem
							key={`item-${index + 1}`}
							value={`item-${index + 1}`}>
							<AccordionTrigger className="text-xl font-bold data-[state=open]:text-[#FDD557] hover:no-underline">
								{item.question}
							</AccordionTrigger>
							<AccordionContent className="text-lg text-slate-300">
								{item.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}

// const faqItems = [
// 	{
// 		question: "How much time do I need to commit?",
// 		answer: "Our program is designed for busy women, requiring just 3 sessions per week, each lasting 45-60 minutes. We offer flexible scheduling with morning, evening, and weekend slots to fit your lifestyle."
// 	},
// 	{
// 		question: "I'm not fit enough to start...",
// 		answer: "Every journey starts somewhere! Our program is designed for all fitness levels, with exercises modified to your current ability. Our expert coaches will guide you through proper form and progression at your own pace."
// 	},
// 	{
// 		question:
// 			"What makes your group training different from regular gym classes?",
// 		answer: "Unlike typical gym classes, we offer small group sessions (max 6 people) with personalized attention. You'll get custom programming, form correction, and progress tracking while enjoying the motivation of a supportive community."
// 	},
// 	{
// 		question: "Do I need to follow a strict diet?",
// 		answer: "No strict diets here! Our nutrition guidance focuses on sustainable habits that fit your lifestyle. We'll help you make simple, effective changes while still enjoying your favorite foods in moderation."
// 	},
// 	{
// 		question: "What if I have injuries or health concerns?",
// 		answer: "Your safety is our priority. During your initial consultation, we'll discuss any injuries or health concerns and modify exercises accordingly. Our coaches are qualified to work with various conditions and will ensure safe, effective workouts."
// 	},
// 	{
// 		question: "What results can I expect in 90 days?",
// 		answer: "While results vary, committed members typically see increased strength, improved energy levels, better muscle definition, and clothing fitting better within 90 days. You'll also gain confidence in your exercise form and nutritional choices."
// 	},
// 	{
// 		question: "Is there a joining fee or contract?",
// 		answer: "We believe in transparency. There's a one-time joining fee of £25 which includes your welcome pack and initial assessment. Our memberships are available in 3, 6, or 12-month packages with no hidden fees."
// 	},
// 	{
// 		question: "I'm worried about working out in a group...",
// 		answer: "We understand this concern! Our small group size (max 6 people) ensures you get plenty of personal attention. Plus, our community is incredibly supportive - many members started feeling the same way and now love the group energy."
// 	},
// 	{
// 		question: "What's your cancellation policy?",
// 		answer: "We require 24 hours notice for session cancellations. This allows us to offer your spot to another member. If you need to pause or cancel your membership, we require 30 days written notice."
// 	}
// ];
