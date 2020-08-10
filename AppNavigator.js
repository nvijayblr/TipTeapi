import { createStackNavigator } from 'react-navigation';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const AppNavigator = createStackNavigator({
  LoginPage: { screen: LoginPage },
  SignupPage: { screen: SignupPage },
});
