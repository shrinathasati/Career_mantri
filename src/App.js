import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Feedback from "./components/Feedback";
import Opportunity from "./components/Opportunity";
import OpportunityList from "./components/OpportunityList";

function App() {
  return (
    <div className="">
      <Router>
          <Nav />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/opportunityList" element={<OpportunityList />} />
          </Routes>

      </Router>
    </div>
  );
}

export default App;
