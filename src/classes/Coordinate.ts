import _ from 'lodash';
import roundTo from 'round-to';

export class Coordinate {
  private _lat: number;
  private _lng: number;
  private _lat_diff: number;
  private _lng_diff: number;
  private _large_radius: number;
  private _small_radius: number;
  private _centers: Array<string>;

  constructor(lat: string, lng: string, large_radius: number) {
    this._lat = parseFloat(lat);
    this._lng = parseFloat(lng);
    this._lat_diff = 0.00454;
    this._lng_diff = 0.00548;
    this._small_radius = 500;
    this._large_radius = large_radius;
    this._centers = [];
    this.setCenters();
  }

  public get lat(): string {
    return _.toString(this._lat);
  }

  public get lng(): string {
    return _.toString(this._lng);
  }

  private quadrant = (lat_direction: number, lng_direction: number) => {
    let lat = _.clone(this._lat);
    let lng = _.clone(this._lng);
    const times = _.toInteger(this._large_radius / this._small_radius) + 1;
    for (let i = 0; i < times; i++) {
      for (let j = 0; j < times; j++) {
        // console.log(`${lat},${lng}`);
        this._centers.push(`${lat},${lng}`);
        lng = roundTo(lng + lng_direction * this._lng_diff,6);
      }
      this._centers.push(`${lat},${lng}`);
      lng = _.clone(this._lng);
      lat = roundTo(lat + lat_direction * this._lat_diff,6);
    }
  }

  private setCenters = () => {
    this.quadrant(1, 1);
    this.quadrant(1, -1);
    this.quadrant(-1, -1);
    this.quadrant(-1, 1);
  }

  public get centers(): Array<string> {
    return _.uniqWith(this._centers, _.isEqual);
  }
}


// Main
// const c = new Coordinate("-34.928471", "138.593174", 2000);
// console.log(c.centers);
