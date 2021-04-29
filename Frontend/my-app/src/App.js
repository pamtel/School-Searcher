import './App.css';
import SignIn from './SignIn';
import { Switch, Route } from "react-router-dom";
import Register from './Register';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <SignIn />
        </Route>
        
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
