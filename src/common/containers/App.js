import React, { useState } from 'react';

export const Context = React.createContext('theme');

const App = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const onChangeTheme = (theme) => setTheme(theme);

  return (
    <Context.Provider
      value={{
        onChangeTheme,
        theme,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default App;
