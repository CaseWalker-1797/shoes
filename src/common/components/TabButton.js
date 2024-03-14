import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {tabbarOptions} from '../constants/Constants';
import {Icon} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {primaryColor} from '../utilities/Colors';
import {Drawables} from '../utilities/Drawable';

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const animate1 = {
    0: {scale: 0.5, translateY: 7},
    0.92: {translateY: -34},
    1: {scale: 1.2, translateY: -24},
  };
  const animate2 = {
    0: {scale: 1.2, translateY: -24},
    1: {scale: 1, translateY: 7},
  };

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
    } else {
      viewRef.current.animate(animate2);
    }
  }, [focused]);
  return (
    <TouchableOpacity
      className="flex-1 justify-center items-center p-2 rounded-full "
      onPress={onPress}
    >
      <Animatable.View
        className="h-12 w-12 justify-center items-center rounded-full  shadow-2xl"
        ref={viewRef}
        animation="bounceInUp"
        style={[
          focused ? styles.container : '',
          // {backgroundColor: focused ? primaryColor : 'white'},
        ]}
      >
        <Icon source={item.icon} size={24} color={focused ? 'white' : 'grey'} />
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    shadowColor: primaryColor,
    shadowOffset: {
      width: 5,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.65,
    elevation: 9,
  },
});
