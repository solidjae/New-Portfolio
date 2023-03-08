const Navbar = (props) => {

    return (
        <>
            <nav className="navbar navbar-dark sticky-top p-3 navbar">
                <Link className=" text-decoration-none" to='/' >
                    <h3 className="navbar-brand mx-3 "><i className="fa-solid fa-cloud-sun-rain logo "></i></h3>
                </Link>

                <div>
                    <ul className="nav navbar-nav navbar-right text-white mx-3">
                        <Link className=" text-decoration-none dash" to='/mydashboard'><li>My Dashboard</li></Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;