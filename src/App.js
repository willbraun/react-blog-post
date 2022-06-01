import { useState } from 'react';
import BlogForm from './components/BlogForm.js'
import './App.css';

function App() {
    const [state, setState] = useState({
        title: '',
        body: '',
    });

	const updateState = newState => {
		setState(newState);
	}
  
    return (
      	<BlogForm updateState={updateState} />
    );
}

export default App;
