import { Link } from "react-router-dom";
import { TBlog } from "../../../types/home";
import formatDate from "../../../utils/formatDate";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  const MAX_CONTENT_LENGTH = 300;
  const MAX_AUTHOR_LENGTH = 14;

  return (
    <div key={blog.id} className="flex items-start lg:h-[13rem] mb-4">
      <div className="hidden md:flex flex-col items-start justify-between relative h-44">
        <p className="text-left text-3xl uppercase font-semibold w-20">
          {formatDate(blog.createdAt.seconds)}
        </p>
        <p className="-rotate-90 absolute -left-[2.05em] bottom-5 text-xs w-36 text-right c-green">
          {blog.author.length > MAX_AUTHOR_LENGTH
            ? `${blog.author.slice(0, MAX_AUTHOR_LENGTH)}...`
            : blog.author}
        </p>
      </div>
      <div className="flex flex-col justify-between h-full w-full">
        <h2 className="c-green md:text-4xl font-semibold">{blog.title}</h2>
        <p className="text-xs md:text-sm my-3">
          {blog.content.length > MAX_CONTENT_LENGTH
            ? `${blog.content.slice(0, MAX_CONTENT_LENGTH)}...`
            : blog.content}
          <Link
            to={`/blog/${blog.id}`}
            className="self-start text-sm c-green hover:underline ml-1"
          >
            Read More →
          </Link>
        </p>
        <div className="flex md:hidden items-center justify-between mb-3">
          <p className="text-left text-sm uppercase font-semibold ">
            {formatDate(blog.createdAt.seconds)}
          </p>
          <p className="text-center text-sm c-white">{blog.author}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tagItem, index) => (
            <span
              key={index}
              className="border border-green px-2 py-1 text-xs rounded-full c-green"
            >
              #{tagItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
