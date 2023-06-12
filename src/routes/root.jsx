import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

export default function Root() {
  const context = {
    'hello-state': useState('Hallo'),
    'nim-state': useState('Hallo')
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
