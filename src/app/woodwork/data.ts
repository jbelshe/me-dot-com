'use client';

interface Project {
  id: number;
  title: string;
  imageSrc: string;
  secondarySrc?: string;
  alt: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Bookshelf',
    imageSrc: '/images/woodwork/bookshelf/IMG_2483.jpeg',//'/images/woodwork/bookshelf_title.jpg',
    secondarySrc: '/images/woodwork/bookshelf/SCN_0005.jpg',
    alt: '',
  },  
  {
    id: 2,
    title: 'Picnic Table',
    imageSrc: '/images/woodwork/picnic_table/IMG_3648.jpeg',//'/images/woodwork/bookshelf_title.jpg',
    secondarySrc: '/images/woodwork/picnic_table/SCN_0015.jpg',
    alt: '',
  },
  {
    id: 3,
    title: 'Shoe Rack',
    imageSrc: '/images/woodwork/shoe_rack/IMG_2557.jpeg',//'/images/woodwork/bookshelf_title.jpg',
    secondarySrc: '/images/woodwork/shoe_rack/SCN_0010.jpg',
    alt: '',
  },

];
