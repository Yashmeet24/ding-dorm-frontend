import Sidebar from "./Sidebar";
import Navbar  from "./Navbar";
import * as React from 'react';
const Home = () => {

    const [heading, setHeading] = React.useState('Dashboard');

    return ( 
        <div className="home">
            <Sidebar setHeading={setHeading}/>
            <Navbar heading={heading}/>
        </div>
     );
}
 
export default Home;