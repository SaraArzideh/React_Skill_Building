import {Link} from 'react-router-dom'

const Navbar = (props) => {

	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<p className="navbar-brand" style={{marginLeft:10}}>Shopping App</p>
			<ul className="navbar-nav">
				<li className="nav-item" style={{marginLeft:10}}>
					<Link className="nav-link" to="/">Shopping List</Link>
				</li>
				<li className="nav-item" style={{marginLeft:10}}>
					<Link className="nav-link" to="/form">Add new item</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;