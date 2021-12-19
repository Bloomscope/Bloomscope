import React from "react";
import './downloadbutton.scss'

 
const DownloadButton = (url) => {
    
    return (
        <button><a href={url}>Download</a></button>
    );

};

export default DownloadButton;

