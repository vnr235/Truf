import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Home/Homepage";
import Login from './Components/Login/Login';
import PersonalInfo from './Components/SignUp/PersonalInfo';
import Header from "./Components/Header/Header";
import Mybokkings from './Components/MyBokkings/Mybokkings'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />  
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<PersonalInfo />}>
          <Route path="contactinfo" element={<PersonalInfo.ContactInfoPage />} />
        </Route>
        <Route path="/mybookings" element={<Mybokkings />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
