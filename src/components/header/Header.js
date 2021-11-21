import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">React & Node</span>
                <span className="headerTitleLarge">AkoBlog</span>
            </div>
            <img src="images/vacation1.jpg" alt="Banner" className="headerImage" />
        </div>
    )
}

export default Header
