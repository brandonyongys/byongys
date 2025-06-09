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

import matter from 'gray-matter';

// const posts = import.meta.glob('../posts/*.md', { eager: true, as: 'raw' });
const posts = import.meta.glob('./posts/*.md', { eager: true, query: '?raw', import: 'default' });


export function getAllPosts() {
  try {
    return Object.entries(posts).map(([path, rawContent]) => {
      const { data, content } = matter(rawContent);
      const slug = path.split('/').pop().replace('.md', '');

      return {
        slug,
        title: data.title,
        date: data.date,
        summary: data.summary,
        content,
        tags: data.tags || [],
      };
    });
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    return [];
  }
}
