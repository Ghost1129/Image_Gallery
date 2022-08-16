import React, {useState} from 'react';
import Navbar from "../../components/navbar";

const Upload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];
    //TODO: add file validation

    const handleChange = (e) => {
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
            <div className="pt-20">
                <h1>Upload</h1>
                <form action="">

                    <input type="file" name="file" id="file" onChange={handleChange}/>
                    <div className="">
                        {error && <div>{error}</div>}
                        {file && <div>{file.name}</div>}
                    </div>


                </form>
            </div>
            
        </>
    );
};

export default Upload;
