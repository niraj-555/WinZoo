import axios from 'axios';

export const leagueHandler = async (setLeagues, setLoading) => {
  try {
    setLoading(true);
    const res = await axios.get(
      'https://www.thesportsdb.com/api/v1/json/2/all_leagues.php',
    );
    setLeagues(res.data.leagues);
    setLoading(false);
  } catch (error) {
    console.log('fetching leagues err:', error);
  }
};

export const sportsList = async (setSports, setLoading) => {
  try {
    setLoading(true);
    const res = await axios.get(
      'https://www.thesportsdb.com/api/v1/json/2/all_sports.php',
    );
    setSports(res.data.sports);
    setLoading(false);
  } catch (error) {
    console.log('fetching sports err:', error);
  }
};

export const teamHandler = async (leagueId, setTeams, setLoading) => {
  console.log(leagueId);
  try {
    setLoading(true);
    const res = await axios.get(
      ' https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=Indian%20Premier%20League',
    );
    setTeams(res.data.teams);
    setLoading(false);
  } catch (error) {
    console.log('fetching team error', error);
  }
};
