import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Thakker - AI Instructor & Product Leader | 100K+ Students Taught",
  description: "Leading AI Instructor and Product Leader with 12+ years experience. Taught 100,000+ students across Udemy, Coursera, Codecademy. Worked with TATA, PayPal. Built olly.social (25K+ users) & snapy.ai (35K+ users). Expert in Generative AI, LLMs, Machine Learning, SaaS development.",
  keywords: ["Yash Thakker", "AI Instructor", "Generative AI", "Product Management", "Machine Learning", "LLMs", "ChatGPT", "OpenAI", "SaaS", "Udemy", "Coursera", "Codecademy", "TATA", "PayPal", "olly.social", "snapy.ai", "AI Consulting", "AI Strategy", "Technical Leadership", "Online Education", "AI Courses", "Programming", "Python", "Data Science", "Deep Learning", "Neural Networks"],
  authors: [{ name: "Yash Thakker" }],
  openGraph: {
    title: "Yash Thakker - AI Instructor & Product Leader | 100K+ Students Taught",
    description: "Leading AI Instructor with 12+ years experience. Built olly.social (25K+ users) & snapy.ai (35K+ users). Taught 100,000+ students across top platforms.",
    type: "website",
    images: [
      {
        url: "/yash.png",
        width: 400,
        height: 400,
        alt: "Yash Thakker - AI Instructor and Product Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Thakker - AI Instructor & Product Leader",
    description: "Leading AI Instructor with 100K+ students taught. Built olly.social & snapy.ai. Expert in Generative AI, LLMs, and Product Management.",
    images: ["/yash.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
