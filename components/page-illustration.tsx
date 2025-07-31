import Image from "next/image";
import Illustration from "@/public/images/page-illustration.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function PageIllustration({
  multiple = false,
}: Readonly<{
  multiple?: boolean;
}>) {
  return (
    <>
      {/* Main SVG illustration, centered and layered */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 md:-translate-x-1/4 w-[846px] h-[594px] flex justify-center animate-float-box"
        aria-hidden="true"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <Image
          className="max-w-none transition-transform duration-500 hover:scale-105 hover:drop-shadow-[0_0_32px_#06b6d4]"
          src={Illustration}
          width={846}
          height={594}
          alt="Page illustration"
          style={{ transition: 'transform 0.7s, opacity 0.7s', opacity: 0.95 }}
        />
      </div>
      {/* Blurred shapes for accent and depth, matching template style */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-20 -translate-x-1/2 md:-translate-x-1/4 w-[760px] h-[668px] opacity-60 animate-float-slow"
        aria-hidden="true"
        data-aos="fade-in"
        data-aos-duration="1600"
        data-aos-delay="300"
      >
        <Image
          className="max-w-none transition-transform duration-700 hover:scale-105 hover:drop-shadow-[0_0_48px_#06b6d4]"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
          style={{ transition: 'transform 0.9s, opacity 0.9s', opacity: 0.8 }}
        />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 -z-20 -translate-x-1/2 md:-translate-x-1/4 w-[760px] h-[668px] opacity-50 animate-float-slower"
        aria-hidden="true"
        data-aos="fade-in"
        data-aos-duration="1800"
        data-aos-delay="500"
      >
        <Image
          className="max-w-none transition-transform duration-700 hover:scale-105 hover:drop-shadow-[0_0_48px_#06b6d4]"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
          style={{ transition: 'transform 1s, opacity 1s', opacity: 0.7 }}
        />
      </div>
      {/* Optionally add more shapes if multiple is true */}
      {multiple && (
        <>
          <div
            className="pointer-events-none absolute left-1/2 top-[400px] -z-10 -translate-x-full opacity-40 animate-float-box"
            aria-hidden="true"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="700"
          >
            <Image
              className="max-w-none transition-transform duration-500 hover:scale-105 hover:drop-shadow-[0_0_32px_#06b6d4]"
              src={BlurredShapeGray}
              width={760}
              height={668}
              alt="Blurred shape"
              style={{ transition: 'transform 0.7s, opacity 0.7s', opacity: 0.5 }}
            />
          </div>
          <div
            className="pointer-events-none absolute left-1/2 top-[440px] -z-10 -translate-x-1/3 opacity-40 animate-float-box"
            aria-hidden="true"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="900"
          >
            <Image
              className="max-w-none transition-transform duration-500 hover:scale-105 hover:drop-shadow-[0_0_32px_#06b6d4]"
              src={BlurredShape}
              width={760}
              height={668}
              alt="Blurred shape"
              style={{ transition: 'transform 0.7s, opacity 0.7s', opacity: 0.5 }}
            />
          </div>
        </>
      )}
    </>
  );
}
