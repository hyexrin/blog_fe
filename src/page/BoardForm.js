import React, { useState } from 'react'
import axios from 'axios';

const BoardForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBoard = {
      title, content,
    };

    onSave(newBoard);

    setTitle('');
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title: </label>
        <input type='text' id='title' value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor='content'>Content: </label>
        <input type='text' id='content' value={content} onChange={handleContentChange} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default BoardForm