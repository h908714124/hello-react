import { FormEvent } from 'react';
import { useContext } from './index';

export default function Hello() {

  const [name, setName] = useContext().hello.name;

  return (
    <div>
      <p><input onInput={onTextInputModified} value={name}></input></p>
      <p>{name}</p>
    </div>
  );

  function onTextInputModified(e: FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
  }
}
