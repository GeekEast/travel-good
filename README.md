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


## Sample
- Adelaide
|Name                                         |Rating|Number of Reviews|Ranking|Address                                                                 |Website                                                                                           |Type      |Tag           |
|---------------------------------------------|------|-----------------|-------|------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|----------|--------------|
|NOLA Craft Beer & Whiskey                    |4.6   |769              |3537.4 |28 Vardon Ave, Adelaide SA 5000, Australia                              |http://www.nolaadelaide.com/                                                                      |Bar       |              |
|Bread & Bone                                 |4.5   |768              |3456   |15 Peel St, Adelaide SA 5000, Australia                                 |http://www.breadandbone.com.au/                                                                   |Restaurant|              |
|Little Bang Brewing Company                  |4.7   |575              |2702.5 |25 Henry St, Stepney SA 5069, Australia                                 |http://littlebang.com.au/                                                                         |Bar       |              |
|Osteria Oggi                                 |4.6   |562              |2585.2 |76 Pirie St, Adelaide SA 5000, Australia                                |http://osteriaoggi.com.au/                                                                        |Restaurant|Italian       |
|Pondok Daun Restaurant                       |4.5   |513              |2308.5 |94 Currie St, Adelaide SA 5000, Australia                               |https://www.facebook.com/PondokDaunADL                                                            |Restaurant|Indonisa      |
|Chianti                                      |4.6   |494              |2272.4 |160 Hutt St, Adelaide SA 5000, Australia                                |http://www.chianti.net.au/                                                                        |Restaurant|Italian       |
|Ballaboosta                                  |4.5   |493              |2218.5 |289 Halifax St, Adelaide SA 5000, Australia                             |http://www.ballaboosta.com.au/                                                                    |Restaurant|Pizza         |
|Golden Boy                                   |4.6   |459              |2111.4 |309 North Terrace, Adelaide SA 5000, Australia                          |http://golden-boy.com.au/                                                                         |Restaurant|Thailand      |
|Africola                                     |4.5   |452              |2034   |4 East Terrace, Adelaide SA 5000, Australia                             |http://www.africola.com.au/                                                                       |Restaurant|Africa        |
|Enzo's Ristorante                            |4.6   |432              |1987.2 |46 Port Rd, Hindmarsh SA 5007, Australia                                |http://www.enzosristorante.com.au/                                                                |Restaurant|Italian       |
|Parwana Afghan Kitchen                       |4.6   |429              |1973.4 |124B Henley Beach Rd, Torrensville SA 5031, Australia                   |http://www.parwana.com.au/                                                                        |Restaurant|Persia        |
|Peel St                                      |4.7   |419              |1969.3 |9 Peel St, Adelaide SA 5000, Australia                                  |http://www.peelst.com.au/                                                                         |Restaurant|Australian    |
|Andre's Cucina & Polenta Bar                 |4.5   |427              |1921.5 |94 Frome St, Adelaide SA 5000, Australia                                |http://www.andrescucina.com.au/                                                                   |Restaurant|Italian       |
|Raj on Taj Hyde Park                         |4.6   |384              |1766.4 |109 King William Rd, Unley SA 5061, Australia                           |http://www.rajontajhydepark.com/                                                                  |Restaurant|Indian        |
|Press* Food & Wine                           |4.6   |370              |1702   |40 Waymouth St, Adelaide SA 5000, Australia                             |http://www.pressfoodandwine.com.au/                                                               |Restaurant|              |
|Georges on Waymouth                          |4.5   |375              |1687.5 |20 Waymouth St, Adelaide SA 5000, Australia                             |http://www.georgesonwaymouth.com.au/                                                              |Restaurant|Mediterranean |
|Sneaky Pickle                                |4.6   |361              |1660.6 |94 Goodwood Rd, Goodwood SA 5034, Australia                             |http://www.sneakypickle.com.au/                                                                   |Restaurant|Barbecue      |
|Marrakech Restaurant                         |4.7   |334              |1569.8 |91 O'Connell St, North Adelaide SA 5006, Australia                      |https://www.marrakechrestaurant.com.au/                                                           |Restaurant|Morocco       |
|La Rambla Tapas Bar                          |4.5   |348              |1566   |28 Peel St, Adelaide SA 5000, Australia                                 |http://laramblatapas.com.au/                                                                      |Restaurant|Spanish       |
|Sushi Train                                  |4.5   |346              |1557   |Central Market Arcade 34, Adelaide SA 5000, Australia                   |http://www.sushitrain.com.au/                                                                     |Restaurant|Sushi         |
|Concubine                                    |4.5   |338              |1521   |132 Gouger St, Adelaide SA 5000, Australia                              |http://concubine.com.au/                                                                          |Restaurant|China         |

## References
[3rd Party Tutorial](https://python.gotrained.com/google-places-api-extracting-location-data-reviews/)

[Distance Calculator](https://www.geodatasource.com/distance-calculator)

[Places Types](https://developers.google.com/places/web-service/supported_types)

[Places Pricing](https://cloud.google.com/maps-platform/pricing/sheet/)
