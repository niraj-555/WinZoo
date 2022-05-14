import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, ScrollView, Image} from 'react-native';

const Splash = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={{
          uri: 'https://www.hdwallpapersfreedownload.com/uploads/large/ipl/ipl-t20-2018-trophy-cup-hd-wallpaper.jpg',
        }}
      />
    </View>
  );
};

export default Splash;
