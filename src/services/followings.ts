import { collection, onSnapshot, addDoc, getDoc, updateDoc, deleteDoc, doc,where,query } from "firebase/firestore";
import { db } from "../config/firebase";

async function getAllfollowings(receiverId: string, senderId: string) {
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
    const colRef = collection(db, 'Followings');

    try {
        const docRef = await addDoc(colRef, product);
        console.log(docRef.id);
        return { id: docRef.id, ...product };
    } catch (error) {
        console.error("Error adding Followings:", error);
        return null;
    }
}

async function deleteMessage(id: string) {
    const docRef = doc(db, 'Followings', id);

    try {
        await deleteDoc(docRef);
        return 'Success deleting Followings';
    } catch (error) {
        console.error("Error deleting Followings:", error);
        return 'Failed to delete Followings';
    }
}



export { getAllfollowings, addChat, deleteMessage };
