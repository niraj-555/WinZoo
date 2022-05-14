import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

const SportDetails = () => {
  const route = useRoute();
  const sport = route.params.sport;

  console.log('sportdetail', sport);
  return (
    <ScrollView>
      <Image
        source={{uri: sport.strSportThumb}}
        style={styles.thumbNailContainer}
      />
      <Text style={styles.sportName}>{sport.strSport}</Text>
      <Text
        style={{
          fontSize: 16,
          width: '95%',
          textAlign: 'center',
          alignSelf: 'center',
        }}>
        {sport.strSportDescription}
      </Text>
    </ScrollView>
  );
};

export default SportDetails;

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbNailContainer: {
    width: '100%',
    height: 200,
  },
  sportName: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700',
    marginVertical: 15,
    paddingVertical: 15,
    color: '#0AA1DD',
  },
});
