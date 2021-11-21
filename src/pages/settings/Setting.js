import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar'

function Setting() {
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateAccount">Update your Account.</span>
                    <span className="settingDeleteAccount">Delete your Account.</span>
                </div>
                <form action="" className="settingForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingProfilePicture">
                        <img src="images/man1.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingProfilePictureIcon far fa-user-circle"></i>
                        </label> 
                        <input type="file" id="fileInput" style={{display:'none'}}/>
                    </div>
                    <label >Username</label>
                    <input type="text"placeholder="James AKojamsy" />
                    <label >Email</label>
                    <input type="email"placeholder="akojamsy@gmail.com" />
                    <label >Password</label>
                    <input type="password"placeholder="*********" />
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Setting
