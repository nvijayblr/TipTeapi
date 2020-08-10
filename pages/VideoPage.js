import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Video from 'react-native-video';

const videoUrl =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

class VideoPage extends Component {
  render() {
    return (
      <View style={styles.videoContainer}>
        <Video
          source={require('../assets/videos/video01.mp4')}
          // source={{
          //   uri: videoUrl,
          // }}
          ref={(ref) => {
            this.player = ref;
          }}
          resizeMode={'cover'}
          style={styles.videoBackgroundVideo}
        >
          <Text>TEsting...</Text>
        </Video>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  videoBackgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '100%',
  },
});

export default VideoPage;
