import './App.css';
import { Route, Routes } from 'react-router';
import Greeting from './Greeting';

function App() {
  return (
    <main>
      <Routes>
          <Route path="/" element={<Greeting />} />
      </Routes>
    </main>
  );
}

export default App;
