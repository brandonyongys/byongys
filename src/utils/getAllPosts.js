// import matter from 'gray-matter';

// // Dynamically import all .md files in /posts
// export function getAllPosts() {
//   const files = import.meta.glob('../posts/*.md', { eager: true });

//   console.log('Loaded markdown files:', files);
//   return Object.entries(files).map(([path, file]) => {
//     const slug = path.split('/').pop().replace('.md', '');
//     const { data, content } = matter(file?.default || '');

//     return {
//       slug, // md file name 
//       title: data.title, // md title
//       date: data.date, // md date
//       summary: data.summary, // md summary
//       content, // md content
      
//     };
//   }).sort((a, b) => new Date(b.date) - new Date(a.date));
// }


// const posts = [
//   { id: 1, title: 'Deploying a React App with Vercel in PostList.jsx', date: '2025-06-01', summary: 'test summary' },
//   { id: 2, title: 'Using AWS Lambda for Automation', date: '2025-05-22' },
//   { id: 3, title: 'LLMs in Healthcare: What Works', date: '2025-05-15' },
// ];



// // src/utils/getAllPosts.js
// import matter from 'gray-matter';

// // const posts = import.meta.glob('../posts/*.md', { eager: true, as: 'raw' });
// const posts = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' });
// console.log(posts);

// export function getAllPosts() {
//   const allPosts = Object.entries(posts).map(([path, rawContent]) => {
//     const { data } = matter(rawContent);
//     const slug = path.split('/').pop().replace('.md', '');

//     return {
//       slug, // md file name 
//       title: data.title, // md title
//       date: data.date, // md date
//       summary: data.summary, // md summary
//       content, // md content
      
//     };
//   });

//   return allPosts
//     .filter(post => post.date) // optional: filter posts missing date
//     .sort((a, b) => new Date(b.date) - new Date(a.date)); // reverse chronological
// }






// import matter from 'gray-matter';

// const posts = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' });
// const posts = import.meta.glob('../posts/*.md', { eager: true, as: 'raw' });

// export function getAllPosts() {
//   return Object.entries(posts).map(([path, rawContent]) => {
//     const { data, content } = matter(rawContent);
//     const slug = path.split('/').pop().replace('.md', '');

//     return {
//       slug,
//       title: data.title,
//       date: data.date,
//       summary: data.summary,
//       content,
//       tags: data.tags || [],
//     };
//   });
// }

// import matter from 'gray-matter';

// // const posts = import.meta.glob('../posts/*.md', { eager: true, as: 'raw' });
// const posts = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' });
// // TODO Issue is with this import meta glob


// export function getAllPosts() {
//   try {
//     return Object.entries(posts).map(([path, rawContent]) => {
//       const { data, content } = matter(rawContent);
//       const slug = path.split('/').pop().replace('.md', '');

//       return {
//         slug,
//         title: data.title,
//         date: data.date,
//         summary: data.summary,
//         content,
//         tags: data.tags || [],
//       };
//     });
//   } catch (error) {
//     console.error('Error in getAllPosts:', error);
//     return [
//     { slug: 'aws-deployment', title: 'Deploying a React App with Vercel', date: '2025-06-01', summary: 'test summary', tags: ['react', 'deployment'] },
//     { slug: 'aws-lambda', title: 'Using AWS Lambda for Automation', date: '2025-05-22', tags: ['aws', 'automation'] },
//   ];
//   }
// }











// import matter from 'gray-matter';

// export function getAllPosts() {
//   try {
//     const postFiles = {
//       '../posts/first-post.md': `---
// title: "My First Post"
// date: "2025-06-09"
// description: "Introduction to my blog."
// ---

// # Hello World

// Welcome to my first blog post!`,
      
//       '../posts/second-post.md': `---
// title: "Second Post"
// date: "2025-06-08"
// description: "More thoughts and updates."
// ---

// # Updates

// Here's what's new this week.`,
      
//       '../posts/third-post.md': `---
// title: "Third Post"
// date: "2025-06-01"
// description: "Reflections and ideas."
// ---

// # Reflections

// Some interesting things I've been thinking about.`
//     };

//     const postsData = Object.entries(postFiles).map(([path, rawContent]) => {
//       const { data, content } = matter(rawContent);
//       const slug = path.split('/').pop().replace('.md', '');

