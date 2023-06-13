import { useOutletContext } from 'react-router-dom';

export default function Hello() {

  const { 'hello-state' :  { name: [ name, setName ] } } = useOutletContext();

  return (
    <div>
      <p><input onInput={onTextInputModified} value={name}></input></p>
      <p>{name}</p>
    </div>
  );

  function onTextInputModified(e) {
    setName(e.target.value);
  }
}
