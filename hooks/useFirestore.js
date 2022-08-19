import {useState,useEffect} from "react";
import {collection,query, orderBy,onSnapshot} from "firebase/firestore";
import {projectFirestore} from "../firebase/firebase";


const useFirestore = (path) => {
    const [docs,setDocs] = useState([]);
    const imageCollectionRef = collection(projectFirestore,path);
    const q = query(imageCollectionRef,orderBy("createdAt","desc"));

    useEffect(() => {
        const unsub = onSnapshot(q,(snapshot) => {
            let documents = [];
            snapshot.forEach((doc) => {
                documents.push({...doc.data(),id: doc.id});
            })
            setDocs(documents);
            console.log(documents);

        })
        return ()=> unsub();

    } ,[path]);

    return {docs};
}

export default useFirestore;