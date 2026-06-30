type Props = {
  id: string;
  image: string;
  title: string;
  description: string;
};

export default function NewsCarouselItem({ image, title, description }: Props) {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-3xl">
      <img src={image} className="h-full w-full object-cover" />

      <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm opacity-90">{description}</p>
      </div>
    </div>
  );
}
