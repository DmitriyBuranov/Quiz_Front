import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./Components/NavBar"
import StartNewRound from "./Components/StartNewRound"
import QuestionContainer from "./Components/QuestionContainer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//API where we going to get questions and save
const QuizAPI_URL = 'https://localhost:6001/api/v1'


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
        <Switch>
          <Route path="/StartNewRound" component={StartNewRound}>
              <StartNewRound />
          </Route>
          <Route path="/QuestionContainer" component={QuestionContainer}>
            <QuestionContainer />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}


export default App;
