import React, { CSSProperties } from 'react';



const titleStyle :CSSProperties= {
    textAlign:'center',
    fontFamily:'Avenir',
    font:"Avenir",
    color:"#000000",
    paddingTop:"20px",
    paddingBottom:"10px",
    maxWidth:"560px",
    margin:'auto',
    display:'block',
}

const h1Style : CSSProperties = {
    fontSize:'54px'
}

interface CenteredTitleProps {
    h1Content : string
    pContent : string;
}

const CenteredTitle = (props : CenteredTitleProps) => {
    return(
        <div className="title" style={titleStyle}>
            <h1 style={h1Style}>{props.h1Content}</h1>
            <p>{props.pContent}</p>
        </div>
        );
}

export default CenteredTitle;