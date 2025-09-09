'use client';

import EmailContact from '@/components/EmailContact';

export default function ContactMePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-16 pb-8">
      <h1 className="text-4xl font-bold mb-4">Bang My Line?</h1>
      <div className="space-y-4">
        <p className="text-lg">
          Want to get in touch? Bang my line!
        </p>
        <EmailContact/>
      </div>
    </div>
  );
}
