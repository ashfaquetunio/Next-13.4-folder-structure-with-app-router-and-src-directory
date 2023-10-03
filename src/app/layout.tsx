import type { Metadata } from "next";
import "./../styles/global.scss";
import { Orbitron } from "next/font/google";
import { Footer, Header } from "./../components";
import "swiper/css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Home",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, reiciendis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={orbitron.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
