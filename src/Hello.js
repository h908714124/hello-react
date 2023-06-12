import { useOutletContext } from 'react-router-dom';

export default function Hello() {

  const { name1, setName1 } = useOutletContext();

  return (
    <div>
      <p><input onInput={onTextInputModified} value={name1}></input></p>
      <p>{name1}</p>
    </div>
  );

  function onTextInputModified(e) {
    setName1(e.target.value);
  }
}
