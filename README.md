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

## Issues:
- The performance is low due the restriction of Google Places API;
- **How to append object to array asynchronously?**.
- Latitude and Longtitude offset is a `estimate`.


## Sample
- Adelaide

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
|Revoluci�n Mexicana ADL                         |4.7   |105    |Central Market Arcade, Shop 47/30 Gouger St, Adelaide SA 5000, Australia|           |https://maps.google.com/?cid=10872573210837586908|
|Banh Mi - Vietnamese Rolls                      |4.7   |51     |Grenfell Plaza, 2/25 Grenfell St, Adelaide SA 5000, Australia           |1          |https://maps.google.com/?cid=17116120052645490637|
|Naaz on Pulteney (Persian Restaurant)           |4.7   |56     |260 Pulteney St, Adelaide SA 5000, Australia                            |           |https://maps.google.com/?cid=15627637952049415020|
|Little Korea                                    |4.7   |65     |61-65 Hyde St, Adelaide SA 5000, Australia                              |           |https://maps.google.com/?cid=14359934095936413352|
|The Messy Tomato                                |4.7   |60     |151 Flinders St, Adelaide SA 5000, Australia                            |           |https://maps.google.com/?cid=14943380084336690324|
|Peel St                                         |4.7   |421    |9 Peel St, Adelaide SA 5000, Australia                                  |           |https://maps.google.com/?cid=6173566327111041064 |
|Kutchi Deli Parwana                             |4.7   |60     |7 Ebenezer Pl, Adelaide SA 5000, Australia                              |           |https://maps.google.com/?cid=3057088703148079230 |
|Vego and Loven It                               |4.7   |92     |240 Rundle St, Adelaide SA 5000, Australia                              |1          |https://maps.google.com/?cid=9720001157062338828 |
|The Lost Deli                                   |4.7   |130    |38 Charles St, Norwood SA 5067, Australia                               |1          |https://maps.google.com/?cid=17091987584235890720|
|Yumi # Donburi - Modern Japanese cafe           |4.7   |45     |231A Rundle St, Adelaide SA 5000, Australia                             |           |https://maps.google.com/?cid=1774832164711160934 |
|Little Bang Brewing Company                     |4.7   |576    |25 Henry St, Stepney SA 5069, Australia                                 |1          |https://maps.google.com/?cid=3924220530629692683 |
|Marrakech Restaurant                            |4.7   |335    |91 O'Connell St, North Adelaide SA 5006, Australia                      |2          |https://maps.google.com/?cid=11917837735447529283|
|Core 51                                         |4.7   |163    |180/188 Grote St, Adelaide SA 5000, Australia                           |           |https://maps.google.com/?cid=7141732980483959028 |
|African Village Centre Restaurant               |4.7   |134    |2A Northcote St, Torrensville SA 5031, Australia                        |           |https://maps.google.com/?cid=46767711536871499   |
|Cafe Outside The Square                         |4.7   |87     |34 Whitmore Square, Adelaide SA 5000, Australia                         |1          |https://maps.google.com/?cid=14078616633335792285|
|Mr Panda Kitchen                                |4.7   |49     |61 Wright St, Adelaide SA 5000, Australia                               |           |https://maps.google.com/?cid=8990035210488081735 |
|The Flying Trunk                                |4.7   |60     |70 King William Rd, Goodwood SA 5034, Australia                         |           |https://maps.google.com/?cid=10782931477338091432|
|Pizza e Mozzarella Bar                          |4.6   |240    |33 Pirie St, Adelaide SA 5000, Australia                                |2          |https://maps.google.com/?cid=8621358526597711749 |
|Tan Coffee                                      |4.6   |40     |Adelaide SA 5000, Australia                                             |1          |https://maps.google.com/?cid=18334483545946455087|
|Press* Food & Wine                              |4.6   |370    |40 Waymouth St, Adelaide SA 5000, Australia                             |3          |https://maps.google.com/?cid=6813796890253387795 |
|Borsa Pasta Cucina                              |4.6   |254    |1/25 Grenfell St, Adelaide SA 5000, Australia                           |2          |https://maps.google.com/?cid=546985598097314396  |
|Delicatessen Kitchen & Bar                      |4.6   |175    |12 Waymouth St, Adelaide SA 5000, Australia                             |2          |https://maps.google.com/?cid=3489315842787504523 |
|Hey Bianca Pizza                                |4.6   |77     |254 Pulteney St, Adelaide SA 5000, Australia                            |           |https://maps.google.com/?cid=12273516890396385574|
|Thai Ayo-Thaya Adelaide                         |4.6   |53     |94 Carrington St, Adelaide SA 5000, Australia                           |           |https://maps.google.com/?cid=11912012494706461400|
|Osteria Oggi                                    |4.6   |562    |76 Pirie St, Adelaide SA 5000, Australia                                |3          |https://maps.google.com/?cid=5518522975758239474 |
|Chianti                                         |4.6   |494    |160 Hutt St, Adelaide SA 5000, Australia                                |3          |https://maps.google.com/?cid=591447033021007246  |
|S2 on Flinders - Modern Thai                    |4.6   |109    |264 Flinders St, Adelaide SA 5000, Australia                            |2          |https://maps.google.com/?cid=8307498574751345940 |
|Bai Long Store                                  |4.6   |264    |80 Hutt St, Adelaide SA 5000, Australia                                 |2          |https://maps.google.com/?cid=1431378120090438244 |
|Coffylosophy                                    |4.6   |239    |198A Hutt St, Adelaide SA 5000, Australia                               |2          |https://maps.google.com/?cid=13941142910607925625|
|Apothecary 1878                                 |4.6   |215    |118 Hindley St, Adelaide SA 5000, Australia                             |3          |https://maps.google.com/?cid=2428988887142102641 |
|Sunny's Pizza                                   |4.6   |277    |17 Solomon St, Adelaide SA 5000, Australia                              |2          |https://maps.google.com/?cid=8307632837631312065 |
|Bread & Bone                                    |4.6   |769    |15 Peel St, Adelaide SA 5000, Australia                                 |2          |https://maps.google.com/?cid=14005336551116476617|
|Udaberri Pintxos Y Vino                         |4.6   |307    |11-13 Leigh St, Adelaide SA 5000, Australia                             |2          |https://maps.google.com/?cid=5243460744108942360 |
|Miss Mai, Gawler Place, Adelaide                |4.6   |132    |73 Gawler Pl, Adelaide SA 5000, Australia                               |1          |https://maps.google.com/?cid=12328530559522941898|
|BRKLYN                                          |4.6   |127    |260-262 Rundle St, Adelaide SA 5000, Australia                          |           |https://maps.google.com/?cid=7637424498969638467 |
|Golden Boy                                      |4.6   |459    |309 North Terrace, Adelaide SA 5000, Australia                          |3          |https://maps.google.com/?cid=15669528190649599489|
|Ayers House Weddings & Events                   |4.6   |104    |288 North Terrace, Adelaide SA 5000, Australia                          |           |https://maps.google.com/?cid=8812514445851995962 |
|El Cheeky Flamingo                              |4.6   |94     |40/33 Vardon Ave, Adelaide SA 5000, Australia                           |2          |https://maps.google.com/?cid=12700537584908964310|
|NOLA Craft Beer & Whiskey                       |4.6   |771    |28 Vardon Ave, Adelaide SA 5000, Australia                              |2          |https://maps.google.com/?cid=1096921105306217807 |
|The Playford Restaurant                         |4.6   |46     |120 North Terrace, Adelaide SA 5000, Australia                          |2          |https://maps.google.com/?cid=15689382146559589075|
|Coconut Estate Eatery                           |4.6   |142    |5/11 O'Connell St, North Adelaide SA 5006, Australia                    |           |https://maps.google.com/?cid=920710640678236608  |
|Zaep Tastes of Thailand                         |4.6   |104    |22 O'Connell St, North Adelaide SA 5006, Australia                      |2          |https://maps.google.com/?cid=10689141772152300953|
|THE SPOT ON MELBOURNE                           |4.6   |89     |133 Melbourne St, North Adelaide SA 5006, Australia                     |           |https://maps.google.com/?cid=16638057308311234926|
|Himalayan Kitchen                               |4.6   |116    |73 Melbourne St, North Adelaide SA 5006, Australia                      |2          |https://maps.google.com/?cid=4531176728759326767 |
|Yakitori Takumi                                 |4.6   |173    |60/55 Melbourne St, North Adelaide SA 5006, Australia                   |3          |https://maps.google.com/?cid=15854266353685710594|
|Plate and a Half                                |4.6   |56     |6/34 Henley Beach Rd, Mile End SA 5031, Australia                       |1          |https://maps.google.com/?cid=17016989500688068591|
|Parwana Afghan Kitchen                          |4.6   |429    |124B Henley Beach Rd, Torrensville SA 5031, Australia                   |2          |https://maps.google.com/?cid=4749544615133759085 |
|Francescos Osteria                              |4.6   |85     |146b Henley Beach Rd, Torrensville SA 5031, Australia                   |2          |https://maps.google.com/?cid=17510928047560991617|
|Vietnam Village Restaurant                      |4.6   |153    |2 Smith St, Thebarton SA 5031, Australia                                |2          |https://maps.google.com/?cid=14500368518829513778|
|Enzo's Ristorante                               |4.6   |432    |46 Port Rd, Hindmarsh SA 5007, Australia                                |2          |https://maps.google.com/?cid=2810885571963322568 |
|New Local Eatery                                |4.6   |92     |120 Port Rd, Hindmarsh SA 5007, Australia                               |2          |https://maps.google.com/?cid=7104091469419020606 |
|Lantern by Nu                                   |4.6   |185    |10 Selby St, Adelaide SA 5000, Australia                                |2          |https://maps.google.com/?cid=1539771286070199399 |
|K-pub                                           |4.6   |126    |167 Gouger St, Adelaide SA 5000, Australia                              |           |https://maps.google.com/?cid=8134192139847297540 |
|Metro Oyster Bar                                |4.6   |59     |27 Field St, Adelaide SA 5000, Australia                                |2          |https://maps.google.com/?cid=2097621033129623117 |
|Sneaky Pickle                                   |4.6   |361    |94 Goodwood Rd, Goodwood SA 5034, Australia                             |2          |https://maps.google.com/?cid=13682216608987948564|
|Candela Latin American Food                     |4.6   |61     |120 Goodwood Rd, Goodwood SA 5034, Australia                            |           |https://maps.google.com/?cid=16985000202398822003|
|Mimasu                                          |4.6   |88     |411 King William St, Adelaide SA 5000, Australia                        |2          |https://maps.google.com/?cid=14357145836920551277|
|Nishiki cafe& Izakaya                           |4.6   |131    |21 Sturt St, Adelaide SA 5000, Australia                                |2          |https://maps.google.com/?cid=7533920668797233451 |
|La Tombola Italian Restaurant                   |4.6   |252    |61 Unley Rd, Parkside SA 5063, Australia                                |2          |https://maps.google.com/?cid=96585497595993674   |
|Johnny's Kitchen                                |4.6   |62     |56 Glen Osmond Rd, Parkside SA 5063, Australia                          |           |https://maps.google.com/?cid=15021197456047366549|
|Fumo Restaurant                                 |4.6   |99     |93a Glen Osmond Rd, Eastwood SA 5063, Australia                         |2          |https://maps.google.com/?cid=7379527554636528735 |
|Raj on Taj Hyde Park                            |4.6   |384    |109 King William Rd, Unley SA 5061, Australia                           |2          |https://maps.google.com/?cid=1903664269951154119 |
|Nu Thai Restaurant                              |4.5   |237    |228 Morphett St, Adelaide SA 5000, Australia                            |2          |https://maps.google.com/?cid=10678349081220537455|
|Concubine                                       |4.5   |338    |132 Gouger St, Adelaide SA 5000, Australia                              |2          |https://maps.google.com/?cid=11712716293027149545|
|Kin Thai                                        |4.5   |77     |255 Waymouth St, Adelaide SA 5000, Australia                            |           |https://maps.google.com/?cid=6188266318275789922 |
|Sushi Train                                     |4.5   |347    |Central Market Arcade 34, Adelaide SA 5000, Australia                   |2          |https://maps.google.com/?cid=4769112252936061899 |
|Hong Kee Restaurant                             |4.5   |165    |216-218 Morphett St, Adelaide SA 5000, Australia                        |2          |https://maps.google.com/?cid=4817135009398181192 |
|Ban Ban (ADL)                                   |4.5   |192    |145 Franklin St, Adelaide SA 5000, Australia                            |2          |https://maps.google.com/?cid=10398754731112887558|
|Georges on Waymouth                             |4.5   |375    |20 Waymouth St, Adelaide SA 5000, Australia                             |3          |https://maps.google.com/?cid=10573405646200611983|
|Bakmi Lim Noodle Project                        |4.5   |125    |4/8 Waymouth St, Adelaide SA 5000, Australia                            |           |https://maps.google.com/?cid=15964014375957285450|
|Central Market Gourmet                          |4.5   |49     |Stall 71, Central Market Gouger St, Adelaide SA 5000, Australia         |           |https://maps.google.com/?cid=13936237374928313404|
|Hut & Soul                                      |4.5   |178    |310 Pulteney St, Adelaide SA 5000, Australia                            |2          |https://maps.google.com/?cid=10256257515618662572|
|Louca's Seafood Restaurant                      |4.5   |237    |242 Pulteney St, Adelaide SA 5000, Australia                            |2          |https://maps.google.com/?cid=11885867573238006747|
|Est Ovest Osteria                               |4.5   |175    |shop 1/111 Angas St, Adelaide SA 5000, Australia                        |2          |https://maps.google.com/?cid=665663215612423476  |
|Andre's Cucina & Polenta Bar                    |4.5   |427    |94 Frome St, Adelaide SA 5000, Australia                                |3          |https://maps.google.com/?cid=14836472527863673109|
|Prezzo Restaurant                               |4.5   |89     |173 Hutt St, Adelaide SA 5000, Australia                                |1          |https://maps.google.com/?cid=8544010764404742415 |
|Hutt Street Chicken and Seafood                 |4.5   |67     |188 Hutt St, Adelaide SA 5000, Australia                                |1          |https://maps.google.com/?cid=14083254966601742749|
|Ballaboosta                                     |4.5   |493    |289 Halifax St, Adelaide SA 5000, Australia                             |2          |https://maps.google.com/?cid=2875200372541406760 |
|New India Restaurant                            |4.5   |319    |167 Hindley St, Adelaide SA 5000, Australia                             |1          |https://maps.google.com/?cid=10354078572970936812|
|Shiki Japanese Restaurant                       |4.5   |159    |Upper Lobby, North Terrace, Adelaide SA 5000, Australia                 |2          |https://maps.google.com/?cid=15679294403234444870|
|Pondok Daun Restaurant                          |4.5   |514    |94 Currie St, Adelaide SA 5000, Australia                               |1          |https://maps.google.com/?cid=9022610556969283990 |
|La Rambla Tapas Bar                             |4.5   |348    |28 Peel St, Adelaide SA 5000, Australia                                 |2          |https://maps.google.com/?cid=10533305309553493721|
|Kaffana                                         |4.5   |259    |27 Gilbert Pl, Adelaide SA 5000, Australia                              |2          |https://maps.google.com/?cid=16372741358602185550|
|Zenhouse Tea Corner                             |4.5   |93     |17-19 Bent St, Adelaide SA 5000, Australia                              |1          |https://maps.google.com/?cid=15134422222015739874|
|Two-Bit Villains                                |4.5   |292    |Adelaide Arcade, 150 Rundle Mall, Adelaide SA 5000, Australia           |           |https://maps.google.com/?cid=11611429433145361631|
|Munooshi Cafe                                   |4.5   |124    |36 East Terrace, Adelaide SA 5000, Australia                            |1          |https://maps.google.com/?cid=15517478051145064482|
|Africola                                        |4.5   |452    |4 East Terrace, Adelaide SA 5000, Australia                             |3          |https://maps.google.com/?cid=7863257802244463491 |
|EST Pizzeria                                    |4.5   |142    |30 East Terrace, Adelaide SA 5000, Australia                            |2          |https://maps.google.com/?cid=5164879164379501897 |
|Mother Vine                                     |4.5   |148    |22-26 Vardon Ave, Adelaide SA 5000, Australia                           |2          |https://maps.google.com/?cid=14490639213659983050|
|Orana                                           |4.5   |175    |1/285 Rundle St, Adelaide SA 5000, Australia                            |4          |https://maps.google.com/?cid=2775239340404031885 |
|Zen Kitchen                                     |4.5   |45     |Renaissance Arcade, Shop 7/136 Rundle Mall, Adelaide SA 5000, Australia |           |https://maps.google.com/?cid=5218197627439822626 |
|Thai by 3 Monkeys                               |4.5   |181    |33 O'Connell St, Adelaide N SA 5006, Australia                          |2          |https://maps.google.com/?cid=7645856467112114710 |
|CLICH� EXHIBITION                               |4.5   |311    |26 O'Connell St, North Adelaide SA 5006, Australia                      |2          |https://maps.google.com/?cid=596346342434413710  |
|Zambrero North Adelaide                         |4.5   |193    |32 O'Connell St, North Adelaide SA 5006, Australia                      |2          |https://maps.google.com/?cid=10553098392424273390|
|Gin Long Canteen                                |4.5   |323    |42 O'Connell St, North Adelaide SA 5006, Australia                      |2          |https://maps.google.com/?cid=11734040426523068956|
|Blue and White Cafe                             |4.5   |174    |43 O'Connell St, North Adelaide SA 5006, Australia                      |1          |https://maps.google.com/?cid=14432095203336504312|
|Mazaya Restaurant & Cafe                        |4.5   |45     |98 Melbourne St, North Adelaide SA 5006, Australia                      |           |https://maps.google.com/?cid=707607653731321146  |
|Napoli Wood Fired Pizzeria                      |4.5   |180    |2/127 Henley Beach Rd, Mile End SA 5031, Australia                      |2          |https://maps.google.com/?cid=12904695461598334495|
|The Gov                                         |4.5   |1168   |59 Port Rd, Hindmarsh SA 5007, Australia                                |2          |https://maps.google.com/?cid=7493712569981242266 |
|Taste of Bollywood                              |4.5   |108    |130 Port Rd, Hindmarsh SA 5007, Australia                               |1          |https://maps.google.com/?cid=8555500209876576013 |
|Vietnamese Laundry                              |4.5   |130    |152 Sturt St, Adelaide SA 5000, Australia                               |1          |https://maps.google.com/?cid=4737555774455230978 |
|Sylvia's Deli                                   |4.5   |61     |48 Everard Ave, Keswick SA 5035, Australia                              |1          |https://maps.google.com/?cid=227806666286882617  |
|Adelaide Farmers' Market                        |4.5   |696    |Leader St, Wayville SA 5034, Australia                                  |           |https://maps.google.com/?cid=15163602442828747765|
|Kin Kin Thai Eatery                             |4.5   |102    |4/242 Hutt St, Adelaide SA 5000, Australia                              |2          |https://maps.google.com/?cid=13577941564978719268|
|NAGOMI Japanese Kitchen                         |4.5   |77     |Shop5/242 Hutt St, Adelaide SA 5000, Australia                          |2          |https://maps.google.com/?cid=9775370103486441572 |
|Pickle in the Middle - Unley Cafe               |4.5   |209    |134 Unley Rd, Unley SA 5061, Australia                                  |2          |https://maps.google.com/?cid=4793425939103003096 |


## References
[3rd Party Tutorial](https://python.gotrained.com/google-places-api-extracting-location-data-reviews/)

[Distance Calculator](https://www.geodatasource.com/distance-calculator)

[Places Types](https://developers.google.com/places/web-service/supported_types)

[Places Pricing](https://cloud.google.com/maps-platform/pricing/sheet/)

[CSV to Markdown](http://www.convertcsv.com/csv-to-markdown.htm)
