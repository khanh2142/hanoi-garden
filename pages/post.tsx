import { NextSeo } from "next-seo";
import Post from "../components/post/Post";

import wallpaper from "public/images/wallpaper.png";

const PostContainer = () => {
  return (
    <div className="container mx-auto">
      <NextSeo
        title="Bài viết"
        description="Bài viết"
        canonical="https://hanoi-garden.vercel.app/post"
        openGraph={{
          url: "https://hanoi-garden.vercel.app/post",
          title: "Bài viết",
          description: "Bài viết",
          images: [
            {
              url: wallpaper.src,
              width: 800,
              height: 600,
              alt: "Bài viết",
              type: "image/png",
            },
          ],
          siteName: "Hà Nội Garden",
        }}
      />
      <Post />
    </div>
  );
};

export default PostContainer;
