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
                <button className={props.heading==='Dashboard' ? "sidebarTitles activePage" : "sidebarTitles"} onClick={() => handleSelect('Dashboard')} ><img className="sidebaricons Dashboard-icon" src={require('./images/dashboard-solid-24.png')} alt="Dashboard icon" />
                   Dashboard</button>
                </div>
                <div className="CleaningRequest pages">
                <button className={props.heading==='Request for cleaning' ? "sidebarTitles activePage" : "sidebarTitles"} onClick={() => handleSelect('Request for cleaning')} ><img className="sidebaricons CleaningRequest-icon" src={require('./images/cleaningreq.png')} alt="CleaningRequest icon" />
                     Request for Cleaning </button>
                </div>
                <div className="RoomStatistics pages">
                <button className={props.heading==='Room Statistics' ? "sidebarTitles activePage" : "sidebarTitles"} onClick={()=> handleSelect('Room Statistics')} ><img className="sidebaricons RoomStatistics-icon" src={require('./images/roomstatus.png')} alt="RoomStatistics icon" />
                    Room Statistics</button>
                </div>
                <div className="Feedback pages">
                <button className={props.heading==='Feedback' ? "sidebarTitles activePage" : "sidebarTitles"} onClick={()=> handleSelect('Feedback')} ><img className="sidebaricons Feedback-icon" src={require('./images/feedback.png')} alt="Feedback icon" />
                    Feedback</button>
                </div>
                <div className='bottomButtons'>
                <div className="settings pages">
                <button className={props.heading==='Settings' ? "sidebarTitles activePage" : "sidebarTitles"} onClick={()=> handleSelect('Settings')} ><img className="sidebaricons settings-icon" src={require('./images/setting.png')} alt="settings icon" />
                    Settings</button>
                </div>
                <div className="logout pages">
                <button className="sidebarTitles settings-title" onClick={()=> console.log('logout')} ><img className="sidebaricons settings-icon" src={require('./images/exit.png')} alt="logout icon" />
                    Log out</button>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;