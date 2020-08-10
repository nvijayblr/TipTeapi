import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const image = require('../assets/img/music-bg.jpg');

class HomePage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.appContainer}>
        <ImageBackground source={image} style={styles.backgroundImage}>
          {/* <Text>Welcome Bashkar, Music App!</Text> */}

          <FontAwesome
            name="play-circle"
            style={styles.playIcon}
            onPress={() => navigation.navigate('VideoPage')}
          />

          <View style={[styles.socialCircle, styles.userWrapper]}>
            <Text style={styles.userName}>B</Text>
          </View>

          <View style={[styles.socialCircle, styles.likesWrapper]}>
            <FontAwesome name="heart" style={styles.socialIcon} />
            <Text style={styles.socialCount}>12.2K</Text>
          </View>
          <View style={[styles.socialCircle, styles.commentsWrapper]}>
            <FontAwesome name="comments-o" style={styles.socialIcon} />
            <Text style={styles.socialCount}>100</Text>
          </View>

          <View style={[styles.socialCircle, styles.sharesWrapper]}>
            <FontAwesome name="dot-circle-o" style={[styles.socialIcon, styles.shareIcon]} />
            <Text style={styles.socialCount}>Share</Text>
          </View>
          <View style={styles.videoInfoWrapper}>
            <Text style={styles.videoInfo}>@Bhaskar</Text>
            <Text style={styles.videoInfo}>#funny, #relationshipt</Text>
            <Text style={styles.videoInfo}>#commedy, #ColorCustoizer</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default HomePage;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  socialCircle: {
    position: 'absolute',
    right: 20,
    bottom: 450,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(238, 238, 238, 0.32)',
  },
  userName: {
    textAlign: 'center',
    lineHeight: 80,
    fontSize: 32,
  },
  likesWrapper: {
    bottom: 350,
  },
  commentsWrapper: {
    bottom: 225,
  },
  sharesWrapper: {
    bottom: 100,
    backgroundColor: 'rgba(29, 189, 0, 0.72)',
  },
  socialCount: {
    fontSize: 18,
    position: 'relative',
    bottom: -4,
    textAlign: 'center',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.72)',
  },
  socialIcon: {
    textAlign: 'center',
    lineHeight: 80,
    fontSize: 42,
    color: 'rgba(0, 0, 0, 0.72)',
  },
  playIcon: {
    textAlign: 'center',
    lineHeight: 80,
    fontSize: 80,
    color: 'rgba(0, 0, 0, 0.42)',
  },
  shareIcon: {
    color: 'rgba(255, 255, 255, 0.62)',
  },
  videoInfoWrapper: {
    position: 'absolute',
    left: 40,
    bottom: 70,
  },
  videoInfo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 5,
  },
});
