import React from 'react'
import { useState } from 'react'
import { updateData } from '../requests/requests';

const NewPost = ({ history }) => {
	const [postInput, setPostInput] = useState('');
	const [error, setError] = useState('');

	const handleInputChange = (e) => {
		const { value } = e.target;
		setPostInput(value);
	}

	const handleAddNewPost = () => {
		if (postInput.length) {
			const id = 0
			onPostAdd(postInput, id);
		}
	}

	const onPostAdd = (post, newId) => {
		const data = {
			content: post,
			id: newId,
		}

		updateData('http://localhost:7777/posts', 'POST', data)
			.then(() => history.push('/'))
			.catch(err => setError(err.message));
	}

	const handleCancelAddNewPost = () => {
		history.push('/');
	}

	return (
		<div>
			<p>New Post</p>
			<input 
				type="text"
				value={postInput}
				name='postInput'
				onChange={handleInputChange}
			/>
			<button onClick={handleAddNewPost} disabled={!postInput.length}>Publish</button>
			<button onClick={handleCancelAddNewPost}>Cancel</button>
			{!!error.length && <p>{error}</p>}
		</div>
	)
}

export default NewPost
