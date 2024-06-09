import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WTscreens from './Wtscreens';
import Calculate from './Calc';

const Stack = createStackNavigator();

const Routes = ()=> {
    return (
      <Stack.Navigator
          initialRouteName='Walk'
          screenOptions={{ headerShown: false }}
          >
        <Stack.Screen name="Walk" component={WTscreens} />
        <Stack.Screen name="Calc" component={Calculate} />

        </Stack.Navigator>
  );
}

export default Routes;