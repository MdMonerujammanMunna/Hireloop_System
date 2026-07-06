import Image from "next/image";
import Link from "next/link";

export default function ImageGallary() {
    const images = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
            large: true,
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
        },
    ];

    return (
        <section className="rounded-2xl border border-white/5 bg-[#1D1D1F] p-8">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">
                    Life at LuminaTech
                </h2>

                <Link
                    href="#"
                    className="text-sm text-zinc-400 transition hover:text-white"
                >
                    View Gallery
                </Link>
            </div>

            {/* Gallery */}
            <div className="grid gap-4 lg:grid-cols-3">
                {/* Large Image */}
                <div className="relative h-[420px] overflow-hidden rounded-xl lg:col-span-2">
                    <Image
                        src={images[0].src}
                        alt="Office"
                        fill
                        className="object-cover transition duration-500 hover:scale-105"
                    />
                </div>

                {/* Right Images */}
                <div className="grid gap-4">
                    {images.slice(1).map((image) => (
                        <div
                            key={image.id}
                            className="relative h-[202px] overflow-hidden rounded-xl"
                        >
                            <Image
                                src={image.src}
                                alt="Office"
                                fill
                                className="object-cover transition duration-500 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}