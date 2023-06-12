import { useOutletContext } from 'react-router-dom';

export default function Nim() {

  const { name2, setName2 } = useOutletContext();

  return (
    <div>
      <p><input onInput={onTextInputModified} value={name2}></input></p>
      <p>{name2}</p>
    </div>
  );

  function onTextInputModified(e) {
    setName2(e.target.value);
  }
}
