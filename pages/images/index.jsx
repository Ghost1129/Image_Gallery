import React from 'react';
import useFirestore from "../../hooks/useFirestore";
import Image from "next/image";
import Navbar from "../../components/navbar";

import { AiOutlineLink } from 'react-icons/ai';
import Modal from "../../components/modal";

function Index() {
    const {docs} = useFirestore('images');
    const [selectedImage, setSelectedImage] = React.useState(null);
    return (
        <>
            <Navbar/>
            <section className="bg-emerald-100 h-screen ">
                <div className="container mx-auto px-5 py-20">
                    <div className="flex flex-wrap -m-2 ">
                        <div className="w-1/3 h-60 mt-1 bg-grey-100 rounded-xl p-4 flex items-center justify-center border-2 border-emerald-200 cursor-pointer">
                            <a href="/upload" className="text-6xl">+</a>
                        </div>

                        {docs && docs.map(doc => (
                            <div key={doc.id} className="p-2 w-1/3 h-64 overflow-scroll group cursor-pointer " onClick={()=>setSelectedImage(doc.url)}>
                                <div className="relative flex h-full">
                                    <Image src={doc.url} alt={doc.name} layout={'fill'} objectFit={'cover'} className="absolute w-full rounded-xl"/>
                                    <a className="hidden absolute  w-full h-full items-center justify-center group-hover:flex">
                                        <AiOutlineLink className="w-8 h-8"/>
                                    </a>
                                </div>
                            </div>

                        ))
                        }
                    </div>

                </div>
            </section>
            {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }



        </>
    );
}

export default Index;