import React, { createContext, useState } from 'react'
import  Login  from './Login'
import  User  from './User'

// export const ContextHook = () => {
//   const [userName,setUserName]=useState()
//   return (
//     <div>
//       ContextHook
//     <Login setUserName={setUserName}></Login>
//     <User userName={userName}></User>
//     </div>
//   )
// }

export const AppContext=createContext(null);
const ContextHook = () => {
  const [userName,setUserName]=useState("");
  return (
    <AppContext.Provider value={{userName,setUserName}}>
      <Login/>
      <User/>
    </AppContext.Provider>
  )
}

export default ContextHook