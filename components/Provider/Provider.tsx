import React from 'react'

const defaultValue = {
  isDark: false,
  toggleNight: ()=>{this.isDark =}
}
const Context = React.createContext(undefined)


function Provider({children}) {
  return (
    <Context.Provider >
      {children}
    </Context.Provider>
  )
}

export const Consumer = Context.Consumer;

export default Provider
