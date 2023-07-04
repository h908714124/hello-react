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

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(model));
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <p><input {...register("name")} onChange={onNameModified}></input></p>
        <p><input {...register("email")} onChange={onEmailModified}></input></p>
        <p><input {...register("number")} onChange={onNumberModified}></input></p>
        <p>{name}</p>
        <p><button type='submit'>OK</button></p>
      </div>
    </form>
  );
}
