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

          <nav className="navbar h-18 bg-white text-black shadow-sm">
            <Link href="/" className="navbar-start hover:opacity-60 font-bold text-2xl">
              Study<span className="text-warning">Bot</span></Link>

            <div className="navbar-center flex gap-4 font-medium">
              <Link href="/" className="hover:text-warning">Dashboard</Link>

              <Link href="/" className="hover:text-warning">Questions</Link>

              <Link href="/" className="hover:text-warning">Quiz</Link>

              <Link href="/" className="hover:text-warning">Progress</Link>
            </div>
            <Link href="/login" className="navbar-end"><button className="btn btn-warning text-black">Login</button></Link>
          </nav>

        </header>

        <main className="flex-grow">{children}</main>

        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 mt-20">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by QuiverTech Solutions</p>
           </aside>
        </footer>
      </body>
    </html>
  );
}
