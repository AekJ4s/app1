import React from 'react'
// import {Header,Content,Footer} from './func-components'
// import Calendar from './class-components'
// import MsgBox from './class-props'
// import MsgBox2 from './func-props'
import { userContext } from './context'
import Content from './context-content'
import Header from './context-header'

// import logo from './CH.gif'
function App(){

  return (
    <userContext.Provider value={'Jasdakorn Khumdej'}>
    <Header/>
    <Content/>
    </userContext.Provider>
  )
}
export default App;