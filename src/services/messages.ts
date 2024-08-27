import { collection, onSnapshot, addDoc, getDoc, updateDoc, deleteDoc, doc,where,query } from "firebase/firestore";
import { db } from "../config/firebase";

// Get all the Products
async function getAllMessage(receiverId: string, senderId: string) {
    const colRef = collection(db, 'Messages');

    const q = query(colRef, 
        where("receiverId", "in", [receiverId, senderId]),
        where("senderId", "in", [receiverId, senderId])
    );

    const list: any[] = [];


    const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.forEach((doc) => {
            const data = doc.data();
           
            if (
                (data.receiverId === receiverId && data.senderId === senderId) ||
                (data.receiverId === senderId && data.senderId === receiverId)
            ) {
                list.push({ id: doc.id, ...data });
            }
        });
    });

    return list;
}
// Add a new product
async function addMessage(product: any) {
    const colRef = collection(db, 'Messages');

    try {
        const docRef = await addDoc(colRef, product);
        console.log(docRef.id);
        return { id: docRef.id, ...product };
    } catch (error) {
        console.error("Error adding messages:", error);
        return null;
    }
}

// Update an existing product by ID
async function updateMessage(data: any, id: string) {
    const docRef = doc(db, 'Messages', id);

    try {
        await updateDoc(docRef, data);
        return 'Success updating messages';
    } catch (error) {
        console.error("Error updating messages:", error);
        return 'Failed to update product';
    }
}

// Delete a product by ID
async function deleteMessage(id: string) {
    const docRef = doc(db, 'Messages', id);

    try {
        await deleteDoc(docRef);
        return 'Success deleting the Messages';
    } catch (error) {
        console.error("Error deleting Messages:", error);
        return 'Failed to delete Messages';
    }
}



export { getAllMessage, addMessage, updateMessage, deleteMessage };
