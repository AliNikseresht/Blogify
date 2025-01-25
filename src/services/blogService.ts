import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { TBlog } from "../types/home";

export const fetchBlogs = async (): Promise<TBlog[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "Blogs"));
    const blogsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as TBlog[];
    return blogsData;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};
