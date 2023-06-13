import { Outlet, Link, useOutletContext } from "react-router-dom";
import { useState } from 'react';
import { HelloState } from '../types';

type ContextType = { 
  'hello-state': HelloState,
  'nim-state' : HelloState,
};

export default function Root() {
  const context : ContextType = {
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

export function useContext() {
  return useOutletContext<ContextType>();
}