import Head from "next/head";
import Post from "../components/post/Post";

const PostContainer = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Bài viết</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Post />
    </div>
  );
};

export default PostContainer;
