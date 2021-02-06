import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Notifications from 'react-notify-toast';
import LoginScreen from './screens/auth/login/LoginScreen';
import ForgotPassword from './screens/auth/ForgotPassword/ForgotPassword';
import Dashboard from './common/Dashboard/Dashboard';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Notifications>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/login/:screenType" component={ForgotPassword} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </Notifications>
    </Provider>
  );
}

export default App;
