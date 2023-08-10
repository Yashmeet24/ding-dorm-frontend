import Sidebar from "./Sidebar";
import Navbar  from "./Navbar";
import * as React from 'react';
import Dashboard from "./Dashboard";
const Homepage = () => {

    const [heading, setHeading] = React.useState('Dashboard');

    return ( 
        <div className="homepage">
            <Sidebar setHeading={setHeading} heading={heading}/>
            <Navbar heading={heading}/>
            <Dashboard/>
        </div>
     );
}
 
export default Homepage;