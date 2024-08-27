import { collection, onSnapshot, addDoc, getDoc, updateDoc, deleteDoc, doc , query,where } from "firebase/firestore";
import { db } from "../config/firebase";

// Get all the Products
async function getAllComment(productId: string) {
    const colRef = collection(db, 'Comments');

    const q = query(colRef, where("productid", "==", productId));
    const list: any[] = [];
    const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
        });
    });

    return list;
}

// Add a new product
async function addComment(product: any) {
    const colRef = collection(db, 'Comments');

    try {
        const docRef = await addDoc(colRef, product);
        console.log(docRef.id);
        return { id: docRef.id, ...product };
    } catch (error) {
        console.error("Error adding comment:", error);
        return null;
    }
}

// Update an existing product by ID
async function updateComment(data: any, id: string) {
    const docRef = doc(db, 'Comments', id);

    try {
        await updateDoc(docRef, data);
        return 'Success updating comment';
    } catch (error) {
        console.error("Error updating comment:", error);
        return 'Failed to update comment';
    }
}

// Delete a product by ID
async function deleteComment(id: string) {
    const docRef = doc(db, '', id);

    try {
        await deleteDoc(docRef);
        return 'Success deleting the comments';
    } catch (error) {
        console.error("Error deleting comment:", error);
        return 'Failed to delete comment';
    }
}


export { getAllComment, addComment, updateComment, deleteComment };
