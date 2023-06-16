import { FormEvent, useState } from 'react';
import { useContext } from './index';

export default function Hello() {

  const model = useContext().model.hello;
  const [name, setName] = useState(model.name);

  return (
    <div>
      <p><input onInput={onNameModified} value={name}></input></p>
      <p><input onInput={onEmailModified} defaultValue={model.email}></input></p>
      <p><input onInput={onNumberModified} defaultValue={model.number}></input></p>
      <p>{name}</p>
      <p><button type='submit' onClick={onOkButtonClicked}>OK</button></p>
    </div>
  );

  function onNameModified(e: FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
    model.name = e.currentTarget.value;
  }

  function onEmailModified(e: FormEvent<HTMLInputElement>) {
    model.email = e.currentTarget.value;
  }

  function onNumberModified(e: FormEvent<HTMLInputElement>) {
    model.number = e.currentTarget.value;
  }

  function onOkButtonClicked() {
    alert(JSON.stringify(model));
  }
}
