const BlogForm = () => {
    
    return (
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" id="title"/>

            <label htmlFor="body">Body</label>
            <input type="text" id="body"/>

            <button type="submit">Submit</button>
        </form>

    )
}

export default BlogForm;