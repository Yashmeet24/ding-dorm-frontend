const homePage = () => {
    return ( 

        <div className="homepage">
            <div className="sidebar ">
                <Sidebar/>
            </div>
            <div className="homemain">
                {dashboard && <div className="dashboardmain">{dashboard}</div>}
                {cleaaningreq && <div className="cleaaningreqmain">{cleaaningrequest}</div>}
                {feedback && <div className="feedbackmain">{feedback}</div>}
                {roomstatus && <div className="roomstatusmain">{roomstatistics}</div>}
            </div>
        </div>
     );
}
 
export default homePage;