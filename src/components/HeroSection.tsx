import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return(
    <div className="hero bg-yellow-300 ">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          alt="Studybot logo"
          src="/studybot-logo.svg"
          width={400}
          height={400}
          className="max-w-sm"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome!</h1>
          <p className="py-6">
            Your all-in-one study platform designed to help you master concepts, stay organized, and achieve academic success through smart tools and personalized learning resources.
          </p>
          <button className="btn btn-warning">
            <Link href="/login">
              Get Started
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}