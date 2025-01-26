import {
  collection,
  getDocs,
  query,
  orderBy,
  startAfter,
  limit,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { TBlog } from "../types/home";

export const fetchBlogs = async (
  lastVisible?: any,
  pageSize: number = 5
): Promise<{ blogs: TBlog[]; lastDoc: any }> => {
  try {
    let q = query(
      collection(db, "Blogs"),
      orderBy("createdAt"),
      limit(pageSize)
    );

    if (lastVisible) {
      q = query(q, startAfter(lastVisible));
    }

    const querySnapshot = await getDocs(q);
    const blogsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as TBlog[];

    const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

    return { blogs: blogsData, lastDoc };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};
