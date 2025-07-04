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

// Initialize Firebase
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
        console.log(doc.data());
        itemList.push({...doc.data(), id: doc.id})
    })
}

export async function addNewItems() {
    const itemsCollectionRef = collection(db, 'items');

    const newItem = { nombre: "Anteojos de sol",
        precio: 100,
        disponibilidad: true
    };

    try {
        const docRef = await addDoc(itemsCollectionRef, newItem); // Creacion del documento
        console.log(`Documento creado con ID: ${docRef.id}`);
    } catch (error) {
        console.error("Error", error);
    }
}

export async function updateItem(id) {
    const itemDocRef = doc(db, 'items', id);

    try {
        await updateDoc(itemDocRef, {precio: 1200});
        console.log("Elemento actualizado correctamente");
    } catch (error) {
        console.error("Error de actualizacion", error);
    }
}

export async function updateMultipleItems() {
    const batch = writeBatch(db);
    const item1Ref = doc(db, 'items', id1);
    const item2ref = doc(db, 'items', id2);

    batch.update(item1Ref, {precio: 300});
    batch.update(item2Ref, {precio: 4500});

    try {
        await batch.commit();
        console.log("Lote actualizado");
    } catch (err) {
        console.error("Error de actualizacion de lote", err);
    }
}

export async function getSingleItem(id) {
    const documentRef = doc(db, 'items', id);

    try {
        const snapshot = await getDoc(documentRef);
        if (snapshot.exists()){
            return snapshot.data();
        } else { console.log('El documento no existe'); }
    } catch (err) {
        console.error("Error en obtencion de item", err);
    }
}