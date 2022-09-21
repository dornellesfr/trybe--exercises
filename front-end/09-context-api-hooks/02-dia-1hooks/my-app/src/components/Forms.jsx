import React, { useState } from 'react';

function Forms() {
  const [state, setState] = useState({
    name: '',
    age: 0,
    city: '',
    modules: '',
    lis: [],
  });
  // const [age, setAge] = useState(0);
  // const [city, setCity] = useState('');
  // const [modules, setModule] = useState('');
  // const [lis, setLis] = useState('');


  const handleClick = (event) => {
    event.preventDefault();
    
    const student = (
      <ul key={ state.age + state.city + state.name }>
          <li>{ state.name }</li>
          <li>{ state.age }</li>
          <li>{ state.city }</li>
          <li>{ state.modules }</li>
        </ul>
    )
    
    setState({
      ...state,
      name: '',
      age: 0,
      city: '',
      modules: '',
      lis: [...state.lis, student],
    })
  }

  return (
    <form>
      <input value={state.name} onChange={(event) => setState({ ...state, name: event.target.value})} type="text" name="name" placeholder="Nome completo" /><br /><br />

      <input value={state.age} onChange={(event) => setState({ ...state, age: event.target.value})} type="number" name="age" id="age"  placeholder="Idade" /><br /><br />

      <input value={state.city} onChange={(event) => setState({ ...state, city: event.target.value})} type="text"  name="city" placeholder="Cidade"/><br /><br />
      
      <label htmlFor="fundamentals">
        <input value="fundamentals" onChange={(event) => setState({ ...state, modules: event.target.value})} type="radio" name="module" id="fundamentals" />
        fundamentals
      </label>

      <label htmlFor="front">
        <input value="front" onChange={(event) => setState({ ...state, modules: event.target.value})} type="radio" name="module" id="front" />
        front
      </label>

      <label htmlFor="back">
        <input value="back" onChange={(event) => setState({ ...state, modules: event.target.value})} type="radio" name="module" id="back" />
        back
      </label>

      <label htmlFor="science">
        <input value="science" onChange={(event) => setState({ ...state, modules: event.target.value})} type="radio" name="module" id="science" />
        science
      </label>

      <button
        type="submit"
        onClick={ handleClick }
      >
        Submit
      </button>

      { state.lis.map((li) => {
        return li
      }) }

    </form>
  );
}

export default Forms;