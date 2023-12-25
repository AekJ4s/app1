import React from 'react'
// import './style.css'
import logo from './logo.png'
function App(){

  // Slide 43
  let r = 'React'
  let rn = 'React Native'
  const el = (
    <div>
      Create Web & Mobile Apps<br />
      with {r} &  {rn}
    </div>
  )
  return el
  
  // code Slide 44
  // return (
  //   <table border="1">
  //     <tr><th>Product</th><th>Price</th></tr>
  //     <tr><th>React</th><th>320</th></tr>
  //     <tr><th>React Native</th><th>340</th></tr>
  //   </table>
  // )

  //Slide 27
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
  // return<img src={logo} width="10%" alt=""/>
}
export default App;