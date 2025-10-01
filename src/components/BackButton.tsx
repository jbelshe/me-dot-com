'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors transition-shadow hover:bg-gray-50 hover:shadow-md active:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
      aria-label="Go back"
    >
      <span>← Back
      </span>
    </button>
  );
}