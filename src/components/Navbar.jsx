	import React from 'react'

	export const Navbar = () => {
		return (
			<div className="navbar bg-base-300">
		<div className="flex-1">
			<a className="btn btn-ghost normal-case text-xl">KinoDB</a>
		</div>
		<div className="flex-none gap-2">
			<div className="form-control">
				<input type="text" placeholder="Search" className="input input-bordered"/>
			</div>
			<button className='btn btn-primary'>Search</button>
		</div>
	</div>
		)
	}
