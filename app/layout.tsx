/* eslint-disable @next/next/no-head-element */

import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/notes">
              <a>Notes</a>
            </Link>
          </nav>
        {children}
        </main>
      </body>
    </html>
  );
}
