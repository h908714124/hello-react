import { ChangeEvent, useState } from 'react';
import { useContext } from './index';

export default function Nim() {

  const model = useContext().model.nim;
  const [checked, setChecked] = useState(model.checked);

  return (
    <div>
      <p><input type="checkbox" onChange={onCheckboxModified} checked={checked}></input></p>
      <p><input onChange={onTextInputModified} defaultValue={model.name} disabled={!checked}></input></p>
      <button type='submit' onClick={onSubmitButtonClicked}>OK</button>
    </div>
  );

  function onCheckboxModified(e: ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);
    model.checked = e.target.checked;
  }

  function onTextInputModified(e: ChangeEvent<HTMLInputElement>) {
    model.name = e.target.value;
  }

  function onSubmitButtonClicked() {
    alert(model.name);
  }
}
