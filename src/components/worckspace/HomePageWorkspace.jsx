import React, { useState, useEffect } from 'react'
import { getData } from '../../requests/requests';
import AddButton from '../AddButton';
import Post from '../Post';
import Workspace from './Workspace';

const HomePageWorkspace = () => {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		getData('http://localhost:7777/posts')
			.then(resp => setPosts([...resp]))
			.catch(err => setError(err.message));
		return () => {
			setPosts([]);
		}
	}, []);

	return (
		<Workspace renderAside={() => <AddButton />}>
			<div>
				{posts.length !== 0 ? 
					posts.map(post => <Post key={post.id} {...post} />) : 
					<p>No posts is here. Click Add button to add new one</p>
				}
				{ error && <p>{error}</p> }
			</div>
		</Workspace>
	)
}

export default HomePageWorkspace;
