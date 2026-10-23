import React, {useState,useEffect} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import './styles.css';


export const ColorPallet=()=>{
  const [background,setBackground]=useState("#1E1E24");
  const [current,setCurrent]=useState(null);

  const colors = [
  "#9253A1",
  "#F063A4",
  "#2DC5F4",
  "#FCEE21",
  "#F16164",
  "#70327E",
  "#A42963",
  "#0B6A88",
  "#F89E4F",
  "#EC015A",
  "#FF6B8B",
  "#FF8E9E",
  "#FF9FF3",
  "#FFB4D6",
  "#F8A5C2",
  "#FF8E53",
  "#FFA07A",
  "#FFB8B1",
  "#FCD3B3",
  "#FFD000",
  "#FFE066",
  "#FFF3B0",
  "#F3A683",
  "#1DD1A1",
  "#33D9B2",
  "#78E08F",
  "#A8E6CF",
  "#95AFBA",
  "#54A0FF",
  "#4ED1FC",
  "#A1E3F9",
  "#70A1FF",
  "#38CCDE",
  "#5F27CD",
  "#9B5DE5",
  "#B57EDC",
  "#D6A2E8",
  "#E8A7A1",
  "#FF7675",
  "#00D2D3"
];
  useEffect(()=>{
    const timeoutId=setTimeout(()=>{
      setCurrent(null);
    },3000);
    return()=>clearTimeout(timeoutId)
  },[current]);

  return(
    <div className="website" style={{background : background}}>
      {current!==null &&<h1>Copied : {current}</h1>}
      <div className="container">
        {colors.map((color,index)=>(
          <div key={index} className="card">
            <div style={{background:color,
                        filter: "brightness(85%)",
                        boxShadow: color==background ? "0 0 5px #000":""
                      }}
                  className="box"
                  onClick={()=>setBackground(color)}
            />
            <CopyToClipboard text={`Color : ${color}`} >
                      <p  style={{color: color===background ? "#fff":color}}
                          onClick={()=>setCurrent(color)}>
                        {color}
                      </p>
            </CopyToClipboard>
          </div>
        ))}
        
      </div>
    </div>
  );



}