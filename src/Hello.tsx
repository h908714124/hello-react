import { ChangeEvent, useState } from 'react';
import { useContext } from './index';
import { useForm } from 'react-hook-form'

export default function Hello() {

  const model = useContext().model.hello;
  const [name, setName] = useState(model.name);
  const { register } = useForm({
    defaultValues: {
      name: model.name,
      email: model.email,
      number: model.number
    }
  });

  const onNameModified = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    model.name = e.target.value;
  }

  const onEmailModified = (e: ChangeEvent<HTMLInputElement>) => {
    model.email = e.target.value;
  }

  const onNumberModified = (e: ChangeEvent<HTMLInputElement>) => {
    model.number = e.target.value;
  }

  const onOkButtonClicked = () => {
    alert(JSON.stringify(model));
  }

  return (
    <div>
      <p><input {...register("name")} onChange={onNameModified}></input></p>
      <p><input {...register("email")} onChange={onEmailModified}></input></p>
      <p><input {...register("number")} onChange={onNumberModified}></input></p>
      <p>{name}</p>
      <p><button type='submit' onClick={onOkButtonClicked}>OK</button></p>
    </div>
  );
}
