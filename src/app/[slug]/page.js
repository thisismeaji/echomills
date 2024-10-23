// src/app/[slug]/page.js
import { getArticles } from '../../article'; // Import fungsi untuk mendapatkan artikel

const Page = async ({ params }) => {
  const articles = await getArticles(); // Ambil semua artikel
  const { slug } = await params; // Await params sebelum mengakses slug
  const ArticleComponent = articles[slug]; // Mencari komponen berdasarkan slug

  if (!ArticleComponent) {
    return <p>Article not found</p>; // Menangani artikel yang tidak ditemukan
  }

  return (
    <div>
      <ArticleComponent /> {/* Render artikel yang sesuai */}
    </div>
  );
};

export default Page;
