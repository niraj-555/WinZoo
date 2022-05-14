import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {teamHandler} from './handler';
import TeamDetail from './TeamDetail';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const {league} = route.params;

  useEffect(() => {
    teamHandler(league.idLeague, setTeams, setLoading);
  }, []);

  return (
    <View style={styles.mainContainer}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={teams}
          renderItem={({item}) => <TeamDetail team={item} />}
        />
      )}
    </View>
  );
};

export default Teams;

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
  },
});
