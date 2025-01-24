import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const fetchBlogById = async (id: string) => {
  if (!id) {
    throw new Error("Invalid ID");
  }

  try {
    const docRef = doc(collection(db, "Blogs"), id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("Blog not found");
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};
