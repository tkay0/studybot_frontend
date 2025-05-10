import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-base-200">
        <header>
          <nav className="navbar bg-primary text-primary-content rounded-b-lg shadow-sm">
            <Link href="/" className="navbar-start hover:underline font-bold">StudyBot</Link>
            <div className="navbar-center flex gap-4">
              <Link href="/" className="hover:underline">Dashboard</Link>
              <Link href="/" className="hover:underline">Questions</Link>
              <Link href="/" className="hover:underline">Quiz</Link>
              <Link href="/" className="hover:underline">Progress</Link>
            </div>
            <Link href="/" className="navbar-end hover:underline">Login</Link>
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by QuiverTech Solutions</p>
           </aside>
        </footer>
      </body>
    </html>
  );
}
