import React from "react";
import './downloadbutton.scss'

 
const DownloadButton = (url) => {
    
    return (
        <button><a href={url} download='data.txt'>Download</a></button>
    );

};

export default DownloadButton;

