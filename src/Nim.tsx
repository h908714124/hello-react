import { FormEvent } from 'react';
import { useContext } from './index';

export default function Nim() {

  const nim = useContext().nim;
  const [checked, setChecked] = nim.checked;
  const [name, setName] = nim.name;

  return (
    <div>
      <p><input type="checkbox" onChange={onCheckboxModified} checked={checked}></input></p>
      <p><input onInput={onTextInputModified} value={name} disabled={!checked}></input></p>
      <p>{name}</p>
    </div>
  );

  function onCheckboxModified(e: FormEvent<HTMLInputElement>) {
    setChecked(e.currentTarget.checked);
  }

  function onTextInputModified(e: FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
  }
}
