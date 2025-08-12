
import './global.css';
import Routes from 'routes/index ';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from 'components/Screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <Routes />
    </>
  );
}


