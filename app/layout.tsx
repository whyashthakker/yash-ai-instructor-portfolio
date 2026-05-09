import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Thakker - AI Instructor & Product Leader | 250K+ Students Worldwide",
  description: "Leading AI Instructor and Product Leader with 12+ years experience. Taught 250,000+ students across Udemy, Coursera, Codecademy. Worked with TATA, PayPal, Fortune 500s. Built olly.social (25K+ users), explainx.ai (100K+ users/month) & infloq.com. Expert in Generative AI, LLMs, Machine Learning, SaaS development, AI Consulting.",
  keywords: ["Yash Thakker", "AI Instructor", "Generative AI", "Product Management", "Machine Learning", "LLMs", "ChatGPT", "OpenAI", "Claude AI", "SaaS", "Udemy", "Coursera", "Codecademy", "TATA", "PayPal", "olly.social", "explainx.ai", "infloq.com", "AI Consulting", "AI Strategy", "Technical Leadership", "Online Education", "AI Courses", "Programming", "Python", "Data Science", "Deep Learning", "Neural Networks", "AI Model Explainability", "Influencer Marketing Platform"],
  authors: [{ name: "Yash Thakker", url: "https://goyashy.com" }],
  creator: "Yash Thakker",
  publisher: "Yash Thakker",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Yash Thakker - AI Instructor & Product Leader | 250K+ Students Worldwide",
    description: "Leading AI Instructor with 12+ years experience. Built olly.social (25K+ users), explainx.ai (100K+ users/month) & infloq.com. Taught 250,000+ students across top platforms. Expert in Generative AI, LLMs, and Product Management.",
    type: "website",
    url: "https://goyashy.com",
    siteName: "Yash Thakker - AI Instructor",
    locale: "en_US",
    images: [
      {
        url: "https://goyashy.com/yash.png",
        width: 800,
        height: 800,
        alt: "Yash Thakker - AI Instructor and Product Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@goyashy",
    creator: "@goyashy",
    title: "Yash Thakker - AI Instructor & Product Leader | 250K+ Students",
    description: "Leading AI Instructor with 250K+ students taught. Built olly.social, explainx.ai & infloq.com. Expert in Generative AI, LLMs, and Product Management.",
    images: ["https://goyashy.com/yash.png"],
  },
  alternates: {
    canonical: "https://goyashy.com",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
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
      <GoogleAnalytics gaId="G-HTS77JK8C2" />
    </html>
  );
}
