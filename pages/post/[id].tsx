import parse from "html-react-parser";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../data/posts";

interface Post {
  id: number;
  title: string;
  image: any;
  desc: string;
}

const DetailPost = () => {
  const router: any = useRouter();

  const { id } = router.query;

  const [data, setData] = useState<Post>({
    id: 0,
    title: "",
    image: "",
    desc: "",
  });

  const getData = async () => {
    const findData: any = await api.find((item: any) => {
      return item.id == id;
    });

    if (findData) {
      setData(findData);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <NextSeo
        description={data.title}
        canonical={`https://hanoi-garden.vercel.app/post/${data.id}`}
        openGraph={{
          url: `https://hanoi-garden.vercel.app/post/${data.id}`,
          title: data.title,
          description: data.desc,
          images: [
            {
              url: data.image,
              width: 800,
              height: 600,
              alt: data.title,
              type: "image/*",
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
      <div className="mt-20 flex flex-col gap-4 items-center">
        <h3 className="text-center text-2xl text-rose-500  font-bold">
          {data.title}
        </h3>
        <img src={data.image} alt={data.title} className="w-2/3 h-100" />
        <p className="leading-8">{parse(data.desc)}</p>
      </div>
    </>
  );
};

export default DetailPost;
