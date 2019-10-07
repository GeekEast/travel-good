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
// main("-34.928471", "138.593174", 2000, 4.5, 40, "restaurant", "adelaide_restaurants");
// main("-34.928471", "138.593174", 2000, 4.5, 40, "cafe", "adelaide_cafes");
// main("-34.928471", "138.593174", 2000, 4.5, 40, "bar", "adelaide_bars");
// main("-34.928471", "138.593174", 2000, 4.5, 40, "liquor_store", "adelaide_liquor_store");
// main("-34.928471", "138.593174", 2000, 4.5, 40, "clothing_store", "adelaide_clothing_store");
// main("-34.928471", "138.593174", 2000, 4.5, 40, "shoe_store", "adelaide_shoe_store");
// main("-34.928471", "138.593174", 2000, 4.5, 40, "shopping_mall", "adelaide_shopping_mall");
// main("-34.928471", "138.593174", 2000, 4.5, 40, "lodging", "adelaide_lodging");

// melbourne
// main("-37.807373", "144.964814", 2000, 4.5, 40, "restaurant", "mel_restaurants");

// sydney
// main("-33.864064", "151.208064", 2000, 4.5, 40, "restaurant", "sydney_restaurants");

// brisbane
main("-27.457426", "153.040709", 500, 4.5, 40, "restaurant", "brisbane_james_street_restaurants");


