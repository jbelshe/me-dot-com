import { ReactNode } from 'react';

export type Version = 'shortest' | 'shorter' | 'longer' | 'longest';
export type SectionType = 'background' | 'career' | 'personal';

export type Section = {
  [K in Version]: string | ReactNode;
};
