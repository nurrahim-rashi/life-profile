export default function NewsCarouselNav() {
  return (
    <div className="flex w-full justify-center gap-2 py-6">
      {[1, 2, 3, 4].map((item) => (
        <a
          key={item}
          href={`#item${item}`}
          className="btn btn-md bg-white text-zinc-600"
        >
          {item}
        </a>
      ))}
    </div>
  );
}
