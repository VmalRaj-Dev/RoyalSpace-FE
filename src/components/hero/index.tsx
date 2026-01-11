import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import modernBeige from "/modern-beige-living-room-interior.webp";
import livingRoom from "/living-room-with-couch-table-with-chairs-table-with-view-outdoors.webp"
import interiorMockup from "/interior-design-mockup.webp"
import interiorKitchen from "/3d-rendering3d-illustration-interior-scene-mockupkitchen-dining-room-render-modern-styleand-minibar.webp";
import sophisticatedLounge from "/sophisticated-lounge-with-nesting-marble-coffee-tables.webp"
// Hero images
const heroImages = [
	modernBeige,
	livingRoom,
	interiorMockup,
	interiorKitchen,
	sophisticatedLounge,
];

// Animation variants
const slideVariants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 1000 : -1000,
		opacity: 0,
	}),
	center: {
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => ({
		x: direction < 0 ? 1000 : -1000,
		opacity: 0,
	}),
};

export default function HeroSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	// Auto-advance slides
	useEffect(() => {
		const timer = setInterval(() => {
			setDirection(1);
			setCurrentIndex((prev) => (prev + 1) % heroImages.length);
		}, 5000);

		return () => clearInterval(timer);
	}, []);

	const nextSlide = useCallback(() => {
		setDirection(1);
		setCurrentIndex((prev) => (prev + 1) % heroImages.length);
	}, []);

	const prevSlide = useCallback(() => {
		setDirection(-1);
		setCurrentIndex(
			(prev) => (prev - 1 + heroImages.length) % heroImages.length
		);
	}, []);

	const goToSlide = useCallback(
		(index: number) => {
			setDirection(index > currentIndex ? 1 : -1);
			setCurrentIndex(index);
		},
		[currentIndex]
	);

	return (
		<section className="relative h-screen max-h-[900px] min-h-[700px] w-full overflow-hidden bg-white">
			{/* Image carousel */}
			<div className="relative w-full h-full">
				<AnimatePresence initial={false} custom={direction}>
					<motion.div
						key={currentIndex}
						custom={direction}
						variants={slideVariants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { type: "spring", stiffness: 300, damping: 30 },
							opacity: { duration: 0.3 },
						}}
						className="absolute inset-0"
					>
						<img
							src={heroImages[currentIndex]}
							alt="Hero"
							className="w-full h-full object-cover"
							loading={currentIndex === 0 ? "eager" : "lazy"}
						/>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Navigation buttons */}
			<button
				onClick={prevSlide}
				className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full transition-all shadow-lg"
				aria-label="Previous"
			>
				<ChevronLeft className="h-6 w-6 text-foreground" />
			</button>

			<button
				onClick={nextSlide}
				className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full transition-all shadow-lg"
				aria-label="Next"
			>
				<ChevronRight className="h-6 w-6 text-foreground" />
			</button>

			{/* Dots navigation */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
				{heroImages.map((_, idx) => (
					<button
						key={idx}
						onClick={() => goToSlide(idx)}
						className={`w-2 h-2 rounded-full transition-all ${
							idx === currentIndex
								? "bg-primary w-8"
								: "bg-white/60 hover:bg-white/80"
						}`}
						aria-label={`Go to slide ${idx + 1}`}
					/>
				))}
			</div>
		</section>
	);
}
