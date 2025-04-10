---
layout: post
title: Lists and Filtering Blog
description: A blog for the Lists and Filtering team
permalink: /posts/lists-and-filtering/
comments: True
---

## Popcorn Hack 1


```python
movies = ['A Minecraft Movie', 'The Super Mario Bros. Movie', 'Sonic the Hedgehog', 'Sonic the Hedgehog 2']

movies[1] = 'The Super Luigi Movie'

movies.append('Sonic the Hedgehog 3')

print(movies)
```

    ['A Minecraft Movie', 'The Super Luigi Movie', 'Sonic the Hedgehog', 'Sonic the Hedgehog 2', 'Sonic the Hedgehog 3']


## Popcorn Hack 2


```python
ages = [15, 20, 34, 16, 18, 21, 14, 19]

eligible_voters = [age for age in ages if age >= 18]

print(eligible_voters)
```

    [20, 34, 18, 21, 19]


## Homework Hack 1

First video
- Lists store ordered sequences of objects.
- Lists are created with brackets or the list constructor.
- `append` adds items to the end of a list.
- Items are accessed using indexes (starting from 0, or negative for reverse).
- Slicing retrieves ranges of list values.
- Lists support multiple data types and duplicates, and can be concatenated.

Second video
- Dictionaries store key-value pairs, not ordered sequences.
- Dictionaries are created using curly braces `{}`.
- Values are accessed using their corresponding keys.
- You can add or update key-value pairs by assigning values to keys.
- Methods like `.keys()`, `.values()`, and `.items()` allow you to iterate through the dictionary's contents.
- Dictionaries are mutable, meaning you can change their contents after creation.

<br>

## Homework Hack 2


```python
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

good_nums = [num for num in nums if num % 3 == 0 and num % 5 != 0]

print(nums)
print(good_nums)
```

    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    [3, 6, 9, 12, 18, 21, 24, 27]


<br>

## Homework Hack 3


