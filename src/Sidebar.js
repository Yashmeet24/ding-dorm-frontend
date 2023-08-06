import { Link } from 'react-router-dom';

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="Dashboard">
                <img className="Dashboard-icon" src={require('./images/dashboard-solid-24.png')} alt="Dashboard icon" />
                <h4><Link to="/Dashboard" className="Dashboard-title">Dashboard</Link></h4>
            </div>
            <div className="CleaningRequest">
                <img className="CleaningRequest-icon" src={require('./images/cleaningreq.png')} alt="CleaningRequest icon" />
                <h4><Link to="/CleaningRequestPage" className="CleaningRequest-title">Request for Cleaning</Link></h4>
            </div>
            <div className="RoomStatistics">
                <img className="RoomStatistics-icon" src={require('./images/roomstatus.png')} alt="RoomStatistics icon" />
                <h4><Link to="/RoomStatisticsPage" className="RoomStatistics-title">Room Statistics</Link></h4>
            </div>
            <div className="Feedback">
                <img className="Feedback-icon" src={require('./images/feedback.png')} alt="Feedback icon" />
                <h4><Link to="/FeedbackPage" className="Feedback-title">Feedback</Link></h4>
            </div>
        </div>
     );
}
 
export default Sidebar;