import { useState } from 'react';
import BlogForm from './components/BlogForm.js'
import './App.css';

function App() {
    const [state, setState] = useState({
        title: '',
        body: '',
    });
  
    return (
      <BlogForm />
    );
}

export default App;
