import { FormEvent, useState } from 'react';
import { useContext } from './index';
import { useForm } from 'react-hook-form'

export default function Hello() {

  const model = useContext().model.hello;
  const [name, setName] = useState(model.name);
  const { register }  = useForm({defaultValues : {
    name: model.name,
    email : model.email,
    number : model.number
  }});

  return (
    <div>
      <p><input {...register("name")} onInput={onNameModified}></input></p>
      <p><input {...register("email")} onInput={onEmailModified}></input></p>
      <p><input {...register("number")} onInput={onNumberModified}></input></p>
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
