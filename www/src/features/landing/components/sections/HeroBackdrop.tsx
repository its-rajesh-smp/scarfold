import Image from "next/image";
import heroLake from "@/assets/hero-lake.webp";

// Sits behind the nav and hero. Height grows with width so the land stays level with the button.
export function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] overflow-hidden md:h-[calc(397px_+_26vw)]"
    >
      <Image
        src={heroLake}
        alt=""
        priority
        placeholder="blur"
        sizes="100vw"
        className="size-full object-cover object-bottom"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent to-canvas" />
    </div>
  );
}
