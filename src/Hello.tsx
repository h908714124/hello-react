import { FormEvent, useState } from 'react';
import { useContext } from './index';

export default function Hello() {

  const model = useContext().model.hello;
  const [name, setName] = useState(model.name);

  return (
    <div>
      <p><input onInput={onTextInputModified} value={name}></input></p>
      <p>{name}</p>
    </div>
  );

  function onTextInputModified(e: FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
    model.name = e.currentTarget.value;
  }
}
