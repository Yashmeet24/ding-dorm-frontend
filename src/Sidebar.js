import { Link } from 'react-router-dom';

const Sidebar = (props) => {

    const handleSelect = (heading) => {
        props.setHeading(heading);
    }
    return ( 
        <div className="sidebar">
            {/* <input type="checkbox"/>
            <div className="toggle">
                <span className='top_line common'></span>
                <span className='middle_line common'></span>
                <span className='bottom_line common'></span>
            </div> */}
            <div className="slide">
                <div className="logo d-flex m-4">
                    <img className="logoimage rounded-4" src={require('./images/dingdormlogo-blue5.png')} alt="logo" />
                </div>
                <div className="Dashboard pages">
                    <img className="sidebaricons Dashboard-icon" src={require('./images/dashboard-solid-24.png')} alt="Dashboard icon" />
                    {/* <Link className="sidebarTitles Dashboard-title" to="/Dashboard" >Dashboard</Link> */}
                    <button className="sidebarTitles Dashboard-title" onClick={() => handleSelect('Dashboard')} >Dashboard</button>
                </div>
                <div className="CleaningRequest pages">
                    <img className="sidebaricons CleaningRequest-icon" src={require('./images/cleaningreq.png')} alt="CleaningRequest icon" />
                    <button className="sidebarTitles CleaningRequest-title" onClick={() => handleSelect('Request for cleaning')} > Request for Cleaning </button>
                </div>
                <div className="RoomStatistics pages">
                    <img className="sidebaricons RoomStatistics-icon" src={require('./images/roomstatus.png')} alt="RoomStatistics icon" />
                    <button className="sidebarTitles RoomStatistics-title" onClick={()=> handleSelect('Room Statistics')} >Room Statistics</button>
                </div>
                <div className="Feedback pages">
                    <img className="sidebaricons Feedback-icon" src={require('./images/feedback.png')} alt="Feedback icon" />
                    <button className="sidebarTitles Feedback-title" onClick={()=> handleSelect('Feedback')} >Feedback</button>
                </div>
                <div className="settings pages">
                    <img className="sidebaricons settings-icon" src={require('./images/setting.png')} alt="settings icon" />
                    <button className="sidebarTitles settings-title" onClick={()=> handleSelect('Settings')} >Settings</button>
                </div>
                <div className="Logout pages">
                    <img className="sidebaricons logout-icon" src={require('./images/exit.png')} alt="logout icon" />
                    <Link className="sidebarTitles logout-title" to="/login">Log out</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;