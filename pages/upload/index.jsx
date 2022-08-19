import React, {useState} from 'react';
import Navbar from "../../components/navbar";
import Progress from "../../components/Progress";


const Upload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];
    //TODO: add file validation

    const handleChange = (e) => {
        e.preventDefault();
        let selectedFile = e.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)) {
            setFile(selectedFile);
            setError('')
        }
        else{
            setFile(null);
            setError("Please select a png or jpeg file");
        }

    }
    return (
        <>
            <Navbar/>
            <div className="pt-20 bg-emerald-100 h-screen" >
                <div className="p-10 flex justify-center">

                    <form>
                        <label
                            className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-600 rounded-lg shadow-lg tracking-wide uppercase border border-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white">
                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"/>
                            </svg>
                            <span className="mt-2 text-base leading-normal">Select a file</span>
                            <input type='file' className="hidden" onChange={handleChange}/>
                        </label>
                    </form>
                    <div className="">
                        {error && <div>{error}</div>}
                        {file && <div>{file.name}</div>}
                        {file && <Progress file={file} setFile={setFile}/>}
                    </div>
                </div>

            </div>

        </>
    );
};

export default Upload;
