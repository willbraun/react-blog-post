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
            <textarea type="text" id="body" onChange={(e) => setNewState({...newState, body: e.target.value})}>{newState.body}</textarea>

            <button type="submit">Save</button>
        </form>

    )
}

export default BlogForm;