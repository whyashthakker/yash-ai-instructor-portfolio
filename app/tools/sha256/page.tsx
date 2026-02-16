'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';

export default function SHA256Generator() {
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');
  const [copied, setCopied] = useState(false);

  async function generateHash() {
    if (!input) {
      setHash('');
      return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    setHash(hashHex);
    setCopied(false);
  }

  async function copyToClipboard() {
    if (hash) {
      await navigator.clipboard.writeText(hash);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">SHA256 Hash Generator</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Generate SHA256 hashes instantly. Free, secure, and runs entirely in your browser.
          </p>
        </div>

        {/* Generator Tool */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
          <div className="space-y-6">
            {/* Input */}
            <div>
              <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-2">
                Enter text to hash
              </label>
              <textarea
                id="input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type or paste your text here..."
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#d97757] focus:border-transparent outline-none resize-none text-gray-800"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={generateHash}
              className="w-full py-3 px-6 bg-[#d97757] text-white font-semibold rounded-xl hover:bg-[#c56646] transition-colors"
            >
              Generate SHA256 Hash
            </button>

            {/* Output */}
            {hash && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SHA256 Hash
                </label>
                <div className="relative">
                  <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm text-gray-800 break-all">
                    {hash}
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 px-3 py-1 text-xs bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">What is SHA256?</h3>
            <p className="text-gray-600 text-sm">
              SHA256 (Secure Hash Algorithm 256-bit) is a cryptographic hash function that produces
              a fixed 256-bit (32-byte) hash value. It&apos;s commonly used for data integrity verification,
              password hashing, and digital signatures.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Privacy First</h3>
            <p className="text-gray-600 text-sm">
              Your data never leaves your browser. All hash generation happens locally using the
              Web Crypto API. No data is sent to any server, ensuring complete privacy and security.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
