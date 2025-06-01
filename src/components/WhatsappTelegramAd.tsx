import Image from "next/image";
import Link from "next/link";

export default function Advert() {
  return (
    <div className="hero bg-amber-50">
      <div className="hero-content flex-col lg:flex-row py-25">
        <div>
          <h1 className="text-5xl font-bold">Studybot is now on <span className="text-transparent bg-clip-text bg-gradient-to-r from bg-yellow-400 to-orange-500">WhatsApp and Telegram</span></h1>
          <p className="py-6">
            Access your personal study assistant anytime, anywhere. Chat with StudyBot on your favorite platform for quick help, practice questions, and progress tracking.
          </p>
          <div className="flex flex-col lg:flex-row gap-1">
            <button className="btn btn-warning w-60 text-black hover:bg-base-100">
              <Link href="/login" className="flex flex-row">
                <Image
                alt="whatsapp logo"
                src="/whatsapp-icon.svg"
                width={20}
                height={20}
                className="max-w-sm mr-2"
                />Use StudyBot on WhatsApp
              </Link>
            </button>
            <button className="btn btn-outline btn-warning text-black w-60">
              <Link href="/login" className="flex flex-row">
              <Image
                alt="telegram logo"
                src="/telegram-icon.svg"
                width={20}
                height={20}
                className="max-w-sm mr-2"
                />Use StudyBot on Telegram
              </Link>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}