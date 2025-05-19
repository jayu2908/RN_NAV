This project implements a comprehensive navigation structure in React Native using the React Navigation library.
Navigation Structure
The navigation hierarchy in this application follows this structure:
Drawer Navigation
│
├── Tab Navigation 1
│   └── Stack Navigation
│
└── Tab Navigation 2
    └── Stack Navigation
Libraries Used

Core Navigation: @react-navigation/native </br>
Drawer Navigation: @react-navigation/drawer </br>
Bottom Tabs: @react-navigation/bottom-tabs </br>
Stack Navigation: @react-navigation/native-stack </br>
Animations: react-native-reanimated </br>

**Animation Implementation**

For Drawer Navigation animations, we leverage React Native Reanimated. The Reanimated View is wrapped around the Stack Navigator in the Animated Layout Component to provide smooth transitions and animations.

**TypeScript Integration**

The navigation interface is defined in global.interface.ts which contains the RootStackParamList type. This ensures type safety when navigating between screens.
