import {createDrawerNavigator} from '@react-navigation/drawer';
import {RootStackParamList} from '../../../global.interface';

import TabNavigator from '../TabNavigator/TabNavigator';

const DrawerNavigator = () => {
  const DrawerNav = createDrawerNavigator<RootStackParamList>();
  return (
    <DrawerNav.Navigator screenOptions={{headerShown: false}}>
      <DrawerNav.Screen name="Home" component={TabNavigator} />
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigator;
