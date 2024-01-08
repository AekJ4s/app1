import React,{Component} from 'react'


export default function MsgBox2(props){
    const divStyle = {
        margin :'10px',
        padding :'5px',
        color: props.color,
        backgroundColor: props.backgroundColor,
        fontSize: props.fontSize,
        border: props.border
    }
    return <div style={divStyle}>{props.text}</div>
}