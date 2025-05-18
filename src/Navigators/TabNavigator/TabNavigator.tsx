import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from '../StackNavigator/StackNavigator';
import HomeIcon from '../../Icons/HomeIcon';
import SettingsIcon from '../../Icons/SettingsIcon';
import {RootStackParamList} from '../../../global.interface';

const TabNavigator = () => {
  const TabNav = createBottomTabNavigator<RootStackParamList>();
  return (
    <TabNav.Navigator screenOptions={{headerShown: false}}>
      <TabNav.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon
              width={24}
              height={24}
              color={focused ? '#0163d2' : '#ccc'}
            />
          ),
        }}
        name="Home"
        component={StackNavigator}
      />
      <TabNav.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <SettingsIcon
              width={24}
              height={24}
              color={focused ? '#0163d2' : '#ccc'}
            />
          ),
        }}
        name="Settings"
        component={StackNavigator}
      />
    </TabNav.Navigator>
  );
};

export default TabNavigator;
