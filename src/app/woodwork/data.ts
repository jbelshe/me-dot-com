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
    title: 'Bookshelf',
    imageSrc: '/images/woodwork/bookshelf/IMG_2483.jpeg',//'/images/woodwork/bookshelf_title.jpg',
    secondarySrc: '/images/woodwork/bookshelf/SCN_0005.jpg',
    alt: '',
  },
  {
    id: 3,
    title: 'Bookshelf',
    imageSrc: '/images/woodwork/bookshelf/IMG_2483.jpeg',//'/images/woodwork/bookshelf_title.jpg',
    secondarySrc: '/images/woodwork/bookshelf/SCN_0005.jpg',
    alt: '',
  },
  {
    id: 4,
    title: 'Bookshelf',
    imageSrc: '/images/woodwork/bookshelf/IMG_2483.jpeg',//'/images/woodwork/bookshelf_title.jpg',
    secondarySrc: '/images/woodwork/bookshelf/SCN_0005.jpg',
    alt: '',
  },
  // {
  //   id: 2,
  //   title: 'Picnic Table',
  //   imageSrc: '/images/woodwork/picnic_table_title.jpg',
  //   secondarySrc: '/images/woodwork/picnic_table_schematic.jpg',
  //   alt: '',
  // },
  // {
  //   id: 3,
  //   title: 'Recycled Wood Shoe Rack',
  //   imageSrc: '/images/woodwork/shoe_rack_title.jpg',
  //   secondarySrc: '/images/woodwork/shoe_rack_schematic.jpg',
  //   alt: '',
  // },
];
