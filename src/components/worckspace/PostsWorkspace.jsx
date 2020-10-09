import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import NewPost from '../NewPost'
import PostCard from '../PostCard'

const PostsWorkspace = ({match}) => {
	return (
		<Switch>
			<Redirect from={`${match.url}`} exact to={`${match.url}/new`} />
			<Route path={`${match.url}/new`} render={({ history }) => <NewPost history={history} /> }/>
			<Route path={`${match.url}/:id`} render={() => <PostCard />} />
		</Switch>
	)
}

export default PostsWorkspace
