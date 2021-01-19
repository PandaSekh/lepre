import React from 'react';
import CustomReactions from './CustomReactions';
import DefaultReactions from './DefaultReactions';
import { Emoji } from 'lepre';

export default function App() {
  return (
    <div>
      <h1>
        <span role='img' aria-label='rabbit'>
          🐰
        </span>
        L.E.P.R.E.
      </h1>
      <h3>Lightweight Emoji Picker for React Enthusiasts</h3>

      <div className='content'>
        <DefaultReactions />
      </div>

      <div className='content'>
        <CustomReactions />
      </div>
    </div>
  );
}
