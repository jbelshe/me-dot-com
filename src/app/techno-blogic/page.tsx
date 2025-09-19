'use client';
import React, { useState, useEffect } from 'react';
import BlogCard from '@/components/BlogCard';
import BlogList from '@/components/BlogList';
import { BlogHeaderData } from '@/types/BlogHeaderData';
import { data } from './content';
import Link from 'next/link';
import DropDown from '@/components/DropDown';

export default function TechnoBlogicPage() {
  const [data, setData] = useState<BlogHeaderData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'recent' | 'popular'>('recent');
  type PostLayout = 'grid' | 'list';
  const [postLayout, setPostLayout] = useState<PostLayout>('grid');
  const [mappedData, setMappedData] = useState<BlogHeaderData[]>([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/techno-blogic');
        const result = await response.json();
        setData(result);
        
        // Sort data by most recent
        const recent = [...result].sort((a, b) => 
          new Date(b.content_date).getTime() - new Date(a.content_date).getTime()
        );
        setMappedData(recent);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length === 0) return;
    
    if (sortBy === 'recent') {
      const recent = [...data].sort((a, b) => 
        new Date(b.content_date).getTime() - new Date(a.content_date).getTime()
      );
      setMappedData(recent);
    } else {
      const popular = [...data].sort((a, b) => b.reaction_count - a.reaction_count);
      setMappedData(popular);
    }
  }, [sortBy, data]);

  const dropDownOptions = [
    { id: 1, name: "Grid" },
    { id: 2, name: "List" },
  ];


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <div className="mb-10 justify-center"> 
        <Link href="https://technoblogic.substack.com/">
          <div className="text-6xl font-bold mb-6 text-center">Techno-Blogic</div>
        </Link>
        <div className="flex justify-between items-center mb-10">
          <div className="relative flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setSortBy('recent')}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                sortBy === 'recent' ? 'bg-white dark:bg-gray-700 shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:font-medium'
              }`}
            >
              Recent
            </button>
            <button
              onClick={() => setSortBy('popular')}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                sortBy === 'popular' ? 'bg-white dark:bg-gray-700 shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:font-medium'
              }`}
            >
              Popular
            </button>
          </div>

          <DropDown 
            options={dropDownOptions} 
            defaultValue={dropDownOptions[0]}
            onChange={(selectedOption) => setPostLayout(selectedOption.name.toLowerCase() as PostLayout)}
            />
        </div>
        <div className={postLayout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
          {mappedData?.length > 0 ? mappedData.map((post) => (
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
          )) : (
            <div className="col-span-3 text-center py-10">
              <p className="text-gray-500">No posts found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

