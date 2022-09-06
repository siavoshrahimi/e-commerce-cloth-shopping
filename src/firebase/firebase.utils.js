import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyB6dslGPgc4dwp3CsPiFMXPnRtAc5waP_c",
    authDomain: "ecommerc-db-a391c.firebaseapp.com",
    projectId: "ecommerc-db-a391c",
    storageBucket: "ecommerc-db-a391c.appspot.com",
    messagingSenderId: "282961705298",
    appId: "1:282961705298:web:1adb8d68f98186a1b6228b",
    measurementId: "G-GMCXMCHSGM"
}

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return
    const userRef = firestore.doc(`user/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const {displayName, email} =userAuth
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (e) {
            console.log(e.message)
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set data in firebase(we do for dynamically set our data on firebase once but it can be helpful in future)
export const addCollectionAndDocument = async (collectionKey, objectToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectToAdd.forEach(obj =>{
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    await batch.commit();
}

//get data back from data base
export const convertCollectionsSnapshotToMap = collections =>{
    //access to array and convert it to obj
    const transformedCollection = collections.docs.map(doc => {
        const {title , items} = doc.data();

        return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return {
        collectionArray:transformedCollection,
        collectionObject:transformedCollection.reduce((accumulator , collection) =>{
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    },{})
    }
}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
