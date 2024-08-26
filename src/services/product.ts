import { collection, onSnapshot, addDoc, getDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

// Get all the Products
async function getAllProducts() {
    const colRef = collection(db, 'Products');
    const list: any[] = [];

    const unsubscribe = onSnapshot(colRef, (snapshot) => {
        snapshot.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
        });
    });

    return list;
}

// Add a new product
async function addProduct(product: any) {
    const colRef = collection(db, 'Products');

    try {
        const docRef = await addDoc(colRef, product);
        console.log(docRef.id);
        return { id: docRef.id, ...product };
    } catch (error) {
        console.error("Error adding product:", error);
        return null;
    }
}

// Update an existing product by ID
async function updateProduct(data: any, id: string) {
    const docRef = doc(db, 'Products', id);

    try {
        await updateDoc(docRef, data);
        return 'Success updating product';
    } catch (error) {
        console.error("Error updating product:", error);
        return 'Failed to update product';
    }
}

// Delete a product by ID
async function deleteProduct(id: string) {
    const docRef = doc(db, 'Products', id);

    try {
        await deleteDoc(docRef);
        return 'Success deleting the product';
    } catch (error) {
        console.error("Error deleting product:", error);
        return 'Failed to delete product';
    }
}

// Get a single product by ID
async function getProductById(id: string) {
    const docRef = doc(db, 'Products', id);

    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error getting product:", error);
        return null;
    }
}

export { getAllProducts, addProduct, updateProduct, deleteProduct, getProductById };
