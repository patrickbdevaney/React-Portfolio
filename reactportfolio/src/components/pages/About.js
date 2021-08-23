import React from 'react';

function About() {

    const AboutPage = {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: '#d8e1ff'
    }
    const PictureStyle = {
        height: '300px', 
        width: '300px',  
        borderRadius: '5px',
        padding: '50px',
        display: 'center',
        marginLeft: 'auto',
        marginTop: '30px',
        marginBottom: '50px',
        marginRight: 'auto',
    }
    const paragraph = {
         display: 'flex', 
         textAlign: 'center', 
         marginTop: "50px",
         fontSize: '30px', 
         padding: '90px'
    }
    const h1 = {
        fontSize: '60px',
        marginTop: '20px'
    }
    
    return (   
        <section style={AboutPage}>
            <h1 style={h1}>About</h1>
        <div className="container-content">
            <div className="profile-picture" style={PictureStyle}>
                <img src={require("../../assets/IMG_2315.JPG").default} height='350px' width= '350px'  alt='profile'/>
            </div>
            <p style= {paragraph}> Full Stack Web Developer utilizing a background in Humanities to develop ethically centered applications. Earned a certificate in Full Stack Web Development from the University of Miami Coding Bootcamp. Solution-oriented developer with a focus in growing technologies such as progressive web applications and software as a service. Strengths in teamwork, flexibility, and troubleshooting applications at each layer of the stack.
            </p>    
        </div>
        </section>
    )
}

export default About;