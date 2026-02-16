import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SHA256 Hash Generator - Free Online Tool',
  description: 'Generate SHA256 hashes instantly. Free, secure, and runs entirely in your browser.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SHA256Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
