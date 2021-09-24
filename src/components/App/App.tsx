import React from 'react';
import data from 'data/goods-api.json';
import { Heading } from 'components/Heading';
import { Blocks } from 'components/Blocks';
import s from './app.module.scss';
import Context from '../../context';

function App() {
  return (
    <div className="App">

      <Context.Provider value={{
        data,
      }}
      >
        <div className={s.container}>
          <Heading />
          <Blocks />
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
