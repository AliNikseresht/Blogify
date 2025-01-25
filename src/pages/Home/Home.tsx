import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { homeData } from "../../data/home";

interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  tags: string[];
  createdAt: { seconds: number };
}

const Home = () => {
  //state
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  //service
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Blogs"));
        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];
        setBlogs(blogsData);
        console.log(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loading loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-[0em] md:p-[3em] gap-[2em] min-h-screen">
      <div className="flex flex-col items-center md:w-10">
        <div className="w-4 h-0.5 bc-green"></div>
        <h1>{homeData.title}</h1>
      </div>
      {blogs.length === 0 ? (
        <div className="flex justify-center flex-col items-center mt-[16em]">
          <p className="text-center text-lg font-medium">
            {homeData.NoBlogText}
          </p>
          <div className="flex items-center text-lg gap-0.5 c-green">
            <IoMdInformationCircleOutline />
            <span className="text-sm mb-[0.11em] c-white">
              {homeData.VPNText}
            </span>
          </div>
        </div>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="flex items-start md:h-[13rem] mb-4">
            <div className="hidden md:flex flex-col items-start justify-between relative h-44">
              <p className="text-left text-3xl uppercase font-semibold w-20">
                {new Date(blog.createdAt.seconds * 1000).toLocaleDateString(
                  "en-GB",
                  {
                    day: "numeric",
                    month: "short",
                  }
                )}
              </p>
              <p className="-rotate-90 absolute -left-[2.05em] bottom-5 text-xs w-36 text-right c-gray">
                {blog.author}
              </p>
            </div>
            <div className="flex flex-col justify-between h-full w-full">
              <h2 className="c-green md:text-3xl font-semibold">
                {blog.title}
              </h2>
              <p className="text-xs md:text-sm my-3">{blog.content}</p>
              <div className="flex md:hidden items-center justify-between mb-3">
                <p className="text-left text-sm uppercase font-semibold ">
                  {new Date(blog.createdAt.seconds * 1000).toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }
                  )}
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
        ))
      )}
    </div>
  );
};

export default Home;
