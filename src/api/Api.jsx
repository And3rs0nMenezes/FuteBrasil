const API_KEY = 'c452173775f4bf181ea1b39ca971c046dc2d0103f7df3294ec3899eb682da31a';
const BASE_URL = 'https://apiv3.apifootball.com/';

const fetchLeagues = async () => {
  try {
    const response = await fetch(`${BASE_URL}?action=get_leagues&country_id=6&APIkey=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchFixtures = async () => {
  try {
    const response = await fetch(`${BASE_URL}?action=get_events&from=2023-04-05&to=2023-04-05&league_id=152&APIkey=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { fetchLeagues, fetchFixtures };