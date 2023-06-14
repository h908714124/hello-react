import { FormEvent } from 'react';
import { useContext } from './index';

export default function Nim() {

  const model = useContext().model;
  const [checked, setChecked] = useContext().nim.checked;

  return (
    <div>
      <p><input type="checkbox" onChange={onCheckboxModified} checked={checked}></input></p>
      <p><input onInput={onTextInputModified} defaultValue={model.name} disabled={!checked}></input></p>
      <button type='submit' onClick={onSubmitButtonClicked}>OK</button>
    </div>
  );

  function onCheckboxModified(e: FormEvent<HTMLInputElement>) {
    setChecked(e.currentTarget.checked);
  }

  function onTextInputModified(e: FormEvent<HTMLInputElement>) {
    model.name = e.currentTarget.value;
  }

  function onSubmitButtonClicked() {
    alert(model.name);
  }
}
