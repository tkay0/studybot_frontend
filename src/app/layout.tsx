import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar bg-primary text-primary-content rounded-b-lg shadow-sm">Nav</nav>
        </header>

        <main>{children}</main>

        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by QuiverTech Solutions</p>
           </aside>
        </footer>
      </body>
    </html>
  );
}
