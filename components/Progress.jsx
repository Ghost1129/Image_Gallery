import React, {useEffect} from 'react';
import useStorage from "../hooks/useStorage";

function Progress({file, setFile}) {
    const {url,progress} = useStorage(file);
    console.log(url);
       useEffect(() => {
              if(url) {
                setFile(null);
                window.location.href = '/images/';
              }
       }, [url, setFile]);
    return (
        <div className="w-10/12 h-1 bg-amber-200">
            <div className="h-1 bg-amber-700" style={{width:`${progress}%`}}></div>
        </div>
    );
}

export default Progress;