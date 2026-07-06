import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Sushmitha | Full Stack Developer | AI Engineer",
  description: "Specialist in Full Stack Development, Machine Learning and Artificial Intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-[#f5f8ff] text-slate-800 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
