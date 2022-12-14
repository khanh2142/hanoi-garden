import { NextSeo } from "next-seo";
import Post from "../components/post/Post";

import Head from "next/head";
import wallpaper from "public/images/wallpaper.png";

const PostContainer = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <meta
          name="keywords"
          content="Hà Nội Garden, Hà Nội Garden Bài viết, Bài viết, Hà Nội Garden Tin tức, Tin tức"
        />
      </Head>
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
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "Nguyễn Bá Khánh",
          },
        ]}
      />
      <Post />
    </div>
  );
};

export default PostContainer;
