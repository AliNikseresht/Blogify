import { TBlog } from "../../../types/home";
import formatDate from "../../../utils/formatDate";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div key={blog.id} className="flex items-start md:h-[13rem] mb-4">
      <div className="hidden md:flex flex-col items-start justify-between relative h-44">
        <p className="text-left text-3xl uppercase font-semibold w-20">
          {formatDate(blog.createdAt.seconds)}
        </p>
        <p className="-rotate-90 absolute -left-[2.05em] bottom-5 text-xs w-36 text-right c-gray">
          {blog.author}
        </p>
      </div>
      <div className="flex flex-col justify-between h-full w-full">
        <h2 className="c-green md:text-3xl font-semibold">{blog.title}</h2>
        <p className="text-xs md:text-sm my-3">{blog.content}</p>
        <div className="flex md:hidden items-center justify-between mb-3">
          <p className="text-left text-sm uppercase font-semibold ">
            {formatDate(blog.createdAt.seconds)}
          </p>
          <p className="text-center text-sm c-gray">{blog.author}</p>
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
