import { FormEvent } from 'react';
import { useContext } from './index';

export default function Nim() {

  const nim = useContext().nim;
  const [checked, setChecked] = nim.checked;

  return (
    <div>
      <p><input type="checkbox" onChange={onCheckboxModified} checked={checked}></input></p>
      <p><input onInput={onTextInputModified} defaultValue={nim.name} disabled={!checked}></input></p>
      <button type='submit' onClick={onSubmitButtonClicked}>OK</button>

    </div>
  );

  function onCheckboxModified(e: FormEvent<HTMLInputElement>) {
    setChecked(e.currentTarget.checked);
  }

  function onTextInputModified(e: FormEvent<HTMLInputElement>) {
    nim.name = e.currentTarget.value;
  }

  function onSubmitButtonClicked() {
    alert(nim.name);
  }
}
