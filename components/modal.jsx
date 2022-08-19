import React from 'react';
import Image from "next/image";

function Modal({selectedImage,setSelectedImage}) {
    const handleClick = (e) => {
        if(e.target.classList.contains('back')) {
            setSelectedImage(null);
        }
    }
    return (
        <div className="back h-screen w-screen fixed top-0 left-0  flex items-center justify-center bg-gray-50 bg-opacity-70" onClick={handleClick}>
            <div className="relative w-3/5 h-3/5 m-32 ">
                <Image src={selectedImage} alt={'enlarged'} layout={'fill'}/>
            </div>

        </div>
    );
}

export default Modal;