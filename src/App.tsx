import React from 'react';
import './App.scss';
import { AddQuestion } from './components/AddQuestion/AddQuestion';
import { NewExam } from './components/NewExam/NewExam';

const App: React.FC = () => {
  return (
    <div className="App">
      <NewExam />
      <br />
      <AddQuestion />
    </div>
  );
}

export default App;
