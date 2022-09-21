import React, { useState } from 'react';
import MyContext from './MyContext';

function Provider({ children }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');

  
  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  const contextValue = {
    name,
    setName,
    age,
    setAge,
    city,
    setCity,
    module,
    setModule,
    handleChange,
  };


  return (
    <MyContext.Provider value={ {...contextValue}}>
      { children }
    </MyContext.Provider>
  );
}

export default Provider;