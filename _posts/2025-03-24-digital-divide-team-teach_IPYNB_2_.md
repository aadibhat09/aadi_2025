---
layout: post
title: Digital Divide Blog
description: A blog for the Digital Divide team
permalink: /posts/digital-divide/
comments: True
---

<br>

## Popcorn Hack 1: Which of the following actions are likely to be helpful in reducing the digital divide? Select two answers.

A) Designing new technologies intended only for advanced users
**B) Designing new technologies to be accessible to individuals with different physical abilities**
C) Implementing government regulations restricting citizens’ access to Web content
**D) Having world governments support the construction of network infrastructure**

<br>

## Popcorn Hack 2: How would you attempt to fix the digital divide or prevent it from being as prevalent in our community? What are some things that are already being done? What are some things we can add? Explain.

We must prioritize accessibility, affordability, and education in order to close the digital divide in our community.

What is already being done:

- Public Wi-Fi connection points can be found at community centers, libraries, and schools.

- Government programs give low-income households access to inexpensive internet.

- Refurbished electronics are being donated by nonprofits to underprivileged communities and students.

Things that we can add:

- Tech Literacy Programs: Additional classes and educational initiatives that educate digital skills.

- Subsidized Internet Plans: Increasing the number of faster and more reasonably priced internet services.

- Local Business Partnerships: Encouraging companies to finance digital learning initiatives or provide free internet access.

- More Accessible Devices: Making sure assistive technology is widely accessible and reasonably priced.

We can reduce the digital divide and build a more cohesive society by integrating community initiatives, government policies, and technological advancements.

<br>

## Homework Hack


```python
import pandas as pd

data = pd.read_csv("internet_users.csv").drop(columns=['Notes', 'Year.2', 'Users (CIA)', 'Rate (ITU)', 'Year.1']) # Drop extra columns: we will not be using these

data_cleaned = data.dropna() # Drop rows with NaN (aka blank) values

print(data_cleaned.head()) # Display the first few rows of the cleaned data

# print(len(data)) # Check num of rows before removing blank rows
# print(len(data_cleaned)) # Check num of rows after removing blank rows
```

          Location  Rate (WB)    Year
    0        World       67.4  2023.0
    1  Afghanistan       18.4  2020.0
    2      Albania       83.1  2023.0
    3      Algeria       71.2  2022.0
    5      Andorra       94.5  2022.0



