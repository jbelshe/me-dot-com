import { Section } from './types';

export const versions: Record<string, Section> = {
  background: {
    shortest: 'Bay Area => Los Angeles',
    shorter: 'Grew up in the Bay Area, moved to Los Angeles for college and stayed for work.',
    longer: 'Born and raised in the Bay Area, California. Moved to Los Angeles for college at USC and decided to stay after graduation.',
    longest: ''
  },
  career: {
    shortest: 'Software Engineer',
    shorter: 'Software engineer with experience in full-stack development and cloud technologies.',
    longer: 'Experienced software engineer specializing in building scalable web applications. Proficient in modern JavaScript frameworks and cloud infrastructure.',
    longest: ''
  },
  personal: {
    shortest: 'I like to build things.',
    shorter: 'In my free time, I enjoy hiking, photography, and working on personal coding projects.',
    longer: 'When I\'m not coding, you can find me exploring hiking trails, capturing moments through photography, or tinkering with new technologies in personal projects.',
    longest: ''
  }
};