//       return {
//         slug,
//         title: data.title || 'Untitled Post',
//         date: data.date || 'Unknown Date',
//         description: data.description || '',
//         content: content || '',
//         tags: data.tags || [],   // this will just be an empty array unless you add tags in frontmatter
//       };
//     });

//     postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

//     return postsData;

//   } catch (error) {
//     console.error('Error in getAllPosts:', error);
//     return [
//       { slug: 'aws-deployment', title: 'Default post: Deploying a React App with Vercel', date: '2025-06-01', description: 'test summary', tags: ['react', 'deployment'] },
//       { slug: 'aws-lambda', title: 'Default post: AWS Lambda Automation', date: '2025-05-22', description: 'Another summary', tags: ['aws', 'automation'] },
//     ];
//   }
// }




// import fm from 'front-matter';
// import { marked } from 'marked';

// export function getAllPosts() {
//   try {
//     const postFiles = {
//       '../posts/first-post.md': `---
// title: "My First Post"
// date: "2025-06-09"
// description: "Introduction to my blog."
// ---

// # Hello World

// Welcome to my first blog post!`,
      
//       '../posts/second-post.md': `---
// title: "Second Post"
// date: "2025-06-08"
// description: "More thoughts and updates."
// ---

// # Updates

// Here's what's new this week.`,
      
//       '../posts/third-post.md': `---
// title: "Third Post"
// date: "2025-06-01"
// description: "Reflections and ideas."
// ---

// # Reflections

// Some interesting things I've been thinking about.`
//     };

//     const postsData = Object.entries(postFiles).map(([path, rawContent]) => {
//       const parsed = fm(rawContent);
//       const slug = path.split('/').pop().replace('.md', '');

//       return {
//         slug,
//         title: parsed.attributes.title || 'Untitled Post',
//         date: parsed.attributes.date || 'Unknown Date',
//         description: parsed.attributes.description || '',
//         content: marked(parsed.body), // Converts markdown to HTML
//         tags: parsed.attributes.tags || [],
//       };
//     });

//     postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

//     return postsData;
//   } catch (error) {
//     console.error('Error in getAllPosts:', error);
//     return [];
//   }
// }











// import fm from 'front-matter';
// import { marked } from 'marked';

// export function getAllPosts() {
//   try {
//     const postFiles = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' });
//     // const posts = import.meta.glob('../posts/*.md', { eager: true, as: 'raw' });

//     const postsData = Object.entries(postFiles).map(([path, rawContent]) => {
//       const parsed = fm(rawContent);
//       const slug = path.split('/').pop().replace('.md', '');

//       return {
//         slug,
//         title: parsed.attributes.title || 'Untitled Post',
//         date: parsed.attributes.date || 'Unknown Date',
//         description: parsed.attributes.description || '',
//         content: marked(parsed.body), // Converts markdown to HTML
//         tags: parsed.attributes.tags || [],
//       };
//     });

//     postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

//     return postsData;
//   } catch (error) {
//     console.error('Error in getAllPosts:', error);
//     return [];
//   }
// }




import fm from 'front-matter';
import { marked } from 'marked';

// Function to dynamically import and process all markdown posts
export function getAllPosts() {
  try {
    const postFiles = import.meta.glob('../posts/*.md', { eager: true, as: 'raw' });

    console.log('Loaded postFiles:', postFiles);
    const postsData = Object.entries(postFiles).map(([path, rawContent]) => {
      console.log('Parsing:', path);
      const parsed = fm(rawContent);
      const slug = path.split('/').pop().replace('.md', '');

      return {
        slug,
        title: parsed.attributes.title || 'Untitled Post',
        date: parsed.attributes.date || 'Unknown Date',
        description: parsed.attributes.description || '',
        content: marked(parsed.body),
        tags: parsed.attributes.tags || [],
      };
    });

    postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

    console.log('Final postsData:', postsData);   

    return postsData;
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    return [
      { slug: 'aws-deployment', title: 'Default post: Deploying a React App with Vercel', date: '2025-06-01', description: 'test summary', tags: ['react', 'deployment'] },
      { slug: 'aws-lambda', title: 'Default post: AWS Lambda Automation', date: '2025-05-22', description: 'Another summary', tags: ['aws', 'automation'] },
    ];
  }
}
