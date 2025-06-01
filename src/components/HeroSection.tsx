import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return(
    <div className="hero bg-amber-50 mx-auto">
      <div className="hero-content flex-col lg:flex-row py-15">
        <div>
          <p className="text-[14px]">YOUR GATEWAY TO WASSCE SUCCESS</p>
          <h1 className="text-7xl font-bold ">Welcome to<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from bg-yellow-400 to-orange-500">STUDYBOT!</span></h1>
          <p className="py-8 max-w-2xl">
            Your all-in-one study platform designed to help you master concepts, stay organized, and achieve academic success through smart tools and personalized learning resources.
          </p>
          <button className="btn btn-warning">
            <Link href="/login">
              Get Started
            </Link>
          </button>
        </div>
        <Image
          alt="hero image"
          src="/hero-image.png"
          width={768}
          height={512}
          className="w-full max-w-xl h-auto"
        />
      </div>
    </div>
  );
}