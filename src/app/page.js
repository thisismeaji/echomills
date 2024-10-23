import Hero from "@/components/hero/Hero";
import posts from "./data/posts";
import PostHighlight from "@/components/posthighlight/PostHighlight";

export const metadata = {
  title: 'Echomills - Pengembangan Konten Digital yang Menarik dan Efektif',
  description: 'Selamat datang di Echomills, platform terdepan untuk pengembangan konten digital. Pelajari strategi, alat, dan teknik terbaik untuk menciptakan konten menarik yang meningkatkan keterlibatan audiens dan visibilitas online Anda.',
};

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section className="post">
        {posts.map((post, index) => (
          <PostHighlight
            key={index}
            image={post.image}
            title={post.title}
            description={post.description}
            buttonLabel={post.buttonLabel}
            link={post.link}
          />
        ))}
      </section>
    </main>
  );
}
