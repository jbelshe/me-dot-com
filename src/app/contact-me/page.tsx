'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactMePage() {
  const [isHovering, setIsHovering] = useState(false);
  const [emailCopied, setEmailCopied] = useState('UPDATE ME TO ADD COPY BUTTON TO THIS');
  
  const email = 'bang-my-line[at]jackbelshe[dot]com';

  return (
    <div className="max-w-4xl mx-auto px-4 pt-16 pb-8">
      <h1 className="text-4xl font-bold mb-4">Bang My Line?</h1>
      <div className="space-y-4">
        <p className="text-lg">
          Want to get in touch? Bang my line!
        </p>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex items-center w-full">
            <div 
              className="flex flex-1 justify-between items-center bg-white p-4 rounded-md border border-gray-200 cursor-pointer transition-all duration-200 hover:bg-gray-50 whitespace-nowrap"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => {
                navigator.clipboard.writeText(email.replace(/\[at\]/g, "@").replace(/\[dot\]/g, ".").replace(/-/g, "_"));
                if (emailCopied !== 'Email copied to clipboard!') {
                  setEmailCopied('Email copied to clipboard!');
                }
                else {
                  setEmailCopied("\u00A0");
                  setTimeout(() => setEmailCopied('Email copied to clipboard!'), 100);
                }
              }}
            >
              <code className="text-lg select-all font-mono">
                {isHovering ? email.replace(/\[at\]/g, "@")
                                      .replace(/\[dot\]/g, ".")
                                      .replace(/-/g, "_")
                                : email}
              </code>
              <button 
                className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 "
                onClick={() => {}}
              >
                <Image src="/icons/copy_white.svg" alt="Copy" width={24} height={24} />
              </button>
            </div>

            <div className="flex-shrink-0">
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 whitespace-nowrap"
                onClick={() => {}}
              >
                <Image src="/icons/email_white.svg" alt="Email" width={24} height={24} />
              </button>
            </div>
          </div>
          <p className="whitespace-pre mt-3 text-sm text-gray-600">
            {emailCopied}
          </p>
        </div>
      </div>
    </div>
  );
}
