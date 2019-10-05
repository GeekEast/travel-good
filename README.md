## Description
- Searching api for good restaurants by `latitude`, `longtitude`, and `radius`.
- Bottomn line of google `ratings` and `number_of_reviews` is required.

## Warning
- See the [API pricing](https://cloud.google.com/maps-platform/pricing/sheet/) before happy hour with it.
- Recommend to apply for a brand new `Google` account and use the **free** google cloud credit which's worth `$300`.

## Quick Start
- Get [API Key](https://developers.google.com/maps/documentation/javascript/get-api-key): `export GOOGLE_MAP_API_KEY="{google_map_api_key}"`
- Run code: `yarn && yarn start`
```javascript
// get restaurants information with constraints:
// a radius of 2000m arount place(lat:-34.928471, lng:138.593174)
// with ratings >= 4.5 and number of reviews >= 40
main("-34.928471", "138.593174", 2000, 4.5, 40); // result saved in data/places.csv
```

## Issues:
- The performance is low due the restriction of Google Places API;
- **How to append object to array asynchronously?**.
- Latitude and Longtitude offset is a `estimate`.


## References
[3rd Party Tutorial](https://python.gotrained.com/google-places-api-extracting-location-data-reviews/)

[Distance Calculator](https://www.geodatasource.com/distance-calculator)

[Places Types](https://developers.google.com/places/web-service/supported_types)

[Places Pricing](https://cloud.google.com/maps-platform/pricing/sheet/)
