import React from 'react'
import {Header,Content,Footer} from './func-components'
import Calendar from './class-components'
import MsgBox from './class-props'
import MsgBox2 from './func-props'
// import logo from './CH.gif'
function App(){

  return (
    <MsgBox
      text="การใช้ props ใน Function Components"
      color="red"
      bgColor="#ccc"
      fontSize="18pt"
      border="solid 1px black"
    />
    
  )
  // Slide 43
  // return(
  //   <h3>Hello Wolrd!<br/>สวัสดีชาวโลก</h3>
  // )
  // Slide 44 Part 1
  // let r = 'React'
  // let rn = 'React Native'
  // const el = (
  //   <div>
  //     Create Web & Mobile Apps<br />
  //     with {r} &  {rn}
  //   </div>
  // )
  // return el
  
  // code Slide 44
  // return (
  //   <table border="1">
  //     <tr><th>Product</th><th>Price</th></tr>
  //     <tr><th>React</th><th>320</th></tr>
  //     <tr><th>React Native</th><th>340</th></tr>
  //   </table>
  // )

  // Slide 47
  // const divStyle = {
  //   color: 'red',
  //   backgroundColor: 'powderblue',
  //   fontSize:'larger',
  //   padding:'3px',
  // }
  // return <div style={divStyle}>Hello React</div>

  //Slide 49
  // return(
  //   <>
  //   <h2>DevelopThai.com</h2>
  //   <div className='title'>React & React Native</div>
  //   </>
  // )

  //Slide 52
  // let color = ['red', 'green', 'blue', 'yellow']
  // let list = color.map(c => <li>{c}</li>)
  // return <ul>{list}</ul>
  
  //Slide 54
  // return<img src={logo} width="20%" alt="" />
  
}
export default App;