import React from 'react';
import './App.scss';
import { AddQuestion } from './components/AddQuestion/AddQuestion';
import { NewExam } from './components/NewExam/NewExam';

const ws = new WebSocket('wss://front-test-sockets.herokuapp.com');

const App: React.FC = () => {
console.log(ws);

  return (
    <div className="App">
      <NewExam />
      <br />
      <AddQuestion />
    </div>
  );
}

export default App;
