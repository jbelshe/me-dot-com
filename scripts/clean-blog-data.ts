import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const cleanData = () => {
  try {
    // Path to the content file
    const contentPath = join(process.cwd(), 'src/app/the-great-escape/content.ts');
    
    // Read the file
    const content = readFileSync(contentPath, 'utf8');
    
    // Parse the data array
    const dataMatch = content.match(/export const data: BlogHeaderData\[\] = (\[.*?\]);/s);
    if (!dataMatch) {
      console.error('Could not find data array in content.ts');
      return;
    }
    
    // Parse the JSON data
    const data = eval(`(${dataMatch[1]})`);
    
    // Clean the data
    const cleanedData = data.map((item: any) => {
      const { truncated_body_text, cover_image, ...rest } = item;
      return rest;
    });
    
    // Convert back to string with proper formatting
    const cleanedContent = `import { BlogHeaderData } from './type';

export const data: BlogHeaderData[] = ${JSON.stringify(cleanedData, null, 2)};`;
    
    // Write the cleaned data back to the file
    writeFileSync(contentPath, cleanedContent, 'utf8');
    
    console.log('Successfully cleaned blog data!');
  } catch (error) {
    console.error('Error cleaning blog data:', error);
  }
};

cleanData();
