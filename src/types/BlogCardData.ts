import { StaticImageData } from "next/image";

export interface BlogCardProps {
    title: string;
    subtitle?: string;
    imageSrc: StaticImageData | string;
    secondarySrc?: StaticImageData | string;
    alt: string;
    date: string;
    route: string;
    className?: string;
    aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
  }