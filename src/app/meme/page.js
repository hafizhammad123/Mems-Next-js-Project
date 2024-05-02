'use client'
import { useRef } from "react";
import Draggable from "react-draggable";
import { exportComponentAsJPEG } from "react-component-export-image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function Log() {
    const SearchParams = useSearchParams();
    const memeUrl = SearchParams.get('aa');

    const [ displayText01 , setdisplayText01 ] = useState("");
    const [ displayText02 , setdisplayText02 ] = useState("");

    const memeContainerRef = useRef();

    const exportMemeAsJPEG = () => {
        exportComponentAsJPEG(memeContainerRef, {
            fileName: "Memes generator"
        });
    }

    return (
        <div className="ye-hai-main">
            <div className="karachi">
                <h1 className="headDetail">Meme Details</h1>
                <div  ref={memeContainerRef}>
                    <img src={memeUrl} width="250" />
                    <Draggable ><div  className="drag1">{displayText01}<img src={"https://icons.veryicon.com/png/o/miscellaneous/small-monochrome-icon/drag-and-drop-1.png"} width="15px"/></div></Draggable>
                    <Draggable><div  className="drag1">{displayText02} <img src={"https://icons.veryicon.com/png/o/miscellaneous/small-monochrome-icon/drag-and-drop-1.png"} width="15px"/></div></Draggable>


                </div>
                <input className="input1" type="text" placeholder="Enter 1st meme" onChange={(e) => setdisplayText01(e.target.value)} />
                <input  className="input1" type="text" placeholder="Enter 2nd meme" onChange={(e) => setdisplayText02(e.target.value)} />
                <button className="btn" onClick={exportMemeAsJPEG}>Save </button>
            </div>
        </div>
    )
}

export default Log;
