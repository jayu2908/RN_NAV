import React from 'react';
import Svg, {Rect} from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const MenuIcon = (props: IconProps) => (
  <Svg
    viewBox="0 0 283.426 283.426"
    width={props.width || 24}
    height={props.height || 24}
    {...props}>
    <Rect x="0" y="40.84" width="283.426" height="47.735" fill="#0163d2" />
    <Rect x="0" y="117.282" width="283.426" height="47.735" fill="#0163d2" />
    <Rect x="0" y="194.851" width="283.426" height="47.735" fill="#0163d2" />
  </Svg>
);

export default MenuIcon;
