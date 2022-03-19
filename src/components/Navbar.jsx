	import React  ,{ useState } from 'react'

	export const Navbar = ({setSearch}) => {

		const [value , setValue] = useState('')

		function onSearch(){
			if(!value.trim()) return
			setSearch(value)
			setValue('')
		}

		return (
			<div className="navbar bg-base-300">
		<div className="flex-1">
			<a className="btn btn-ghost normal-case text-xl">KinoDB</a>
		</div>
		<button onClick={() => setSearch('')} className='btn btn-ghost'>All</button>
		<div className="flex-none gap-2">
			<div className="form-control">
				<input value={value} onChange={event => setValue(event.target.value)} type="text" placeholder="Search" className="input input-bordered"/>
			</div>
			<button onClick={() => onSearch()} className='btn btn-primary'>Search</button>
		</div>
	</div>
		)
	}
