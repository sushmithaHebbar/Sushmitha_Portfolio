import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Sushmitha | Portfolio",
  description: "Web Developer | Explorer | Lifelong Learner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased bg-primary text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
