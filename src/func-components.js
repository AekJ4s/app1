import React from 'react'

export function Header(){
    const aStyles = {
        display: 'inline-block',
        color:'blue', // ให้สีตัวอักษรเป็นสีฟ้า
        margin: '7px', 
        textDecoration: 'none', //กำหนดให้ LINK ไม่มีเส้นใต้
    }
    return(
        <div style={{backgroundColor: '#ccc'}}>
            <a href=" " style={aStyles}>Home</a> |&nbsp;
            <a href=" " style={aStyles}>React</a> |&nbsp;
            <a href=" " style={aStyles}>React Native</a>
        </div>
    )
}
    export function Content() {
        return(
            <div style={{textAlign: 'center'}}>
                <h2>Hello<br/>React & React Native</h2>
                <br/><br/><br/>
                
            </div>
        )
    }

    export const Footer = () => {
        return(
            <div style={{textAlign: 'center'}}>
            &copy; {new Date().getFullYear()}
            </div>
        )
    }

