import Footer from "@/components/Footer";
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
              Study<span className="text-transparent bg-clip-text bg-gradient-to-r from bg-yellow-400 to-orange-500">Bot</span></Link>

            <div className="navbar-center flex gap-4 font-medium">
              <Link href="/dashboard" className="hover:text-warning">Dashboard</Link>

              <Link href="/Pasco" className="hover:text-warning">Questions</Link>

              <Link href="/Quizes" className="hover:text-warning">Quiz</Link>

            </div>
            <Link href="/login" className="navbar-end"><button className="btn btn-warning text-black">Login</button></Link>
          </nav>

        </header>

        <main className="flex-grow">{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
