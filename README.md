# rn-glitch-effect

# Welcome to Glitch Effect :wave: 

![glitch(1)](https://user-images.githubusercontent.com/49838612/108607576-f4dc3a80-739f-11eb-80bc-13863f83bdaf.gif) ![glitch-button](https://user-images.githubusercontent.com/49838612/108607413-14bf2e80-739f-11eb-80cd-916449e94b6d.gif)
![image-glitch](https://user-images.githubusercontent.com/49838612/108854996-3d297180-75c7-11eb-8db5-ed190c63aa41.gif)


## What is React native Glitch Effect?

- Is a simple way to glitch your text and images.

## Instalation

```javascript
  npm i rn-glitch-effect
```
# Properties - Glitch
| props  |  description  | default value    |                       |
| ------------------- | ------------------- | -------------------  | ------------------- |
|  text |  Your text label that's going to be displayed. | empty | <b>String</b>|
|  glitchHeight |  The height that you want your glitch effect will have. | 80 | <b>Integer</b>|
|  glitchAmplitude |  The amplitude of your glitch. In other words, how far your effect will be from the main text. | 5 | <b>Integer</b>|
|  glitchDuration |  The duration of your glitch effect. | 1500 | <b>Milisseconds</b>|
|  repeatDelay |  How long time your effect will wait, to start another turn of effect. | 2000 | <b>Milisseconds</b>|
|  shadowColor |  The shadow color of your effect. | #add8e6 | <b>rgb</b>|
|  textStyle |  The style that you want to give to your text. | {color: '#000000',fontWeight: 'bold',letterSpacing: 3,} | <b>Object</b>|
|  heightInputRange |  The input range to the interpolation of main animation. With this you can control each part of your effect height. | [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] | <b>array</b>|
|  positionYInputRange |  The input range to the interpolation of main animation. With this you can control each part of your effect position. | [0, 10, 20, 30, 60, 65, 70, 80, 90, 100] | <b>array</b>|
|  outOfTextRange |  Will make your effect get out of the range from your text | false | <b>Boolean</b>|
|  disableAutoAnimation |  enable or disabled your animation | false | <b>Boolean</b>|


# Properties - GlitchImage
| props  |  description  | default value    |                       |
| ------------------- | ------------------- | -------------------  | ------------------- |
|  glitchHeight |  The height that you want your glitch effect will have. | 200 | <b>Integer</b>|
|  glitchAmplitude |  The amplitude of your glitch. In other words, how far your effect will be from the main text. | 5 | <b>Integer</b>|
|  glitchDuration |  The duration of your glitch effect. | 1500 | <b>Milisseconds</b>|
|  repeatDelay |  How long time your effect will wait, to start another turn of effect. | 2000 | <b>Milisseconds</b>|
|  shadowColor |  The shadow color of your effect. | #add8e6 | <b>rgb</b>|
|  imageStyle |  The style that you want to give to your text. | {width: 400,height: 200} | <b>Object</b>|
|  heightInputRange |  The input range to the interpolation of main animation. With this you can control each part of your effect height. | [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110] | <b>array</b>|
|  positionYInputRange |  The input range to the interpolation of main animation. With this you can control each part of your effect position. | [0, 10, 20, 30, 60, 65, 70, 80, 90, 100] | <b>array</b>|
|  disableAutoAnimation |  enable or disabled your animation | false | <b>Boolean</b>|
|  source |  Your image path. | false | <b>String</b>|


# Usage

Basic Glitch
- You can use this with or without the View container
```javascript
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Glitch} from 'rn-glitch-effect';
const App = () => {

  return (
      <View style={styles.containerWithBg}>
        <Glitch
          text={'GLITCH'}
          mainColor={'black'}
          shadowColor={'green'}
        />
      </View>
  );
};
const styles = StyleSheet.create({
  containerWithBg: {backgroundColor: 'red', marginBottom: '5%'},
});
export default App;

```
Glitch with Button
- You can use this with a button wrapping your text and define if it will activate the glitch when clicked

```javascript
import React, {useRef} from 'react';
import {TouchableHighlight, StyleSheet} from 'react-native';
import {Glitch} from 'rn-glitch-effect';
const App = () => {
  const ref = useRef();
  return (
    <View style={[styles.container]}>
      <TouchableHighlight
        onPress={() => {
          ref.current.animate();
        }}
        style={[styles.containerWithBg]}>
        <Glitch
          text={'RESPONSIVE'}
          ref={ref}
          mainColor={'black'}
          shadowColor={'pink'}
          disableAutoAnimation={true}
        />
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  containerWithBg: {backgroundColor: 'red', marginBottom: '5%'},
});
export default App;

```

```javascript
  import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Glitch, GlitchImage} from 'rn-glitch-effect';
import Gator from './assets/images/gator.jpeg';
const App = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.containerWithBg}>
        <Glitch
          text={'GLITCH'}
          mainColor={'black'}
          shadowColor={'green'}
          outOfTextRange={false}
        />
        <GlitchImage shadowColor={'red'} mainColor={'black'} source={Gator} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerWithBg: {backgroundColor: 'red', marginBottom: '5%'},
  image: {
    width: 400,
    height: 200,
  },
});
export default App;

```

# End of the line :)

If you have any ideia to contribute with this project, please make your self home.



