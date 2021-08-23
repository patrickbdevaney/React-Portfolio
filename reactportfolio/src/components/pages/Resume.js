import React from 'react';

export default function Resume() {

    const h1 = {
        fontSize: '50px',
        padding: '15px 15px 15px 15px'
    }

    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignText: 'center',
        backgroundColor: '#d8e1ff'
    }

    return (
        <div style = { divStyle }>
            
            <div>
                <h1 style={ h1 }>Resume</h1>
                <p> <a href={"https://docs.google.com/document/d/1xW64pwcbXdeQavWScWYlKei6xmRVgHqXZk41FL5ghAw/edit?usp=sharing"}>Resume</a></p>

                <img src={require("../../assets/Resume2.jpeg").default} alt= "resume"></img>
            </div>
        </div>

    )
}