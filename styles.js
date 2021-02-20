import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  leftCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightColor: 'transparent',
    transform: [{rotate: '90deg'}],
  },
  rightSide: {
    borderRightWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightSideCover: {
    borderTopWidth: 2,
  },
  leftSideCover: {
    borderLeftWidth: 2,
  },
  coverContainer: {
    position: 'absolute',
    overflow: 'hidden',
    height: 0,
    zIndex: 1,
  },
  text: {
    color: '#000000',
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  glitchText: {
    textShadowOffset: {width: 3, height: 2},
    textShadowRadius: 1,
  },
});
