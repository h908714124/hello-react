import { ChangeEvent, useState } from 'react';
import { useContext } from './index';
import Button from './components/Button';

export default function Nim() {

  const model = useContext().model.nim;
  const [checked, setChecked] = useState(model.checked);

  const onCheckboxModified = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    model.checked = e.target.checked;
  }

  const onTextInputModified = (e: ChangeEvent<HTMLInputElement>) => {
    model.name = e.target.value;
  }

  const onSubmitButtonClicked = () => {
    alert(model.name);
  }

  return (
    <div>
      <p><input type="checkbox" onChange={onCheckboxModified} checked={checked}></input></p>
      <p><input onChange={onTextInputModified} defaultValue={model.name} disabled={!checked}></input></p>
      <Button onClick={onSubmitButtonClicked}>OK</Button>
    </div>
  );
}
