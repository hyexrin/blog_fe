import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './page/Main';
import BoardForm from './page/BoardForm';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [test, setTest] = useState("");
  useEffect(() => {
    fetch("/api")
      .then(res => res.text())
      .then(m => setTest(m))
  }, [])
  console.log("spring boot 연결 성공 >> " + test);

  const [boards, setBoards] = useState([]);

  const handleSaveBoard = async (newBoard) => {
    try {
      const response = await axios.post('/api/boards/save', newBoard);

      const savedBoard = response.data;

      const updatedPosts = [...boards, savedBoard];
      setBoards(updatedPosts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<BoardForm onSave={handleSaveBoard} />} />
      </Routes>
    </div>
  );
}

export default App;
