import './topbar.css';

function Topbar() {
    return (
        <div className="topbar">
            <div className="topLeft">
                <i class=" topLeftIcon fab fa-facebook"></i>
                <i class=" topLeftIcon fab fa-linkedin-in"></i>
                <i class=" topLeftIcon fab fa-twitter"></i>
            </div>
            <div className="topCenter">
                <ul className ="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Logout</li>
                </ul>
            </div>
            <div className="topRight">
                <img src="images/man1.jpg" alt="profileImage" className="topImage"/>
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar
