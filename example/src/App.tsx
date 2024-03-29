import React from 'react';
import CustomReactions from './CustomReactions';
import CustomReactionsV2 from './CustomReactionsV2';
import DefaultReactions from './DefaultReactions';

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
      <h4>
        <a href='https://github.com/PandaSekh/lepre'>Github</a>
        <a href='https://www.npmjs.com/package/lepre'>npm</a>
      </h4>

      <div className='content'>
        <DefaultReactions />
      </div>

      <div className='content'>
        <CustomReactions />
      </div>
      <div className='content'>
        <CustomReactionsV2 />
      </div>
    </div>
  );
}
