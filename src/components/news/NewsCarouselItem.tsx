type Props = {
  id: string;
  image: string;
  title: string;
  description: string;
};

export default function NewsCarouselItem({
  id,
  image,
  title,
  description,
}: Props) {
  return (
    <div id={id} className="carousel-item w-full relative">
      <img src={image} className="w-full object-cover h-[500px]" />

      <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-8">
        <h2 className="text-3xl font-bold">{title}</h2>

        <p className="mt-2 text-sm text-white/80">{description}</p>
      </div>
    </div>
  );
}
