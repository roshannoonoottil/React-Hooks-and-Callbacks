import React, { useContext } from 'react'

// Create the ThemeContext
export const ThemeContext = React.createContext();

function UseContext() {

     // Use useContext to consume the ThemeContext value
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
    </div>
  )
}

export default UseContext
