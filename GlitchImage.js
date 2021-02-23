import React, {useRef, useEffect, useImperativeHandle, forwardRef} from 'react';
import {View, Animated, Image, Platform} from 'react-native';
import {styles} from './styles';
const SHADOW_COLOR = '#add8e6';
const MAIN_COLOR = '#144f66';
const ANIMATION_DURATION = 3000;
const GLITCH_AMPLITUDE = 10;
const REPEAT_DELAY = 1000;
const GlitchImage = (
  {
    glitchHeight = 200,
    glitchAmplitude = GLITCH_AMPLITUDE,
    glitchDuration = ANIMATION_DURATION,
    repeatDelay = REPEAT_DELAY,
    shadowColor = SHADOW_COLOR,
    mainColor = MAIN_COLOR,
    heightInputRange = [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
    positionYInputRange = [0, 10, 20, 30, 60, 65, 70, 80, 90, 100],
    disableAutoAnimation = false,
    source = null,
    imageStyle,
  },
  ref,
) => {
  console.log(shadowColor);
  console.log(mainColor);
  console.log(source);
  const mainAnimatedValue = useRef(new Animated.Value(0)).current;
  const animatedX = useRef(new Animated.Value(0)).current;

  const runAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.spring(animatedX, {
          toValue: -glitchAmplitude,
          useNativeDriver: false,
          speed: 1000,
          bounciness: 1000,
        }),
        Animated.spring(animatedX, {
          toValue: glitchAmplitude,
          useNativeDriver: false,
          speed: 1000,
          bounciness: 1000,
        }),
      ]),
    ).start();

    Animated.timing(mainAnimatedValue, {
      toValue: 100,
      duration: glitchDuration,
      useNativeDriver: false,
    }).start(() => {
      mainAnimatedValue.setValue(0);
      if (!disableAutoAnimation) {
        setTimeout(() => runAnimation(), repeatDelay);
      }
    });
  };

  useEffect(() => {
    if (!disableAutoAnimation) {
      runAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useImperativeHandle(ref, () => ({
    animate: runAnimation,
  }));

  const height = mainAnimatedValue.interpolate({
    inputRange: heightInputRange,
    outputRange: [
      0.01,
      glitchHeight / 8,
      glitchHeight / 8,
      glitchHeight / 2.5,
      glitchHeight / 2.5,
      glitchHeight / 2.5,
      glitchHeight / 5.5,
      glitchHeight / 4,
      glitchHeight / 10,
      glitchHeight / 8,
      glitchHeight / 4,
    ],
  });

  const positionY = mainAnimatedValue.interpolate({
    inputRange: positionYInputRange,
    outputRange: [
      glitchHeight / 2.5,
      glitchHeight / 2,
      glitchHeight / 4,
      glitchHeight / 1.3,
      glitchHeight / 1.3,
      glitchHeight / 8,
      glitchHeight / 16,
      0,
      0,
      glitchHeight / 4,
    ],
  });
  function renderImage(isCover = false) {
    return (
      <View
        style={[
          {backgroundColor: mainColor},
          isCover ? [styles.glitchImage, {shadowColor: shadowColor}] : null,
        ]}>
        <Image source={source} style={[styles.image, imageStyle]} />
      </View>
    );
  }
  return (
    <View style={[styles.row]}>
      {renderImage()}
      <Animated.View
        style={[
          styles.row,
          styles.coverContainer,
          {height},
          {transform: [{translateX: animatedX}, {translateY: positionY}]},
        ]}>
        <Animated.View
          style={[
            styles.row,
            {
              transform: [
                {
                  translateY: Animated.multiply(positionY, -1),
                },
              ],
              height: glitchHeight,
            },
          ]}>
          {renderImage(true)}
        </Animated.View>
      </Animated.View>
    </View>
  );
};
export default forwardRef(GlitchImage);
