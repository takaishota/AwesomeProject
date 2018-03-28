import { API_KEY } from "react-native-dotenv";

export function constructHealthNewsUrl() {
  return `https://newsapi.org/v2/top-headlines?country=jp&category=health&apiKey=${API_KEY}`;
}
