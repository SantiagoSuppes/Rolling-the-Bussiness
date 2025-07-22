// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc, updateDoc, writeBatch, doc, getDoc, query, where } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSecPwdb8Uo-XvRSZb_E8Kpy75budrQQI",
  authDomain: "rolling-the-bussiness.firebaseapp.com",
  projectId: "rolling-the-bussiness",
  storageBucket: "rolling-the-bussiness.firebasestorage.app",
  messagingSenderId: "819055706706",
  appId: "1:819055706706:web:a8c9e016bf619bd707d58b",
  measurementId: "G-6L2LJ3RGM7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export async function getItems() {
    const querySnapshot = await getDocs(collection(db, 'items'));
    const listaItems = [];
    
    querySnapshot.forEach((doc) => { 
        listaItems.push({id: doc.id, ...doc.data()})
    });
    
    return listaItems;
}

export async function getItemsByCategory(category){
    const q = query(collection(db,"items"), where("category", "==", category))
    const querySnapshot = await getDocs(q);
    const itemList = [];

    querySnapshot.forEach((doc) => {
        itemList.push({...doc.data(), id: doc.id})
    });

    return itemList;
}

export const createOrder = async (order) => {
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
}

export async function getSingleItem(id) {
    const documentRef = doc(db, 'items', id);
    const snapshot = await getDoc(documentRef);

    try {
        if (snapshot.exists()){
            return {...snapshot.data(), id:snapshot.id};
        } else { console.log('El documento no existe'); }
    } catch (err) {
        console.error("Error en obtencion de item", err);
    }
}