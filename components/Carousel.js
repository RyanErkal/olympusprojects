"use client";

import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import transformation1 from "@/public/transformations/transformation1.webp";
import transformation2 from "@/public/transformations/transformation2.webp";
import transformation3 from "@/public/transformations/transformation3.webp";
import transformation4 from "@/public/transformations/transformation4.webp";
import transformation6 from "@/public/transformations/transformation6.webp";
import transformation7 from "@/public/transformations/transformation7.webp";
import transformation8 from "@/public/transformations/transformation8.webp";
import transformation9 from "@/public/transformations/transformation9.webp";
import transformation10 from "@/public/transformations/transformation10.webp";
import transformation11 from "@/public/transformations/transformation11.webp";
import transformation12 from "@/public/transformations/transformation12.webp";
import transformation13 from "@/public/transformations/transformation13.webp";
import transformation14 from "@/public/transformations/transformation14.webp";
import transformation16 from "@/public/transformations/transformation16.webp";
import transformation17 from "@/public/transformations/transformation17.webp";
import transformation18 from "@/public/transformations/transformation18.webp";
import transformation19 from "@/public/transformations/transformation19.webp";
import transformation20 from "@/public/transformations/transformation20.webp";
import transformation21 from "@/public/transformations/transformation21.webp";
import transformation22 from "@/public/transformations/transformation22.webp";
import transformation23 from "@/public/transformations/transformation23.webp";
import transformation24 from "@/public/transformations/transformation24.webp";
import transformation25 from "@/public/transformations/transformation25.webp";
import transformation27 from "@/public/transformations/transformation27.webp";
import transformation28 from "@/public/transformations/transformation28.webp";
import transformation29 from "@/public/transformations/transformation29.webp";
import transformation30 from "@/public/transformations/transformation30.webp";
import transformation31 from "@/public/transformations/transformation31.webp";
import transformation32 from "@/public/transformations/transformation32.webp";
import transformation33 from "@/public/transformations/transformation33.webp";
import transformation34 from "@/public/transformations/transformation34.webp";

export default function CarouselComponent() {
	return (
		<section className="bg-slate-950">
			<div className="mx-auto py-12 relative px-4">
				<Carousel
					opts={{
						align: "start",
						loop: true
					}}
					plugins={[
						Autoplay({
							delay: 2000,
							stopOnInteraction: true
						})
					]}>
					<CarouselContent>
						{images.map((image, index) => (
							<CarouselItem
								key={index}
								className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6">
								<Image
									src={image}
									alt={`Transformation ${index + 1}`}
									width={500}
									height={300}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="absolute left-4 top-1/2" />
					<CarouselNext className="absolute right-4 top-1/2" />
				</Carousel>
			</div>
		</section>
	);
}

const images = [
	transformation1,
	transformation2,
	transformation3,
	transformation4,
	transformation6,
	transformation7,
	transformation8,
	transformation9,
	transformation10,
	transformation11,
	transformation12,
	transformation13,
	transformation14,
	transformation16,
	transformation17,
	transformation18,
	transformation19,
	transformation20,
	transformation21,
	transformation22,
	transformation23,
	transformation24,
	transformation25,
	transformation27,
	transformation28,
	transformation29,
	transformation30,
	transformation31,
	transformation32,
	transformation33,
	transformation34
];
