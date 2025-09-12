'use client';

import EmailContact from '@/components/EmailContact';

export default function ContactMePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-16 pb-8">
      <h1 className="text-4xl font-bold mb-4">Talk To Jack?</h1>
      <div className="space-y-4">
        <p className="text-lg">
          Want to talk? Give my email a ring!
        </p>
        <EmailContact/>
      </div>
    </div>
  );
}
