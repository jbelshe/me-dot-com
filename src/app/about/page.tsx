'use client';

import { useState } from 'react';
import Image from 'next/image';
import { versions } from './content';
import type { Version, SectionType } from './types';
import EmailContact from '@/components/EmailContact';

export default function AboutPage() {
  const [selectedVersions, setSelectedVersions] = useState<Record<SectionType, Version | null>>({
    background: null,
    career: null,
    personal: null
  });

  const sectionTitles: Record<SectionType, string> = {
    background: 'Background',
    career: 'Career',
    personal: 'Personal'
  };

  const handleVersionSelect = (section: SectionType, version: Version) => {
    setSelectedVersions(prev => ({
      ...prev,  // load the previous state into prev
      // evaluate the section dict{} to get it's value (background/career/personal) to use as a key
      [section]: prev[section] === version ? null : version // if the version was already selected, clear it
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-center mb-6">
        <div className="relative h-80 w-80 rounded-full overflow-hidden border-2 border-black">
          <Image
            src="https://cdn.jackbelshe.com/images/about/prof_front1.jpg"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      
      <div className="mb-8 text-left">
        <p className="text-lg mb-6">
          Hi, I&apos;m Jack. Some people call me JT. I&apos;m an engineer. I like learning and building things.
          <br /><br />
          I made this website because I&apos;m fresh out of grad school and people say it may help me get a job.
          <br /><br />
          Sound a bit desperate and unoriginal?
          <br /><br />
          Could never be me! Let&apos;s have a little fun with this.
        </p>
      </div>

      {/* Version Selectors */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12 space-y-4 border-1 border-gray-200">
        <p className="text-lg font-semibold mb-6">
          Customize my bio to your preferred length
        </p>
        {(Object.keys(sectionTitles) as SectionType[]).map((section) => (
          <div key={section} className="flex flex-col sm:flex-row sm:items-center gap-4 py-2 border-b border-gray-100 last:border-0 last:pb-0">
            <h2 className="text-lg font-semibold text-gray-800 min-w-[100px] sm:min-w-[120px] mr-4">
              {sectionTitles[section]}
            </h2>
            <div className="flex flex-1 justify-between w-full gap-1">
              {(['shortest', 'shorter', 'longer', 'longest'] as Version[]).map((version) => (
                <button
                  key={version}
                  onClick={() => handleVersionSelect(section, version)}
                  className={`px-2 py-1.5 text-xs sm:text-sm rounded-md transition-colors flex-1 ${
                    selectedVersions[section] === version
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {version.charAt(0).toUpperCase() + version.slice(1)}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Combined Content Display */}
      {/* iterate through all the sections to see if any are selected 
      if any are none selected, the "&&" will not render the div  (sections are null by default)*/} 
      {Object.values(selectedVersions).some(version => version !== null) && (
        <div className="bg-gray-50 p-8 rounded-lg border"> 
          <div className="space-y-6 text-gray-700 leading-relaxed">
            {(Object.keys(selectedVersions) as SectionType[]).map((section) => {
              const selectedVersion = selectedVersions[section];
              if (!selectedVersion) return null;
              const content = versions[section][selectedVersion];
              return (
                <div key={section} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {sectionTitles[section]}
                  </h3>
                  <div className="pl-4 border-l-2 border-gray-200">
                    {typeof content === 'string' ? (
                      <p className="whitespace-pre-line">{content}</p>
                    ) : (
                      <div>{content}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-2">Don&apos;t Be A Stranger</h2>
        <p className="mb-2">If you want to hear more, don&apos;t be afraid to reach out:</p>
        <EmailContact/>
      </div>
    </div>
  );
}
