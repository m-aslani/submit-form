import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import {Route , Switch , Redirect} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginForm}/>
        <Route path="/signup" component={SignUpForm}/>
        <Redirect from='/' to="/signup"/>
      </Switch>
    </div>
  );
}

export default App;
