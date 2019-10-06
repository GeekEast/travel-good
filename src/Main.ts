import { Place } from './classes/Place';
import { Coordinate } from './classes/Coordinate';
import config from 'config';
import _ from 'lodash';

const main = async (lat: string, lng: string, radius: number, ratings: number, reviews: number, type: string, path: string) => {
  const client = new Place(config.get("MAP.KEY"), path);
  const coordinates = new Coordinate(lat, lng, radius);
  const centers = coordinates.centers;

  for (let i = 0; i < centers.length; i++) {
    const temp = _.get(centers, i);
    console.log(`Processing  ${temp}`)
    await client.getNearBy(temp, "500", type, ratings, reviews);
    console.log('Nexting...');
  }
  await client.save();
}

// adelaide
// main("-34.928471", "138.593174", 2000, 4.5, 40, "restaurant", "places");

// melbourne
main("-37.807373", "144.964814", 2000, 4.5, 40, "restaurant", "mel");

