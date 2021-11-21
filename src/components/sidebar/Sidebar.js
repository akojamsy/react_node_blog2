import './sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="images/man2.jpg" alt="aboutMePicture" className="sidebarImage" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae nam voluptatibus voluptas autem, non at doloremque rem impedit. Dolores, repellendus.
            </p>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW Us</span>
                <div className="sidebarSocial">
                    <i class=" sidebarLeftIcon fab fa-facebook"></i>
                    <i class=" sidebarLeftIcon fab fa-linkedin-in"></i>
                    <i class=" sidebarLeftIcon fab fa-twitter"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
