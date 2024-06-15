import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import LoginPage from './components/LoginPage';
import ResetPassword from './components/ResetPassword';
import SignUp from './components/SignUp';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <BrowserRouter >
      <Switch>
        <ProtectedRoute exact path='/' component={CharacterList}/>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/resetPassword' component={ResetPassword}/>
        <Route exact path='/signUp' component={SignUp}/>
        <Route exact path='/characterDetails' component={CharacterDetails}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
