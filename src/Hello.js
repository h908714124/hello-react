import { useState } from 'react';

export default function Hello() {

  const [ name, setName ] = useState('Hallo');	

  return (
    <div>
      <p><input onInput={onTextInputModified} value={name}></input></p>
      <p>{name}</p>
    </div>
  );

  function onTextInputModified(e) {
    setName(e.target.value);
  }
}
