// src/article/index.js
const importAllArticles = async () => {
    const context = require.context('.', true, /\.js$/); // Memuat semua file .js di folder ini
    const articles = {};
  
    context.keys().forEach((key) => {
      const slug = key.replace('./', '').replace('.js', ''); // Ambil nama file tanpa ekstensi
      articles[slug] = context(key).default; // Menyimpan komponen artikel
    });
  
    return articles;
  };
  
  export const getArticles = importAllArticles;
  