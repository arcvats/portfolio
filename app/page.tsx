import { parse } from "rss-to-json";
import HeroSection from "./components/organisms/HeroSection";
import Work from "./components/organisms/Work";
import Projects from "./components/organisms/Projects";
import RecentPosts from "./components/organisms/RecentPosts";
import Bio from "./components/organisms/Bio";
import { FEED_URL } from "./lib/consts";

async function _getPosts() {
  try {
    const posts = await parse(FEED_URL);
    return posts;
  } catch (e) {
    return null;
  }
}

// rome-ignore lint/suspicious/noExplicitAny: coming from medium feed
function _processPosts(posts: any) {
  if (!posts) return null;
  const slicedPosts = posts?.items.slice(0, 10);
  // rome-ignore lint/suspicious/noExplicitAny: coming from medium feed
  return slicedPosts?.map((post: any) => {
    const pubDate = new Date(post.published);
    return {
      title: post.title,
      description: post.description,
      link: post.link,
      published: `${pubDate.getDate()} ${pubDate.toLocaleDateString("default", {
        month: "long",
      })} ${pubDate.getFullYear()}`,
      categories: post.category,
    };
  });
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-wrap sm:flex-nowrap w-full mt-2">
        <div className="flex grow-1 w-full">
          <RecentPosts limit={5} />
        </div>
        <div className="flex flex-col sm:1/2 lg:w-2/5">
          <Bio />
          <Work />
          <Projects />
        </div>
      </div>
    </>
  );
}
