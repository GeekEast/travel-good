import { API } from '../services';
import { toJson } from '../utils';
import { sleep } from 'sleep';
import _ from "lodash";
//@ts-ignore
import { save } from 'save-file';


export class Place {
  private _key: string;
  private _json: Array<Object>;
  constructor(key: string) {
    this._key = key;
    this._json = [];
  }

  private getDetails = async (place_id: string) => {
    const res = await API.get('/details/json', {
      params: {
        place_id,
        key: this._key,
        fields: 'formatted_address,website'
      }
    });
    const address = _.get(res, ['data', 'result', 'formatted_address']);
    const website = _.get(res, ['data', 'result', 'website']);
    return { address, website }
  }

  private searchNearBy = async (location: string, radius: string, type: string) => {
    const params = {
      location,
      radius,
      type,
      key: this._key,
    };
    let res = await API.get("/nearbysearch/json", { params: params });
    let result = _.get(res, ["data", "results"]);
    while (_.has(res, ["data", "next_page_token"])) {
      _.set(params, "pagetoken", _.get(res, ["data", "next_page_token"]));
      sleep(2);
      res = await API.get("/nearbysearch/json", { params: params });
      result = _.concat(result, _.get(res, ["data", "results"]));
    }
    return result;
  };

  private select = (places: Array<Object>, ratingBottomLine: number, ratingTotalBottomLine: number) =>
    _.compact(_.map(places, p => (_.get(p, 'rating') >= ratingBottomLine) && (_.get(p, 'user_ratings_total') >= ratingTotalBottomLine) && (!_.toLower(_.get(p, 'name')).includes("hotel")) ? _.pick(p, ["place_id", "name", "rating", "user_ratings_total"]) : null));

  private appendDetails = async (places: Array<Object>) => {
    const promises = _.map(places, async p => {
      const place_id = _.get(p, 'place_id');
      const detail = await this.getDetails(place_id);
      const { address, website } = detail;
      return { ...p, address, website };
    });
    const placesWithDetails = await Promise.all(promises);
    return placesWithDetails;
  }


  private sort = () => {
    this._json =  _.sortBy(this._json, p => -_.get(p, 'rating'));
  }

  public find = () => {

  }


  public getNearBy = async (location: string, radius: string, type: string, rating: number, reviewNum: number) => {
    try {
      const result = await this.searchNearBy(location, radius, type);
      const selected = <Array<Object>>(this.select(result, rating, reviewNum));
      const oneQuery = await this.appendDetails(selected);
      this._json = [...this._json, ...oneQuery];
    } catch (e) {
      console.log("empty data...");
    }
  }

  private removeDuplicate = () => {
    this._json =  _.uniqWith(this._json, _.isEqual);
  }

  public save = async () => {
    this.removeDuplicate();
    this.sort();
    const csv = toJson(this._json as Array<Object>);
    // console.log(csv);
    await save(csv, "data/places.csv");
  }
}


// -34.925317, 138.535173 west
// -34.918092, 138.680229 east 






