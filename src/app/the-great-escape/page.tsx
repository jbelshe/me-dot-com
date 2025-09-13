'use client';
import React, { useState, useMemo } from 'react';
import BlogCard from '@/components/BlogCard';
import { data } from './content';

export default function TheGreatEscapePage() {
  const recent_data = [...data].sort((a, b) => new Date(b.content_date).getTime() - new Date(a.content_date).getTime());
  const popular_data = [...data].sort((a, b) => b.reaction_count - a.reaction_count);
  const [sortBy, setSortBy] = useState<'recent' | 'popular'>('recent');
  const [mappedData, setMappedData] = useState(recent_data);


  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <div className="mb-10"> 
        <h2 className="text-6xl font-bold mb-6 text-center">The Great Escape</h2>
        <div className="flex justify-center mb-10">
          <div className="relative flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            <button
              onClick={() =>  {
                setSortBy('recent') 
                setMappedData(recent_data)
              }}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                sortBy === 'recent' ? 'bg-white dark:bg-gray-700 shadow-md' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Recent
            </button>
            <button
              onClick={() => {
                setSortBy('popular') 
                setMappedData(popular_data)
              }}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                sortBy === 'popular' ? 'bg-white dark:bg-gray-700 shadow-md' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Popular
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mappedData.map((post, index) => (
            <BlogCard
              key={post.id}
              title={post.title}
              subtitle={post.subtitle}
              imageSrc={post.image_local}
              alt={post.title}
              route={post.link}
              aspectRatio="4/3"
              className="h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
