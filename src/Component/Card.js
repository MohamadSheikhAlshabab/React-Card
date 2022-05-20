import React from "react";

export default function Card (){
    return(
        <div className="card"> 
            <img className="img-card" alt="person" src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"/>
            <h4>Mohamad Sheikh Alshabab</h4>
            <h5>Frontend Developer</h5>
            <h6>sheikhalshabab website</h6>
            <div className="buttons">
                <div className="email-container">
                    <button type="button" className="email"><i className="fa fa-envelope" aria-hidden="true"></i> <span className="email-text"> Email</span></button>
                </div>
                <div className="linkedin-container">
                <button type="button" className="linkedin"><i className="fa fa-linkedin-square" aria-hidden="true"></i>  LinkedIn</button>
                </div>
            </div>
            <div className="para">
                <h5>About</h5>
                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
            </div>
                        <div className="para">
                <h5>Interstings</h5>
                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
            </div>
        </div>
    )
}