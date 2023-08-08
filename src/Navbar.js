const Navbar = (props) => {
    return ( 
        <div className="navbar">
           <div className="header"> <span>{props.heading}</span>   </div>
        </div>
     );
}
 
export default Navbar;