import Image from "next/image"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 h-18 font-semibold items-center p-4 mt-20">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved by QuiverTech Solutions</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link href = "/">
          <Image
            alt="X logo"
            src="/x-logo.svg"
            width={20}
            height={20}
            className="max-w-sm"
          />
        </Link>
        <Link href = "/">
          <Image
            alt="instagram logo"
            src="/instagram-logo.svg"
            width={20}
            height={20}
            className="max-w-sm"
          />
        </Link>
        <Link href = "/">
          <Image
            alt="linkedin logo"
            src="/linkedin-logo.svg"
            width={20}
            height={20}
            className="max-w-sm"
          />
        </Link>
      </nav>
    </footer>
  );
}

