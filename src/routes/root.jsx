import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

export default function Root() {
  const [name1, setName1] = useState('Hallo');
  const [name2, setName2] = useState('Hallo');
  const context = {
    name1 : name1,
    setName1 : setName1,
    name2 : name2,
    setName2 : setName2
  }
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`/hello`}>Hello React</Link>
            </li>
            <li>
              <Link to={`/nim`}>Play Nim</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet context={context}/>
      </div>
    </>
  );
}
