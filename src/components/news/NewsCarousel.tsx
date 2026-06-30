import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

import NewsCarouselItem from "./NewsCarouselItem";

const slides = [
  {
    id: "item1",
    title: "New Member Promotion",
    description: "Get 20% off your first private pilates session this month.",
    image:
      "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  },
  {
    id: "item2",
    title: "Weekend Special Classes",
    description: "Join reformer pilates weekend sessions.",
    image:
      "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  },
  {
    id: "item3",
    title: "Instructor Highlight",
    description: "Meet our certified instructors.",
    image:
      "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  },
  {
    id: "item4",
    title: "Studio Upgrade",
    description: "New equipment just arrived ✨",
    image:
      "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
  },
];

export default function NewsCarousel() {
  return (
    <div className="relative w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <NewsCarouselItem {...slide} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
