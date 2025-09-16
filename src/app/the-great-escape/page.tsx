'use client';
import React, { useState } from 'react';
import BlogCard from '@/components/BlogCard';
import BlogList from '@/components/BlogList';
import { data } from './content';
import Link from 'next/link';
import DropDown from '@/components/DropDown';

export default function TheGreatEscapePage() {
  const recent_data = [...data].sort((a, b) => new Date(b.content_date).getTime() - new Date(a.content_date).getTime());
  const popular_data = [...data].sort((a, b) => b.reaction_count - a.reaction_count);
  const [sortBy, setSortBy] = useState<'recent' | 'popular'>('recent');
  type PostLayout = 'grid' | 'list';
  const [postLayout, setPostLayout] = useState<PostLayout>('grid');
  const [mappedData, setMappedData] = useState(recent_data);


  const dropDownOptions = [
    { id: 1, name: "Grid" },
    { id: 2, name: "List" },
  ];


  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <div className="mb-10 justify-center"> 
        <Link href="https://jtbelshe.substack.com/">
          <div className="text-6xl font-bold mb-6 text-center">The Great Escape</div>
        </Link>
        <div className="flex justify-between items-center mb-10">
          <div className="relative flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            <button
              onClick={() =>  {
                setSortBy('recent') 
                setMappedData(recent_data)
              }}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                sortBy === 'recent' ? 'bg-white dark:bg-gray-700 shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:font-medium'
              }`}
            >
              Recent
            </button>
            <button
              onClick={() => {
                setSortBy('popular') 
                setMappedData(popular_data)
              }}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                sortBy === 'popular' ? 'bg-white dark:bg-gray-700 shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:font-medium'
              }`}
            >
              Popular
            </button>
            {// TODO Add a drop down optoin to select grid vs list vs sliders
            // for sliders, I imagine it having a horizontal slide for Asia vs Europe ?
            }
          </div>

          <DropDown 
            options={dropDownOptions} 
            defaultValue={dropDownOptions[0]}
            onChange={(selectedOption) => setPostLayout(selectedOption.name.toLowerCase() as PostLayout)}
            />
        </div>
        <div className={postLayout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
          {mappedData.map((post) => (
            postLayout === 'grid' ? (
              <BlogCard
                key={post.id}
                title={post.title}
                subtitle={post.subtitle}
                date={post.content_date}
                imageSrc={post.image_local}
                alt={post.title}
                route={post.link}
                aspectRatio="4/3"
                className="h-full"
              />
            ) : (
              <BlogList
                key={post.id}
                title={post.title}
                subtitle={post.subtitle}
                date={post.content_date}
                imageSrc={post.image_local}
                alt={post.title}
                route={post.link}
                aspectRatio="4/3"
                className="h-full"
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
}
