import React, {useState, useEffect} from 'react';
import {leagueHandler} from './handler';
import {
  ActivityIndicator,
  View,
  Text,
  ScrollView,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Leagues = () => {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    leagueHandler(setLeagues, setLoading);
  }, []);

  return (
    <View style={styles.mainContainer}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={leagues}
          renderItem={({item}) => (
            <Pressable
              style={styles.innerContainer}
              onPress={() => navigation.navigate('Teams', {league: item})}>
              <View style={styles.leagueName}>
                <Text key={`${item.idLeague}`} style={{color: '#0AA1DD'}}>
                  {item.strLeague}/{item.strLeagueAlternate}
                </Text>
              </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
};

export default Leagues;

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  leagueName: {
    width: '90%',
    marginBottom: 5,
    marginTop: 5,
    fontSize: 3,
  },
});