```python
import pandas as pd

def filter_spotify_data(csv):
    
    data = pd.read_csv(csv)

    c = 0

    for i in data["Total Streams (Millions)"]:
        if i >= 10:
            print(str(data["Album"][c]) + ": " + str(i) + " million streams")
            
        c += 1
        
filter_spotify_data("Spotify_2024_Global_Streaming_Data.csv")
```

    1989 (Taylor's Version): 3695.53 million streams
    After Hours: 2828.16 million streams
    Austin: 1425.46 million streams
    Autumn Variations: 2704.33 million streams
    Autumn Variations: 3323.25 million streams
    Happier Than Ever: 1087.06 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 4630.69 million streams
    Scarlet: 377.63 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 2828.77 million streams
    Eternal Sunshine: 4312.46 million streams
    Future Nostalgia: 4310.86 million streams
    BORN PINK: 3624.36 million streams
    Scarlet: 1900.87 million streams
    SOS: 1242.31 million streams
    Austin: 4736.9 million streams
    MAÑANA SERÁ BONITO: 3266.9 million streams
    Autumn Variations: 85.59 million streams
    Eternal Sunshine: 1110.47 million streams
    After Hours: 1803.77 million streams
    1989 (Taylor's Version): 4315.28 million streams
    After Hours: 4287.04 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 4330.02 million streams
    Proof: 4977.34 million streams
    Autumn Variations: 332.97 million streams
    For All The Dogs: 1214.26 million streams
    BORN PINK: 4676.8 million streams
    Future Nostalgia: 3124.74 million streams
    SOS: 830.85 million streams
    SOS: 579.83 million streams
    Eternal Sunshine: 4238.21 million streams
    Happier Than Ever: 2780.82 million streams
    Eternal Sunshine: 783.06 million streams
    Happier Than Ever: 4426.47 million streams
    Austin: 3695.99 million streams
    BORN PINK: 4092.1 million streams
    Guts: 1431.67 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 3003.03 million streams
    SOS: 3558.49 million streams
    Autumn Variations: 3612.78 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 1926.77 million streams
    Proof: 3052.97 million streams
    Happier Than Ever: 3183.06 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 2401.92 million streams
    Future Nostalgia: 3453.73 million streams
    Future Nostalgia: 4249.26 million streams
    Scarlet: 2761.97 million streams
    Austin: 1409.26 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 806.39 million streams
    Scarlet: 2941.19 million streams
    Austin: 3686.44 million streams
    BORN PINK: 2051.37 million streams
    Autumn Variations: 3231.61 million streams
    Guts: 4758.46 million streams
    After Hours: 203.6 million streams
    Autumn Variations: 3846.15 million streams
    For All The Dogs: 2900.19 million streams
    For All The Dogs: 649.22 million streams
    Eternal Sunshine: 4120.54 million streams
    Happier Than Ever: 2713.96 million streams
    Proof: 2870.76 million streams
    Guts: 3000.97 million streams
    Eternal Sunshine: 3573.62 million streams
    Happier Than Ever: 2678.06 million streams
    Proof: 1611.96 million streams
    MAÑANA SERÁ BONITO: 4903.53 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 2789.13 million streams
    Future Nostalgia: 4829.21 million streams
    Autumn Variations: 2836.06 million streams
    Austin: 1932.87 million streams
    MAÑANA SERÁ BONITO: 1360.0 million streams
    Future Nostalgia: 3549.43 million streams
    Happier Than Ever: 1162.81 million streams
    Autumn Variations: 2370.05 million streams
    Autumn Variations: 3038.38 million streams
    Autumn Variations: 3274.97 million streams
    Future Nostalgia: 3367.16 million streams
    1989 (Taylor's Version): 1650.21 million streams
    1989 (Taylor's Version): 3794.39 million streams
    Future Nostalgia: 3168.61 million streams
    After Hours: 3256.16 million streams
    Future Nostalgia: 1948.75 million streams
    Guts: 1450.05 million streams
    Guts: 1917.19 million streams
    1989 (Taylor's Version): 4571.48 million streams
    Autumn Variations: 2229.52 million streams
    For All The Dogs: 3478.89 million streams
    Scarlet: 1212.11 million streams
    Austin: 1532.36 million streams
    After Hours: 3972.97 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 2324.87 million streams
    For All The Dogs: 1530.81 million streams
    Scarlet: 2881.02 million streams
    Proof: 3902.64 million streams
    Autumn Variations: 3123.41 million streams
    Proof: 3675.18 million streams
    SOS: 1399.01 million streams
    Austin: 746.75 million streams
    For All The Dogs: 661.76 million streams
    For All The Dogs: 4426.96 million streams
    SOS: 741.9 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 4749.43 million streams
    Autumn Variations: 1884.12 million streams
    SOS: 989.55 million streams
    1989 (Taylor's Version): 673.32 million streams
    Guts: 4299.11 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 1227.76 million streams
    MAÑANA SERÁ BONITO: 1842.09 million streams
    Proof: 351.09 million streams
    SOS: 375.13 million streams
    Future Nostalgia: 3975.83 million streams
    Guts: 520.67 million streams
    For All The Dogs: 527.99 million streams
    Happier Than Ever: 3343.44 million streams
    For All The Dogs: 3300.84 million streams
    Austin: 4101.21 million streams
    1989 (Taylor's Version): 1579.47 million streams
    MAÑANA SERÁ BONITO: 1114.91 million streams
    Autumn Variations: 3784.46 million streams
    BORN PINK: 613.4 million streams
    BORN PINK: 1542.03 million streams
    MAÑANA SERÁ BONITO: 2686.28 million streams
    BORN PINK: 4317.44 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 4602.86 million streams
    BORN PINK: 1698.69 million streams
    Guts: 1317.04 million streams
    Future Nostalgia: 4624.56 million streams
    Future Nostalgia: 1548.96 million streams
    Guts: 4887.97 million streams
    Future Nostalgia: 3044.78 million streams
    MAÑANA SERÁ BONITO: 243.75 million streams
    BORN PINK: 3956.67 million streams
    MAÑANA SERÁ BONITO: 2934.56 million streams
    Proof: 1675.96 million streams
    1989 (Taylor's Version): 1110.25 million streams
    Scarlet: 4183.84 million streams
    BORN PINK: 3479.59 million streams
    Future Nostalgia: 3929.81 million streams
    Future Nostalgia: 2539.39 million streams
    1989 (Taylor's Version): 557.82 million streams
    SOS: 503.98 million streams
    Eternal Sunshine: 453.95 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 2388.65 million streams
    1989 (Taylor's Version): 2766.58 million streams
    1989 (Taylor's Version): 3132.91 million streams
    Autumn Variations: 2174.73 million streams
    Guts: 3942.74 million streams
    Proof: 1756.77 million streams
    Scarlet: 3492.18 million streams
    Proof: 4434.66 million streams
    1989 (Taylor's Version): 3915.17 million streams
    MAÑANA SERÁ BONITO: 974.75 million streams
    BORN PINK: 1640.0 million streams
    MAÑANA SERÁ BONITO: 3647.73 million streams
    For All The Dogs: 3762.0 million streams
    Guts: 809.52 million streams
    Guts: 1285.58 million streams
    Proof: 4982.01 million streams
    Future Nostalgia: 484.56 million streams
    Eternal Sunshine: 3573.46 million streams
    Austin: 180.11 million streams
    BORN PINK: 2076.7 million streams
    Guts: 950.72 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 1166.08 million streams
    Proof: 2690.72 million streams
    Guts: 190.45 million streams
    Autumn Variations: 2750.61 million streams
    Future Nostalgia: 2226.05 million streams
    BORN PINK: 575.61 million streams
    BORN PINK: 4333.27 million streams
    Future Nostalgia: 495.74 million streams
    Proof: 3288.59 million streams
    Austin: 303.23 million streams
    Proof: 686.88 million streams
    After Hours: 249.26 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 1995.13 million streams
    MAÑANA SERÁ BONITO: 132.35 million streams
    Autumn Variations: 3925.37 million streams
    Austin: 1248.87 million streams
    BORN PINK: 3076.82 million streams
    Guts: 4785.59 million streams
    Autumn Variations: 1431.08 million streams
    Guts: 4675.7 million streams
    Austin: 4778.8 million streams
    Proof: 590.67 million streams
    1989 (Taylor's Version): 2388.4 million streams
    Future Nostalgia: 3247.19 million streams
    SOS: 920.15 million streams
    SOS: 3033.78 million streams
    SOS: 1004.42 million streams
    MAÑANA SERÁ BONITO: 3798.55 million streams
    BORN PINK: 2413.4 million streams
    Proof: 1344.69 million streams
    SOS: 4584.85 million streams
    MAÑANA SERÁ BONITO: 2768.71 million streams
    Scarlet: 3533.64 million streams
    Autumn Variations: 4279.71 million streams
    Future Nostalgia: 2841.36 million streams
    MAÑANA SERÁ BONITO: 2147.3 million streams
    1989 (Taylor's Version): 720.37 million streams
    Scarlet: 4822.51 million streams
    Eternal Sunshine: 4182.37 million streams
    BORN PINK: 817.85 million streams
    Austin: 549.44 million streams
    After Hours: 3891.51 million streams
    Autumn Variations: 1222.67 million streams
    Autumn Variations: 2801.46 million streams
    BORN PINK: 3784.36 million streams
    SOS: 2111.71 million streams
    Scarlet: 4155.56 million streams
    MAÑANA SERÁ BONITO: 4353.9 million streams
    MAÑANA SERÁ BONITO: 3533.65 million streams
    Happier Than Ever: 2588.44 million streams
    Guts: 4327.22 million streams
    BORN PINK: 3290.31 million streams
    Future Nostalgia: 887.87 million streams
    Scarlet: 4220.6 million streams
    Autumn Variations: 127.87 million streams
    1989 (Taylor's Version): 4040.53 million streams
    Eternal Sunshine: 2014.64 million streams
    Happier Than Ever: 1916.99 million streams
    Autumn Variations: 1187.34 million streams
    SOS: 937.8 million streams
    SOS: 1240.34 million streams
    Eternal Sunshine: 1199.11 million streams
    Austin: 2787.54 million streams
    MAÑANA SERÁ BONITO: 1931.0 million streams
    Proof: 556.05 million streams
    For All The Dogs: 4325.4 million streams
    Autumn Variations: 889.03 million streams
    Proof: 4723.9 million streams
    BORN PINK: 4317.88 million streams
    Future Nostalgia: 4845.19 million streams
    BORN PINK: 4663.73 million streams
    MAÑANA SERÁ BONITO: 4164.84 million streams
    After Hours: 2144.48 million streams
    Eternal Sunshine: 4070.87 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 3242.9 million streams
    For All The Dogs: 2618.05 million streams
    MAÑANA SERÁ BONITO: 171.59 million streams
    Guts: 1073.99 million streams
    Proof: 4253.44 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 2160.53 million streams
    1989 (Taylor's Version): 2176.29 million streams
    Autumn Variations: 1663.63 million streams
    BORN PINK: 1772.23 million streams
    Guts: 956.07 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 4599.85 million streams
    Scarlet: 1827.24 million streams
    BORN PINK: 2247.07 million streams
    Proof: 3874.11 million streams
    Eternal Sunshine: 1131.78 million streams
    Proof: 4970.09 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 4076.97 million streams
    Proof: 2596.35 million streams
    Proof: 1285.9 million streams
    Happier Than Ever: 3186.46 million streams
    Future Nostalgia: 3881.97 million streams
    Austin: 2176.73 million streams
    Scarlet: 3823.16 million streams
    Future Nostalgia: 2167.61 million streams
    For All The Dogs: 3339.32 million streams
    Happier Than Ever: 1106.43 million streams
    Scarlet: 400.6 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 3401.83 million streams
    SOS: 4306.81 million streams
    Guts: 467.03 million streams
    After Hours: 3751.83 million streams
    Happier Than Ever: 4889.6 million streams
    Guts: 2381.52 million streams
    Austin: 3577.51 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 2580.96 million streams
    Proof: 1231.26 million streams
    Happier Than Ever: 729.2 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 4373.63 million streams
    For All The Dogs: 3156.29 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 3386.9 million streams
    1989 (Taylor's Version): 792.92 million streams
    Proof: 2535.1 million streams
    Scarlet: 2787.8 million streams
    Autumn Variations: 2755.47 million streams
    Guts: 3703.51 million streams
    MAÑANA SERÁ BONITO: 1195.79 million streams
    For All The Dogs: 2002.04 million streams
    SOS: 1664.95 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 1604.46 million streams
    For All The Dogs: 3538.29 million streams
    BORN PINK: 1337.83 million streams
    After Hours: 3979.36 million streams
    Happier Than Ever: 4591.27 million streams
    For All The Dogs: 2331.92 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 1411.16 million streams
    Future Nostalgia: 729.32 million streams
    BORN PINK: 2449.16 million streams
    After Hours: 4958.08 million streams
    Proof: 4982.14 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 3703.62 million streams
    After Hours: 2477.66 million streams
    SOS: 1736.76 million streams
    Austin: 4804.77 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 3969.62 million streams
    Austin: 4081.55 million streams
    BORN PINK: 1625.17 million streams
    After Hours: 4432.34 million streams
    MAÑANA SERÁ BONITO: 584.77 million streams
    SOS: 552.07 million streams
    Proof: 568.39 million streams
    Guts: 3537.3 million streams
    After Hours: 4631.59 million streams
    Eternal Sunshine: 68.89 million streams
    Happier Than Ever: 621.77 million streams
    Guts: 270.85 million streams
    For All The Dogs: 3794.46 million streams
    Happier Than Ever: 2407.5 million streams
    Happier Than Ever: 3798.08 million streams
    For All The Dogs: 3154.77 million streams
    Guts: 4373.66 million streams
    Autumn Variations: 2835.28 million streams
    Autumn Variations: 1413.3 million streams
    MAÑANA SERÁ BONITO: 4608.13 million streams
    Scarlet: 3731.43 million streams
    After Hours: 2606.68 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 1004.18 million streams
    MAÑANA SERÁ BONITO: 2347.88 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 1754.03 million streams
    Scarlet: 3254.53 million streams
    Future Nostalgia: 4014.28 million streams
    BORN PINK: 1130.13 million streams
    Eternal Sunshine: 3437.85 million streams
    Happier Than Ever: 3839.1 million streams
    Happier Than Ever: 2121.9 million streams
    Happier Than Ever: 1535.96 million streams
    MAÑANA SERÁ BONITO: 4502.98 million streams
    Guts: 4263.51 million streams
    Scarlet: 317.61 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 450.02 million streams
    After Hours: 2473.41 million streams
    BORN PINK: 3666.76 million streams
    After Hours: 1948.57 million streams
    Autumn Variations: 3449.56 million streams
    1989 (Taylor's Version): 699.47 million streams
    BORN PINK: 2989.92 million streams
    BORN PINK: 3524.25 million streams
    Proof: 2123.19 million streams
    After Hours: 4165.92 million streams
    SOS: 1686.49 million streams
    For All The Dogs: 551.39 million streams
    Scarlet: 3399.99 million streams
    Guts: 1378.13 million streams
    Proof: 4009.5 million streams
    For All The Dogs: 2866.27 million streams
    Future Nostalgia: 2231.41 million streams
    MAÑANA SERÁ BONITO: 3365.73 million streams
    Guts: 2813.8 million streams
    Scarlet: 1637.14 million streams
    For All The Dogs: 2268.09 million streams
    For All The Dogs: 2768.04 million streams
    Guts: 4229.37 million streams
    For All The Dogs: 1739.72 million streams
    1989 (Taylor's Version): 3598.44 million streams
    After Hours: 583.44 million streams
    Eternal Sunshine: 3694.26 million streams
    MAÑANA SERÁ BONITO: 685.49 million streams
    SOS: 1747.15 million streams
    Proof: 4680.78 million streams
    MAÑANA SERÁ BONITO: 3202.54 million streams
    Happier Than Ever: 2140.81 million streams
    Proof: 774.82 million streams
    For All The Dogs: 4330.97 million streams
    MAÑANA SERÁ BONITO: 4785.67 million streams
    Scarlet: 3537.91 million streams
    Future Nostalgia: 4814.25 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 2358.34 million streams
    Scarlet: 2773.29 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 505.13 million streams
    Eternal Sunshine: 4906.61 million streams
    After Hours: 1937.79 million streams
    Scarlet: 2255.51 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 374.09 million streams
    Happier Than Ever: 167.58 million streams
    For All The Dogs: 2067.78 million streams
    1989 (Taylor's Version): 2948.76 million streams
    For All The Dogs: 4119.51 million streams
    Proof: 4575.14 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 3003.44 million streams
    After Hours: 755.15 million streams
    Scarlet: 2770.84 million streams
    Guts: 545.22 million streams
    MAÑANA SERÁ BONITO: 1854.24 million streams
    Proof: 1691.24 million streams
    For All The Dogs: 1022.34 million streams
    Scarlet: 2970.68 million streams
    After Hours: 712.71 million streams
    Happier Than Ever: 838.15 million streams
    1989 (Taylor's Version): 1358.57 million streams
    1989 (Taylor's Version): 2630.8 million streams
    Happier Than Ever: 4496.22 million streams
    Future Nostalgia: 4416.07 million streams
    Autumn Variations: 4065.3 million streams
    1989 (Taylor's Version): 2982.12 million streams
    Eternal Sunshine: 3206.23 million streams
    Future Nostalgia: 2083.3 million streams
    MAÑANA SERÁ BONITO: 390.77 million streams
    Happier Than Ever: 928.24 million streams
    Eternal Sunshine: 2634.12 million streams
    Guts: 4194.09 million streams
    Proof: 985.65 million streams
    MAÑANA SERÁ BONITO: 816.15 million streams
    Austin: 2809.94 million streams
    Austin: 4325.96 million streams
    Austin: 3548.61 million streams
    SOS: 1352.31 million streams
    Proof: 4110.13 million streams
    Proof: 2577.21 million streams
    For All The Dogs: 2005.96 million streams
    SOS: 4086.8 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 408.31 million streams
    Proof: 3861.34 million streams
    Future Nostalgia: 3186.63 million streams
    Eternal Sunshine: 1353.58 million streams
    Guts: 1381.93 million streams
    Scarlet: 4182.96 million streams
    Autumn Variations: 4247.65 million streams
    Proof: 684.82 million streams
    Future Nostalgia: 1612.47 million streams
    Scarlet: 1223.84 million streams
    MAÑANA SERÁ BONITO: 1434.17 million streams
    Eternal Sunshine: 4010.19 million streams
    Eternal Sunshine: 2832.59 million streams
    Scarlet: 1335.86 million streams
    Scarlet: 3266.83 million streams
    Austin: 1468.29 million streams
    Happier Than Ever: 4540.01 million streams
    Autumn Variations: 3915.82 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 3732.18 million streams
    Eternal Sunshine: 2643.71 million streams
    Proof: 2243.64 million streams
    Scarlet: 2725.89 million streams
    BORN PINK: 1582.82 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 4086.13 million streams
    Austin: 2180.65 million streams
    BORN PINK: 3698.73 million streams
    Austin: 1459.15 million streams
    Proof: 2291.2 million streams
    1989 (Taylor's Version): 668.94 million streams
    BORN PINK: 2345.24 million streams
    Eternal Sunshine: 4215.62 million streams
    Austin: 215.88 million streams
    SOS: 258.82 million streams
    SOS: 609.0 million streams
    Austin: 2926.33 million streams
    Future Nostalgia: 4657.7 million streams
    Austin: 1617.86 million streams
    1989 (Taylor's Version): 1290.95 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 2368.55 million streams
    Scarlet: 53.56 million streams
    Austin: 363.54 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 3222.47 million streams
    Scarlet: 998.5 million streams
    Proof: 3603.33 million streams
    Austin: 4694.31 million streams
    MAÑANA SERÁ BONITO: 1118.71 million streams
    Happier Than Ever: 935.54 million streams
    MAÑANA SERÁ BONITO: 942.96 million streams
    SOS: 1657.04 million streams
    Autumn Variations: 2773.68 million streams
    Proof: 4967.39 million streams
    SOS: 4633.32 million streams
    After Hours: 504.93 million streams
    Future Nostalgia: 1536.95 million streams
    Guts: 646.68 million streams
    Proof: 2846.32 million streams
    Future Nostalgia: 1149.32 million streams
    Eternal Sunshine: 2534.02 million streams
    Happier Than Ever: 4985.54 million streams
    For All The Dogs: 1858.07 million streams
    Autumn Variations: 272.14 million streams
    For All The Dogs: 4637.31 million streams
    Future Nostalgia: 3713.06 million streams
    MAÑANA SERÁ BONITO: 3334.47 million streams
    1989 (Taylor's Version): 379.66 million streams
    After Hours: 543.04 million streams
    Eternal Sunshine: 2670.61 million streams
    Happier Than Ever: 4894.01 million streams
    Eternal Sunshine: 4491.02 million streams
    BORN PINK: 4854.16 million streams
    Happier Than Ever: 3540.43 million streams
    Guts: 3611.23 million streams
    BORN PINK: 4117.41 million streams
    1989 (Taylor's Version): 2856.86 million streams
    Nadie Sabe Lo Que Va a Pasar Mañana: 3265.36 million streams
    BORN PINK: 1151.64 million streams
    Scarlet: 4340.54 million streams
    BORN PINK: 2703.99 million streams
    SOS: 4919.96 million streams
    Austin: 1507.38 million streams
    MAÑANA SERÁ BONITO: 2947.97 million streams
    Future Nostalgia: 4418.61 million streams
    MAÑANA SERÁ BONITO: 2642.9 million streams
    SOS: 4320.23 million streams
    Proof: 4804.15 million streams


<br>

## Reflection

Python lists may store a variety of data types and are flexible, sorted, and mutable.  Modification techniques include slicing, appending, and removing.  Filtering algorithms are essential for displaying pertinent products in applications such as e-commerce and demand efficiency analysis.  In order to provide better user experience and application scalability, this analysis is essential for preventing sluggish performance and excessive resource use.
