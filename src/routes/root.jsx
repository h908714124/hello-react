import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

export default function Root() {
  const context = {
    'hello-state': { name: useState('Hallo') },
    'nim-state': { name: useState('Hallo') }
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
