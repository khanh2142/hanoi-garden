import parse from "html-react-parser";
import { useState } from "react";
import api from "../../data/posts";

const Post = () => {
  const [post, setPost] = useState({} as any);

  return (
    <div className="mt-20 grid grid-rows-1 gap-10">
      <h3 className="text-center text-2xl font-bold text-rose-500">Bài viết</h3>

      {api.map((item: any) => {
        return (
          <div
            className="flex gap-10 w-2/3 h-32 p-1 hover:bg-rose-100 ease-linear duration-200"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-48 h-full object-center"
            />
            <div className="flex flex-col gap-2">
              <a
                href={`/post/${item.id}`}
                className="text-2xl font-bold text-rose-500"
              >
                {item.title}
              </a>
              <p className="italic post-desc">{parse(item.desc)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
