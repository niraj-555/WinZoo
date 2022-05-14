import React from 'react';
import {View, Text, Image, Pressable, Linking, StyleSheet} from 'react-native';

const TeamDetail = ({team}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={{width: '60%', fontSize: 17, color: 'white'}}>
          {team.strTeam}
        </Text>
        <Image
          source={{uri: team.strTeamLogo}}
          style={{height: 25, width: 25}}
        />
      </View>
      <Text style={styles.description}>{team.strDescriptionEN}</Text>
      <Pressable onPress={() => Linking.openURL(`https://${team.strWebsite}`)}>
        <Text style={{marginVertical: 5, color: '#0AA1DD', fontSize: 15}}>
          {team.strWebsite}
        </Text>
      </Pressable>
      <View style={styles.socialMedia}>
        <Pressable
          onPress={() => Linking.openURL(`https://${team.strFacebook}`)}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
            }}
            style={{height: 25, width: 25}}
          />
        </Pressable>
        <Pressable
          onPress={() => Linking.openURL(`https://${team.strInstagram}`)}>
          <Image
            source={{
              uri: 'https://logodix.com/logo/14589.png',
            }}
            style={{height: 25, width: 25}}
          />
        </Pressable>
        <Pressable
          onPress={() => Linking.openURL(`https://${team.strTwitter}`)}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/124/124021.png',
            }}
            style={{height: 25, width: 25}}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default TeamDetail;

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '95%',
    marginBottom: 50,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#0AA1DD',
    width: '100%',
    height: 50,
  },
  description: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
  },
  socialMedia: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginVertical: 5,
  },
});
