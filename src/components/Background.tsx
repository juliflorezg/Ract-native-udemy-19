import React from 'react';
import {View, Text, Dimensions} from 'react-native';

// import {withAnchorPoint} from 'react-native-anchor-point';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const Background = () => {
  // const getTransform = () => {
  //   let transform = {
  //     transform: [{rotate: '-20deg'}],
  //   };
  //   return withAnchorPoint(
  //     transform,
  //     {x: 0.5, y: 0.5},
  //     {width: screenWidth, height: screenHeight},
  //   );
  // };
  return (
    // <Animated.View style={[getTransform(), {backgroundColor: 'blue'}]} />
    <View
      style={
        {
          position: 'absolute',
          backgroundColor: '#5856d6',
          width: 1000,
          height: 1200,
          top: -300,
          transform: [
            // {translateX: screenWidth / 2},
            // {translateY: screenHeight / 2},
            {rotate: '-70deg'},
            // {translateX: -(screenWidth / 2)},
            // {translateY: -(screenHeight / 2)},
            //   {translateX: 30},
            //   {translateY: 30},
          ],
        }
        // getTransform(),
      }
    />
  );
};
