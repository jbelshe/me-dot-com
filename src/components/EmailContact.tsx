'use client';

import Image from 'next/image';
import { useState } from 'react';


export default function EmailContact() {
    const [isHovering, setIsHovering] = useState(false);
    const [emailCopied, setEmailCopied] = useState("\u00A0");
    const email = 'bang-my-line[at]jackbelshe[dot]com';
    const copied_message = "Email copied to clipboard!";
    
    return (
        <div className=''>
            <div className="flex items-center w-full max-w-lg">
                <div
                    className="flex flex-1 justify-between items-center bg-gray-50 p-2 rounded-md border border-gray-200 cursor-pointer transition-all duration-200 hover:bg-gray-50 whitespace-nowrap"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <code className="text-lg select-all font-mono">
                        {isHovering ? email.replace(/\[at\]/g, "@")
                            .replace(/\[dot\]/g, ".")
                            .replace(/-/g, "_")
                            : email}
                    </code>
                    <div className="flex justify-end gap-2">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 gap-2 rounded-md transition-colors duration-200 "
                            onClick={() => { 
                                navigator.clipboard.writeText(email.replace(/\[at\]/g, "@").replace(/\[dot\]/g, ".").replace(/-/g, "_"));
                                setEmailCopied(copied_message);
                                setTimeout(() => setEmailCopied("\u00A0"), 3000);
                            }}
                        >
                            <Image src="/icons/copy_white.svg" alt="Copy" width={24} height={24} />
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 whitespace-nowrap"
                            onClick={() => {
                                window.location.href = `mailto:${email.replace(/\[at\]/g, "@").replace(/\[dot\]/g, ".").replace(/-/g, "_")}`;
                            }}
                        >
                            <Image src="/icons/email_white.svg" alt="Email" width={24} height={24} />
                        </button>
                    </div>
                </div>

            </div>
            <p className="whitespace-pre mt-1 text-sm text-gray-600 transition-opacity duration-500">
                {emailCopied}
            </p>
        </div>
    );
}
