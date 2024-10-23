import PostHighlight from "@/components/posthighlight/PostHighlight";
import posts from "../data/posts";

export default function Opini() {
    return(
        <main>
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