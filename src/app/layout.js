const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavigationBar/NavBar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hireloop - Revolutionize Your Hiring Process with AI-Powered Job Descriptions",
  description: " Hireloop is an AI-powered job description generator that helps you create compelling and effective job descriptions in seconds. Say goodbye to writer's block and hello to a streamlined hiring process with Hireloop.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full container mx-auto flex flex-col">
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html >
  );
}
