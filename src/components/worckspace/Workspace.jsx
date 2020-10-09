import React from 'react'

const Workspace = ({
	renderAside,
	children,
}) => {
	return (
		<React.Fragment >
			<div>
				{renderAside()}
			</div>
			{children}
		</React.Fragment>
	)
}

export default Workspace
