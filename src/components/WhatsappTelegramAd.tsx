import Image from "next/image";
import Link from "next/link";

export default function Advert() {
  return (
    <div className="hero bg-yellow-300 ">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">Studybot is now on WhatsApp and Telegram</h1>
          <p className="py-6">
            Access your personal study assistant anytime, anywhere. Chat with StudyBot on your favorite platform for quick help, practice questions, and progress tracking.
          </p>
          <button className="btn btn-outline mr-5">
            <Link href="/login" className="flex flex-row">
              <Image
              alt="whatsapp logo"
              src="/whatsapp-icon.svg"
              width={20}
              height={20}
              className="max-w-sm mr-2"
              />Get Started
              Get Started
            </Link>
          </button>
          <button className="btn btn-warning bg-white text-black border-0">
            <Link href="/login" className="flex flex-row">
            <Image
              alt="telegram logo"
              src="/telegram-icon.svg"
              width={20}
              height={20}
              className="max-w-sm mr-2"
              />Get Started
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}