```python
y = data_cleaned['Rate (WB)'] # Take Percentage of the population using the internet from World Bank data in dataset
name = data_cleaned['Location'] # take contry name from WB data in dataset

for country, rate in zip(name, y):
    if rate > 70:
        status = "doing great"
    else:
        status = "needs improvement"
    print(f"{country}: {rate}%: {status}")
```

    World: 67.4%: needs improvement
    Afghanistan: 18.4%: needs improvement
    Albania: 83.1%: doing great
    Algeria: 71.2%: doing great
    Andorra: 94.5%: doing great
    Angola: 39.3%: needs improvement
    Antigua and Barbuda: 91.4%: doing great
    Argentina: 89.2%: doing great
    Armenia: 78.6%: doing great
    Aruba: 97.2%: doing great
    Australia: 95.0%: doing great
    Austria: 95.3%: doing great
    Azerbaijan: 88.0%: doing great
    Bahamas: 94.4%: doing great
    Bahrain: 100.0%: doing great
    Bangladesh: 44.5%: needs improvement
    Barbados: 76.2%: doing great
    Belarus: 91.5%: doing great
    Belgium: 94.6%: doing great
    Belize: 70.4%: doing great
    Benin: 33.8%: needs improvement
    Bermuda: 98.4%: doing great
    Bhutan: 86.8%: doing great
    Bolivia: 73.3%: doing great
    Bosnia and Herzegovina: 83.4%: doing great
    Botswana: 77.3%: doing great
    Brazil: 84.2%: doing great
    British Virgin Islands: 77.7%: doing great
    Brunei: 99.0%: doing great
    Bulgaria: 80.4%: doing great
    Burkina Faso: 19.9%: needs improvement
    Burundi: 11.3%: needs improvement
    Cambodia: 56.7%: needs improvement
    Cameroon: 43.9%: needs improvement
    Canada: 94.6%: doing great
    Cape Verde: 72.1%: doing great
    Cayman Islands: 81.1%: doing great
    Central African Republic: 10.6%: needs improvement
    Chad: 12.2%: needs improvement
    Chile: 94.1%: doing great
    China: 77.5%: doing great
    Colombia: 73.0%: doing great
    Comoros: 27.3%: needs improvement
    Costa Rica: 85.1%: doing great
    Croatia: 83.2%: doing great
    Cuba: 73.2%: doing great
    Curacao: 68.1%: needs improvement
    Cyprus: 91.2%: doing great
    Czech Republic: 86.0%: doing great
    Democratic Republic of the Congo: 27.2%: needs improvement
    Denmark: 98.9%: doing great
    Djibouti: 65.0%: needs improvement
    Dominica: 83.4%: doing great
    Dominican Republic: 85.2%: doing great
    East Timor: 40.8%: needs improvement
    Ecuador: 72.7%: doing great
    Egypt: 72.2%: doing great
    El Salvador: 62.9%: needs improvement
    Equatorial Guinea: 66.8%: needs improvement
    Eritrea: 26.6%: needs improvement
    Estonia: 93.2%: doing great
    Eswatini: 58.3%: needs improvement
    Ethiopia: 19.4%: needs improvement
    Faroe Islands: 97.6%: doing great
    Fiji: 85.2%: doing great
    Finland: 93.5%: doing great
    France: 86.8%: doing great
    French Polynesia: 72.7%: doing great
    Gabon: 73.7%: doing great
    Gambia: 54.2%: needs improvement
    Georgia: 81.9%: doing great
    Germany: 92.5%: doing great
    Ghana: 69.8%: needs improvement
    Gibraltar: 94.4%: doing great
    Greece: 85.0%: doing great
    Greenland: 69.5%: needs improvement
    Grenada: 79.9%: doing great
    Guam: 80.5%: doing great
    Guatemala: 54.4%: needs improvement
    Guinea: 33.9%: needs improvement
    Guinea-Bissau: 31.6%: needs improvement
    Guyana: 85.3%: doing great
    Haiti: 39.3%: needs improvement
    Honduras: 59.7%: needs improvement
    Hong Kong: 95.6%: doing great
    Hungary: 91.5%: doing great
    Iceland: 99.9%: doing great
    India: 43.4%: needs improvement
    Indonesia: 69.2%: needs improvement
    Iran: 81.7%: doing great
    Iraq: 78.7%: doing great
    Ireland: 95.6%: doing great
    Israel: 91.9%: doing great
    Italy: 87.0%: doing great
    Ivory Coast: 43.8%: needs improvement
    Jamaica: 85.1%: doing great
    Japan: 93.2%: doing great
    Jordan: 90.5%: doing great
    Kazakhstan: 92.9%: doing great
    Kenya: 40.8%: needs improvement
    Kiribati: 54.4%: needs improvement
    Kosovo: 89.4%: doing great
    Kuwait: 99.8%: doing great
    Kyrgyzstan: 79.8%: doing great
    Laos: 66.2%: needs improvement
    Latvia: 92.2%: doing great
    Lebanon: 90.1%: doing great
    Lesotho: 47.0%: needs improvement
    Liberia: 30.1%: needs improvement
    Libya: 88.4%: doing great
    Liechtenstein: 99.6%: doing great
    Lithuania: 88.5%: doing great
    Luxembourg: 99.4%: doing great
    Macao: 89.8%: doing great
    Madagascar: 20.6%: needs improvement
    Malawi: 27.7%: needs improvement
    Malaysia: 97.7%: doing great
    Maldives: 85.2%: doing great
    Mali: 33.1%: needs improvement
    Malta: 91.9%: doing great
    Marshall Islands: 73.2%: doing great
    Mauritania: 44.4%: needs improvement
    Mauritius: 75.5%: doing great
    Mexico: 81.2%: doing great
    Micronesia: 40.5%: needs improvement
    Moldova: 71.0%: doing great
    Monaco: 98.6%: doing great
    Mongolia: 83.9%: doing great
    Montenegro: 88.2%: doing great
    Morocco: 89.9%: doing great
    Mozambique: 21.2%: needs improvement
    Myanmar: 48.1%: needs improvement
    Namibia: 62.2%: needs improvement
    Nauru: 83.3%: doing great
    Nepal: 49.6%: needs improvement
    Netherlands: 97.0%: doing great
    New Caledonia: 82.0%: doing great
    New Zealand: 95.7%: doing great
    Nicaragua: 61.1%: needs improvement
    Niger: 16.9%: needs improvement
    Nigeria: 35.5%: needs improvement
    North Macedonia: 84.2%: doing great
    Norway: 99.0%: doing great
    Oman: 97.9%: doing great
    Pakistan: 33.0%: needs improvement
    Palestine: 88.7%: doing great
    Panama: 73.6%: doing great
    Papua New Guinea: 27.0%: needs improvement
    Paraguay: 78.1%: doing great
    Peru: 74.7%: doing great
    Philippines: 75.2%: doing great
    Poland: 86.9%: doing great
    Portugal: 85.8%: doing great
    Puerto Rico: 87.3%: doing great
    Qatar: 100.0%: doing great
    Republic of the Congo: 36.3%: needs improvement
    Romania: 89.2%: doing great
    Russia: 92.3%: doing great
    Rwanda: 34.4%: needs improvement
    Saint Kitts and Nevis: 76.5%: doing great
    Saint Lucia: 75.8%: doing great
    Saint Vincent and the Grenadines: 78.7%: doing great
    Samoa: 76.3%: doing great
    San Marino: 85.1%: doing great
    Sao Tome and Principe: 57.0%: needs improvement
    Saudi Arabia: 100.0%: doing great
    Senegal: 60.0%: needs improvement
    Serbia: 85.4%: doing great
    Seychelles: 86.7%: doing great
    Sierra Leone: 30.4%: needs improvement
    Singapore: 96.9%: doing great
    Slovakia: 89.9%: doing great
    Slovenia: 90.4%: doing great
    Solomon Islands: 47.3%: needs improvement
    Somalia: 27.6%: needs improvement
    South Africa: 74.7%: doing great
    South Korea: 97.6%: doing great
    South Sudan: 12.1%: needs improvement
    Spain: 95.5%: doing great
    Sri Lanka: 50.1%: needs improvement
    Sudan: 28.7%: needs improvement
    Suriname: 75.8%: doing great
    Sweden: 95.7%: doing great
    Switzerland: 97.3%: doing great
    Syria: 35.8%: needs improvement
    Tajikistan: 36.1%: needs improvement
    Tanzania: 31.9%: needs improvement
    Thailand: 89.5%: doing great
    Togo: 37.6%: needs improvement
    Tonga: 66.7%: needs improvement
    Trinidad and Tobago: 80.0%: doing great
    Tunisia: 73.8%: doing great
    Turkey: 86.0%: doing great
    Turkmenistan: 21.3%: needs improvement
    Tuvalu: 82.3%: doing great
    Uganda: 10.0%: needs improvement
    Ukraine: 79.2%: doing great
    United Arab Emirates: 100.0%: doing great
    United Kingdom: 95.3%: doing great
    United States: 97.1%: doing great
    Uruguay: 89.9%: doing great
    US Virgin Islands: 64.4%: needs improvement
    Uzbekistan: 89.0%: doing great
    Vanuatu: 69.9%: needs improvement
    Venezuela: 61.6%: needs improvement
    Vietnam: 78.6%: doing great
    Yemen: 26.7%: needs improvement
    Zambia: 31.2%: needs improvement
    Zimbabwe: 32.6%: needs improvement


### How this works

First, it iterates through the dataset useing `zip(name, y)`. Then, it will check if the internet usage rate for the country is above 70%. Based on this, it will set the `status` string to either `"doing great`" or "`needs improvement`". Then, it will print each country, its internet usage rate, and its `status` string.
