## Description
- Searching api for good restaurants by `latitude`, `longtitude`, and `radius`.
- Bottomn line of google `ratings` and `number_of_reviews` is required.

## Warning
- See the [API pricing](https://cloud.google.com/maps-platform/pricing/sheet/) before happy hour with it.
- Recommend to apply for a brand new `Google` account and use the **free** google cloud credit which's worth `$300`.

## Quick Start
- Get [API Key](https://developers.google.com/maps/documentation/javascript/get-api-key): `export GOOGLE_MAP_API_KEY="{google_map_api_key}"`
- Run code: `yarn && yarn start`
- Search Restaurants in `Adelaide/Melbourne/Sydney` with `Ratings >= 4.5` && `Reviews >= 40`
> You could run these search `asynchronously`
```javascript
// adelaide file saved in data/adelaide.csv
main("-34.928471", "138.593174", 2000, 4.5, 40, "restaurant", "adelaide");

// melbourne file saved in data/mel.csv
main("-37.807373", "144.964814", 2000, 4.5, 40, "restaurant", "mel");

// sydney file saved in data/sydney.csv
main("-33.864064", "151.208064", 2000, 4.5, 40, "restaurant", "sydney");
```
## Types
- restaurant
- cafe
- bar
- liquor_store
- night_club
- beauty_salon
- movie_theater
- clothing store
- shoe_store
- shopping_mall
- gym
- bakery
- supermarket
- hospital
- spa
- lodging
- [More](https://developers.google.com/places/web-service/supported_types)

## Issues:
- The performance is low due the restriction of Google Places API;
- **How to append object to array asynchronously?**.
- Latitude and Longtitude offset is a `estimate`.


## Sample
- Adelaide Top 15

|Name                                            |Rating|Reviews|Address                                                                 |Price Level|URL                                              |
|------------------------------------------------|------|-------|------------------------------------------------------------------------|-----------|-------------------------------------------------|
|Dat Place - Wood Oven Restaurant Cocktail Lounge|5     |40     |279A Hindley St, Adelaide SA 5000, Australia                            |           |https://maps.google.com/?cid=11119923655915422902|
|MiMi                                            |4.9   |44     |50 Sturt St, Adelaide SA 5000, Australia                                |1          |https://maps.google.com/?cid=3368488420919719391 |
|Herringbone Restaurant                          |4.9   |54     |72-74 Halifax St, Adelaide SA 5000, Australia                           |2          |https://maps.google.com/?cid=6345882024145487325 |
|Koyeosa                                         |4.9   |70     |449 Pulteney St, Adelaide SA 5000, Australia                            |           |https://maps.google.com/?cid=17466431488972212320|
|Thea Tea Shop                                   |4.8   |177    |110 Gawler Pl, Adelaide SA 5000, Australia                              |1          |https://maps.google.com/?cid=5666301766134704446 |
|Laneway Espresso House                          |4.8   |93     |4/10 Ebenezer Pl, Adelaide SA 5000, Australia                           |2          |https://maps.google.com/?cid=18374040685472461517|
|B'Churrasco Brazilian BBQ Restaurant Adelaide   |4.8   |204    |12 East Terrace, Adelaide SA 5000, Australia                            |           |https://maps.google.com/?cid=13575034431723273783|
|Pan & Vine                                      |4.8   |40     |Shop 3/58 King William St, Kent Town SA 5067, Australia                 |           |https://maps.google.com/?cid=6283129604344610524 |
|Ben Hurs Charcoal Grill                         |4.8   |45     |53 O'Connell St, North Adelaide SA 5006, Australia                      |           |https://maps.google.com/?cid=5429862658639229733 |
|PIXIE AND THE HAWK                              |4.8   |205    |144 Henley Beach Rd, Torrensville SA 5031, Australia                    |2          |https://maps.google.com/?cid=14339705111985693113|
|Roll In Saigon                                  |4.8   |82     |126 Goodwood Rd, Goodwood SA 5034, Australia                            |1          |https://maps.google.com/?cid=14887774089247895604|
|Banh Mi - Vietnamese Rolls                      |4.7   |51     |Grenfell Plaza, 2/25 Grenfell St, Adelaide SA 5000, Australia           |1          |https://maps.google.com/?cid=17116120052645490637|
|Naaz on Pulteney (Persian Restaurant)           |4.7   |56     |260 Pulteney St, Adelaide SA 5000, Australia                            |           |https://maps.google.com/?cid=15627637952049415020|
|Little Korea                                    |4.7   |65     |61-65 Hyde St, Adelaide SA 5000, Australia                              |           |https://maps.google.com/?cid=14359934095936413352|
|The Messy Tomato                                |4.7   |60     |151 Flinders St, Adelaide SA 5000, Australia                            |           |https://maps.google.com/?cid=14943380084336690324|


## References
[3rd Party Tutorial](https://python.gotrained.com/google-places-api-extracting-location-data-reviews/)

[Distance Calculator](https://www.geodatasource.com/distance-calculator)

[Places Types](https://developers.google.com/places/web-service/supported_types)

[Places Pricing](https://cloud.google.com/maps-platform/pricing/sheet/)

[CSV to Markdown](http://www.convertcsv.com/csv-to-markdown.htm)
