"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

// Set your end date here (format: YYYY, MM-1, DD, HH, MM, SS)
const END_DATE = new Date(2025, 2, 0, 0, 0, 0);

export default function Countdown() {
	const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

	function calculateTimeLeft() {
		const difference = END_DATE - new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60)
			};
		}

		return timeLeft;
	}

	React.useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<section className="bg-slate-950">
			<div className="max-w-7xl mx-auto py-24 px-4">
				<div className="w-full mx-auto flex flex-col items-center bg-slate-900 border-2 border-slate-800 p-6 sm:p-8 xl:p-16 rounded-lg mt-12 lg:mt-16">
					<h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-center bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
						FEBRUARY FITNESS FOUNDATIONS
					</h2>
					<div className="flex mt-8 lg:mt-12 gap-4 sm:gap-8">
						<TimeBlock value={timeLeft.days} label="DAYS" />
						<TimeBlock value={timeLeft.hours} label="HOURS" />
						<TimeBlock value={timeLeft.minutes} label="MINUTES" />
						<TimeBlock value={timeLeft.seconds} label="SECONDS" />
					</div>
					<div className="flex flex-col items-center gap-4 text-slate-300 text-center text-lg mt-12 lg:mt-16">
						<h3 className="font-semibold text-2xl text-slate-100">
							JOIN OUR GROUP PT PROGRAM THIS MONTH AND RECEIVE
						</h3>
						<p>
							<Check className="inline text-green-400 mr-2 h-5 w-5" />
							Free Nutritionist Consultation (Worth £150)
						</p>
						<p>
							<Check className="inline text-green-400 mr-2 h-5 w-5" />
							Custom Recipe Cookbook for Busy Lives
						</p>
						<p>
							<Check className="inline text-green-400 mr-2 h-5 w-5" />
							Complimentary Goal-Setting Session
						</p>
						<p>
							<Check className="inline text-green-400 mr-2 h-5 w-5" />
							£50 Off Your First Month
						</p>
					</div>
					<div className="flex flex-col items-center gap-4 text-slate-100 text-center mt-8 lg:mt-12">
						<p className="font-semibold text-2xl">
							Available for the First 10 New Members
						</p>
						<p className="font-semibold text-2xl">
							Valid Until February 28th
						</p>
					</div>
					<div className="flex items-center justify-center gap-2 mt-12 lg:mt-16">
						<Link
							href="#contact"
							className="bg-gradient-to-r from-[#FDD557] to-amber-500 text-slate-900 font-bold py-4 px-6 rounded-lg hover:brightness-110 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FDD557] focus:ring-offset-2 focus:ring-offset-slate-900">
							Secure Your Spot
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

function TimeBlock({ value, label }) {
	return (
		<div className="flex flex-col items-center">
			<div className="bg-slate-800 rounded-lg p-3 sm:p-4">
				<span className="text-3xl sm:text-5xl xl:text-7xl font-black text-slate-100">
					{value?.toString().padStart(2, "0") || "00"}
				</span>
			</div>
			<span className="text-xs sm:text-sm mt-2 font-medium text-slate-400">
				{label}
			</span>
		</div>
	);
}
