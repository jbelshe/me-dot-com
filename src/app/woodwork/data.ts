'use client';

interface Project {
  id: number;
  title: string;
  subtitle?: string;
  imageSrc: string;
  secondarySrc?: string;
  route: string;
  alt: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Bookshelf',
    subtitle: 'Needed a place to put my phone while I slept',
    imageSrc: '/images/woodwork/bookshelf/bookshelf_header.jpeg',
    secondarySrc: '/images/woodwork/bookshelf/bookshelf_wip.jpeg',
    route: '/woodwork/bookshelf',
    alt: '',
  },  
  {
    id: 2,
    title: 'Really Heavy Picnic Table',
    subtitle: 'When you have a backyard, you need a picnic table',
    imageSrc: '/images/woodwork/picnic_table/picnic_table_header.jpeg',
    secondarySrc: '/images/woodwork/picnic_table/picnic_table_wip.jpeg',
    route: '/woodwork/picnic-table',
    alt: '',
  },
  {
    id: 3,
    title: 'Shoe Rack',
    subtitle: 'Crafted out of IKEA shelves I found on the curb',
    imageSrc: '/images/woodwork/shoe_rack/shoe_rack_header.jpeg',
    secondarySrc: '/images/woodwork/shoe_rack/shoe_rack_wip.jpeg',
    route: '/woodwork/shoe-rack',
    alt: '',
  },
  {
    id: 4,
    title: 'Side Table',
    subtitle: 'Needed somewhere to put my coffee',
    imageSrc: '/images/woodwork/couch_table/couch_table_header.jpeg',
    secondarySrc: '/images/woodwork/couch_table/couch_table_wip.jpeg',
    route: 'woodwork/couch-table',
    alt: '',
  },
  {
    id: 5,
    title: 'Spice Rack',
    subtitle: 'CHOAM controls the spice',
    imageSrc: '/images/woodwork/spice_rack/spice_rack_header.jpeg',
    secondarySrc: '/images/woodwork/spice_rack/spice_rack_wip.jpeg',
    route: '/woodwork/spice-rack',
    alt: '',
  },
  {
    id: 6,
    title: 'Piano Bench',
    subtitle: 'I just wanted a challenge',
    imageSrc: '/images/woodwork/piano_bench/piano_bench_header.jpeg',
    secondarySrc: '/images/woodwork/piano_bench/piano_bench_wip.jpeg',
    route: '/woodwork/piano-bench',
    alt: '',
  },
];
