import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../global.interface';
import Home from '../../Screens/Home/Home';
import Settings from '../../Screens/Settings/Settings';
import AnimatedLayout from '../../Components/AnimatedLayout/AnimatedLayout';
import {useSharedValue} from 'react-native-reanimated';
import {useState} from 'react';
import Header from '../../Components/Header/Header';
import Details from '../../Screens/Details/Details';
import Profile from '../../Screens/Profile/Profile';
import Contact from '../../Screens/Contact/Contact';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const active = useSharedValue(false);
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    if (isDrawerVisible && active.value) {
      setTimeout(() => {
        setDrawerVisible(false);
      }, 500);
      active.value = false;
    } else {
      setDrawerVisible(true);
      active.value = true;
    }
  };

  return (
    <AnimatedLayout
      isDrawerVisible={isDrawerVisible}
      active={active}
      toggleDrawer={toggleDrawer}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: () => <Header toggleDrawer={toggleDrawer} />,
          }}
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </AnimatedLayout>
  );
};

export default StackNavigator;
