import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ActivityIndicator,
  Image,
  View,
  Text,
  ScrollView,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';
import {sportsList} from './handler';

const Sports = () => {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    sportsList(setSports, setLoading);
  }, []);

  return (
    <View style={styles.mainContainer}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={sports}
          renderItem={({item}) => (
            <Pressable
              onPress={() =>
                navigation.navigate('SportDetails', {sport: item})
              }>
              <View key={`${item.idSport}`} style={styles.innerContainer}>
                <Text style={styles.sportName}>{item.strSport}</Text>
                <Image
                  source={{uri: item.strSportThumb}}
                  style={{width: 30, height: 30}}
                />
              </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
};

export default Sports;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 5,
  },
  sportName: {
    // backgroundColor: 'grey',
    width: '50%',
    fontSize: 17,

    color: '#0AA1DD',
  },
});
