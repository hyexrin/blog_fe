import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './page/Main';
import { useEffect, useState } from 'react';

function App() {
  
  const [test, setTest] = useState("");
  useEffect(() => {
    fetch("/api")
      .then(res => res.text())
      .then(m => setTest(m))
  }, [])
  console.log("spring boot 연결 성공 >> " + test);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
