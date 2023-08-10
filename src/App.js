import LoginPage from "./LoginPage";
import { BrowserRouter as Router , Route, Switch , Navigate} from "react-router-dom";
import signUp from "./signUp";
import Dashboard from "./Homepage";
import CleaningRequestPage from "./CleaningRequestPage";
import RoomStatisticsPage from "./RoomStatisticsPage";
import FeedbackPage from "./FeedbackPage";
import Sidebar from "./Sidebar";

function App() {

  const isLoggedIn = "true";

  return (

  <Router>
    <Switch>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/signup" component={signUp}/>
      <Route exact path="/home" component={Dashboard}/>
      <Route exact path="/CleaningRequestPage" component={CleaningRequestPage}/>
      <Route exact path="/RoomStatisticsPage" component={RoomStatisticsPage}/>
      <Route exact path="/FeedbackPage" component={FeedbackPage}/>
      {/* <Route path="/" element={isLoggedIn ? <Homepage /> : <Navigate to="/login" />} /> */}
      <Route path="*" element={<div><h2>404 Page not found</h2></div>}/>
    </Switch>
  </Router>

  );
}


export default App;
