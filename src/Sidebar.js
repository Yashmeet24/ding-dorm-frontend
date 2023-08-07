import { Link } from 'react-router-dom';

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <input type="checkbox"/>
            <div className="toggle">
                <span className='top_line common'></span>
                <span className='middle_line common'></span>
                <span className='bottom_line common'></span>
            </div>
            <div className="slide">
                <div className="logo d-flex m-4">
                    <img className="logoimage rounded-4" src={require('./images/dingdormlogo-blue5.png')} alt="logo" />
                </div>
                <div className="Dashboard">
                    <img className="sidebaricons Dashboard-icon" src={require('./images/dashboard-solid-24.png')} alt="Dashboard icon" />
                    <Link className="sidebarTitles Dashboard-title" to="/Dashboard" >Dashboard</Link>
                </div>
                <div className="CleaningRequest">
                    <img className="sidebaricons CleaningRequest-icon" src={require('./images/cleaningreq.png')} alt="CleaningRequest icon" />
                    <Link className="sidebarTitles CleaningRequest-title" to="/CleaningRequestPage" >Request for Cleaning</Link>
                </div>
                <div className="RoomStatistics">
                    <img className="sidebaricons RoomStatistics-icon" src={require('./images/roomstatus.png')} alt="RoomStatistics icon" />
                    <Link className="sidebarTitles RoomStatistics-title" to="/RoomStatisticsPage" >Room Statistics</Link>
                </div>
                <div className="Feedback">
                    <img className="sidebaricons Feedback-icon" src={require('./images/feedback.png')} alt="Feedback icon" />
                    <Link className="sidebarTitles Feedback-title" to="/FeedbackPage" >Feedback</Link>
                </div>
                <div className="settings">
                    <img className="sidebaricons settings-icon" src={require('./images/setting.png')} alt="settings icon" />
                    <Link className="sidebarTitles settings-title" to="/settingsPage" >Settings</Link>
                </div>
                <div className="Logout">
                    <img className="sidebaricons logout-icon" src={require('./images/exit.png')} alt="logout icon" />
                    <Link className="sidebarTitles logout-title" to="/logoutPage" >Log out</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;