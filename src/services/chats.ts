import { collection, onSnapshot, addDoc, getDoc, updateDoc, deleteDoc, doc,where,query } from "firebase/firestore";
import { db } from "../config/firebase";

async function getAllChatsOfUser(receiverId: string, senderId: string) {
    const colRef = collection(db, 'Chats');

    const q = query(colRef, 
        where("receiverId", "in", [receiverId, senderId]),
    );
    const list: any[] = [];

    const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.forEach((doc) => {
            const data = doc.data();
             list.push({ id: doc.id, ...data });
        });
    });

    return list;
}

async function addChat(product: any) {
    const colRef = collection(db, 'Chats');

    try {
        const docRef = await addDoc(colRef, product);
        console.log(docRef.id);
        return { id: docRef.id, ...product };
    } catch (error) {
        console.error("Error adding chats:", error);
        return null;
    }
}

async function deleteMessage(id: string) {
    const docRef = doc(db, 'chats', id);

    try {
        await deleteDoc(docRef);
        return 'Success deleting chats';
    } catch (error) {
        console.error("Error deleting chates:", error);
        return 'Failed to delete chats';
    }
}



export { getAllChatsOfUser, addChat, deleteMessage };
