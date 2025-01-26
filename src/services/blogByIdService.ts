import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { TBlog } from "../types/home";

export const blogByIdService = async (id: string): Promise<TBlog> => {
  try {
    const docRef = doc(db, "Blogs", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as TBlog;
    } else {
      throw new Error("Blog not found");
    }
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    throw error;
  }
};
