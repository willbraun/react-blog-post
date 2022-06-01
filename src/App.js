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
      	<div className='project'>
		  <h1>React Blog Post</h1>
		  <p>The Save button sets the state of the App component to the text in the title and body.</p>
		  <BlogForm updateState={updateState} />
		</div>
    );
}

export default App;
