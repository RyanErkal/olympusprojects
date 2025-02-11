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
								className="basis-1/2 xl:basis-1/4 2xl:basis-1/5">
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
	transformation10
];
