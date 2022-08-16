import React from 'react';

function Navbar() {
    return (

            <nav className="h-16 flex  items-center p-10 gap-8 fixed">
                <a href="" className="mx-10">
                    Logo
                </a>
                <div className="">
                    <a href="" className="mx-10">Home</a>
                    <a href="" className="mx-10">Upload</a>
                    <a href="" className="mx-10">Random</a>
                </div>

            </nav>

    );
}

export default Navbar;