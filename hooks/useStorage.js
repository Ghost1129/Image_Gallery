import {useState,useEffect} from "react";
import {projectStorage,projectFirestore,serverTimestamp} from "../firebase/firebase";
import {ref,uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {collection,addDoc} from "firebase/firestore";

const useStorage = (file) => {
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null);

    useEffect(() => {
        const storageRef =  ref(projectStorage,file.name);
        const collectionRef = collection(projectFirestore,"images");

        const uploadTask= uploadBytesResumable(storageRef,file)

        uploadTask.on('state_changed',(snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);

        },
        (error) => {
            setError(error);
        },
        async() => {
            const url = await getDownloadURL(storageRef);
            await addDoc(collectionRef,{
                url,
                createdAt: serverTimestamp()
            });
            setUrl(url);
        }
        )
    },[file]);

    return {progress,error,url};
}

export default useStorage;