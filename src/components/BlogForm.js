import { useState } from 'react';

const BlogForm = ({updateState}) => {
    const [newState, setNewState] = useState({
        title: '',
        body: '',
    })

    const submitForm = (e) => {
		e.preventDefault();
		updateState(newState);
    }
    
    return (
        <form onSubmit={(e) => submitForm(e)}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={newState.title} onChange={(e) => setNewState({...newState, title: e.target.value})}/>

            <label htmlFor="body">Body</label>
            <input type="text" id="body" value={newState.body} onChange={(e) => setNewState({...newState, body: e.target.value})}/>

            <button type="submit">Submit</button>
        </form>

    )
}

export default BlogForm;