import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';

import Tabs from './src/navigator/appNavigator';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 2500);
  }, []);

  const getStack = () => {
    if (isAuthenticated) return <Tabs />;
    else return <Splash />;
  };

  return <NavigationContainer>{getStack()}</NavigationContainer>;
};

export default App;
