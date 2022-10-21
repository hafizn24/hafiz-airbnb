## Import Libaries


```python
import numpy as np
import pandas as pd
```

## Import Dataset


```python
airbnb = pd.read_csv('Dataset/Airbnb_Open_Data.csv', low_memory=False)
```

## Basic Information


```python
pd.set_option('display.max_columns', None)
airbnb.head(5)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>NAME</th>
      <th>host id</th>
      <th>host_identity_verified</th>
      <th>host name</th>
      <th>neighbourhood group</th>
      <th>neighbourhood</th>
      <th>lat</th>
      <th>long</th>
      <th>country</th>
      <th>country code</th>
      <th>instant_bookable</th>
      <th>cancellation_policy</th>
      <th>room type</th>
      <th>Construction year</th>
      <th>price</th>
      <th>service fee</th>
      <th>minimum nights</th>
      <th>number of reviews</th>
      <th>last review</th>
      <th>reviews per month</th>
      <th>review rate number</th>
      <th>calculated host listings count</th>
      <th>availability 365</th>
      <th>house_rules</th>
      <th>license</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1001254</td>
      <td>Clean &amp; quiet apt home by the park</td>
      <td>80014485718</td>
      <td>unconfirmed</td>
      <td>Madaline</td>
      <td>Brooklyn</td>
      <td>Kensington</td>
      <td>40.64749</td>
      <td>-73.97237</td>
      <td>United States</td>
      <td>US</td>
      <td>False</td>
      <td>strict</td>
      <td>Private room</td>
      <td>2020.0</td>
      <td>$966</td>
      <td>$193</td>
      <td>10.0</td>
      <td>9.0</td>
      <td>10/19/2021</td>
      <td>0.21</td>
      <td>4.0</td>
      <td>6.0</td>
      <td>286.0</td>
      <td>Clean up and treat the home the way you'd like...</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1002102</td>
      <td>Skylit Midtown Castle</td>
      <td>52335172823</td>
      <td>verified</td>
      <td>Jenna</td>
      <td>Manhattan</td>
      <td>Midtown</td>
      <td>40.75362</td>
      <td>-73.98377</td>
      <td>United States</td>
      <td>US</td>
      <td>False</td>
      <td>moderate</td>
      <td>Entire home/apt</td>
      <td>2007.0</td>
      <td>$142</td>
      <td>$28</td>
      <td>30.0</td>
      <td>45.0</td>
      <td>5/21/2022</td>
      <td>0.38</td>
      <td>4.0</td>
      <td>2.0</td>
      <td>228.0</td>
      <td>Pet friendly but please confirm with me if the...</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1002403</td>
      <td>THE VILLAGE OF HARLEM....NEW YORK !</td>
      <td>78829239556</td>
      <td>NaN</td>
      <td>Elise</td>
      <td>Manhattan</td>
      <td>Harlem</td>
      <td>40.80902</td>
      <td>-73.94190</td>
      <td>United States</td>
      <td>US</td>
      <td>True</td>
      <td>flexible</td>
      <td>Private room</td>
      <td>2005.0</td>
      <td>$620</td>
      <td>$124</td>
      <td>3.0</td>
      <td>0.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>5.0</td>
      <td>1.0</td>
      <td>352.0</td>
      <td>I encourage you to use my kitchen, cooking and...</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1002755</td>
      <td>NaN</td>
      <td>85098326012</td>
      <td>unconfirmed</td>
      <td>Garry</td>
      <td>Brooklyn</td>
      <td>Clinton Hill</td>
      <td>40.68514</td>
      <td>-73.95976</td>
      <td>United States</td>
      <td>US</td>
      <td>True</td>
      <td>moderate</td>
      <td>Entire home/apt</td>
      <td>2005.0</td>
      <td>$368</td>
      <td>$74</td>
      <td>30.0</td>
      <td>270.0</td>
      <td>7/5/2019</td>
      <td>4.64</td>
      <td>4.0</td>
      <td>1.0</td>
      <td>322.0</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>1003689</td>
      <td>Entire Apt: Spacious Studio/Loft by central park</td>
      <td>92037596077</td>
      <td>verified</td>
      <td>Lyndon</td>
      <td>Manhattan</td>
      <td>East Harlem</td>
      <td>40.79851</td>
      <td>-73.94399</td>
      <td>United States</td>
      <td>US</td>
      <td>False</td>
      <td>moderate</td>
      <td>Entire home/apt</td>
      <td>2009.0</td>
      <td>$204</td>
      <td>$41</td>
      <td>10.0</td>
      <td>9.0</td>
      <td>11/19/2018</td>
      <td>0.10</td>
      <td>3.0</td>
      <td>1.0</td>
      <td>289.0</td>
      <td>Please no smoking in the house, porch or on th...</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>




```python
airbnb.info()
```

    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 102599 entries, 0 to 102598
    Data columns (total 26 columns):
     #   Column                          Non-Null Count   Dtype  
    ---  ------                          --------------   -----  
     0   id                              102599 non-null  int64  
     1   NAME                            102349 non-null  object 
     2   host id                         102599 non-null  int64  
     3   host_identity_verified          102310 non-null  object 
     4   host name                       102193 non-null  object 
     5   neighbourhood group             102570 non-null  object 
     6   neighbourhood                   102583 non-null  object 
     7   lat                             102591 non-null  float64
     8   long                            102591 non-null  float64
     9   country                         102067 non-null  object 
     10  country code                    102468 non-null  object 
     11  instant_bookable                102494 non-null  object 
     12  cancellation_policy             102523 non-null  object 
     13  room type                       102599 non-null  object 
     14  Construction year               102385 non-null  float64
     15  price                           102352 non-null  object 
     16  service fee                     102326 non-null  object 
     17  minimum nights                  102190 non-null  float64
     18  number of reviews               102416 non-null  float64
     19  last review                     86706 non-null   object 
     20  reviews per month               86720 non-null   float64
     21  review rate number              102273 non-null  float64
     22  calculated host listings count  102280 non-null  float64
     23  availability 365                102151 non-null  float64
     24  house_rules                     50468 non-null   object 
     25  license                         2 non-null       object 
    dtypes: float64(9), int64(2), object(15)
    memory usage: 20.4+ MB
    

## Null Value


```python
airbnb.isnull().sum()
```




    id                                     0
    NAME                                 250
    host id                                0
    host_identity_verified               289
    host name                            406
    neighbourhood group                   29
    neighbourhood                         16
    lat                                    8
    long                                   8
    country                              532
    country code                         131
    instant_bookable                     105
    cancellation_policy                   76
    room type                              0
    Construction year                    214
    price                                247
    service fee                          273
    minimum nights                       409
    number of reviews                    183
    last review                        15893
    reviews per month                  15879
    review rate number                   326
    calculated host listings count       319
    availability 365                     448
    house_rules                        52131
    license                           102597
    dtype: int64



## Drop Columns


```python
airbnb = airbnb.drop(['id','NAME','host id','host name','lat','long','country','Construction year','reviews per month',
                      'calculated host listings count', 'country code', 'house_rules', 'license', 'last review'], axis=1)
airbnb.isnull().sum()
```




    host_identity_verified    289
    neighbourhood group        29
    neighbourhood              16
    instant_bookable          105
    cancellation_policy        76
    room type                   0
    price                     247
    service fee               273
    minimum nights            409
    number of reviews         183
    review rate number        326
    availability 365          448
    dtype: int64



## Data Preparation

#### Host Indentity Verified


```python
from collections import Counter
```


```python
print(*Counter(airbnb.host_identity_verified))
```

    unconfirmed verified nan
    


```python
airbnb.host_identity_verified = airbnb.host_identity_verified.fillna('unconfirmed')
airbnb.head(5)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>host_identity_verified</th>
      <th>neighbourhood group</th>
      <th>neighbourhood</th>
      <th>instant_bookable</th>
      <th>cancellation_policy</th>
      <th>room type</th>
      <th>price</th>
      <th>service fee</th>
      <th>minimum nights</th>
      <th>number of reviews</th>
      <th>review rate number</th>
      <th>availability 365</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>unconfirmed</td>
      <td>Brooklyn</td>
      <td>Kensington</td>
      <td>False</td>
      <td>strict</td>
      <td>Private room</td>
      <td>$966</td>
      <td>$193</td>
      <td>10.0</td>
      <td>9.0</td>
      <td>4.0</td>
      <td>286.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>verified</td>
      <td>Manhattan</td>
      <td>Midtown</td>
      <td>False</td>
      <td>moderate</td>
      <td>Entire home/apt</td>
      <td>$142</td>
      <td>$28</td>
      <td>30.0</td>
      <td>45.0</td>
      <td>4.0</td>
      <td>228.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>unconfirmed</td>
      <td>Manhattan</td>
      <td>Harlem</td>
      <td>True</td>
      <td>flexible</td>
      <td>Private room</td>
      <td>$620</td>
      <td>$124</td>
      <td>3.0</td>
      <td>0.0</td>
      <td>5.0</td>
      <td>352.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>unconfirmed</td>
      <td>Brooklyn</td>
      <td>Clinton Hill</td>
      <td>True</td>
      <td>moderate</td>
      <td>Entire home/apt</td>
      <td>$368</td>
      <td>$74</td>
      <td>30.0</td>
      <td>270.0</td>
      <td>4.0</td>
      <td>322.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>verified</td>
      <td>Manhattan</td>
      <td>East Harlem</td>
      <td>False</td>
      <td>moderate</td>
      <td>Entire home/apt</td>
      <td>$204</td>
      <td>$41</td>
      <td>10.0</td>
      <td>9.0</td>
      <td>3.0</td>
      <td>289.0</td>
    </tr>
  </tbody>
</table>
</div>



#### Neighbourhood and Neighbourhood Group


```python
print(*Counter(airbnb['neighbourhood group']))
```

    Brooklyn Manhattan brookln manhatan Queens nan Staten Island Bronx
    


```python
airbnb['neighbourhood group'] = airbnb['neighbourhood group'].replace('manhatan', 'Manhattan')
airbnb['neighbourhood group'] = airbnb['neighbourhood group'].replace('brookln', 'Brooklyn')
```


```python
airbnb = airbnb.dropna(subset=['neighbourhood group', 'neighbourhood'])
```


```python
airbnb.isnull().sum()
```




    host_identity_verified      0
    neighbourhood group         0
    neighbourhood               0
    instant_bookable          102
    cancellation_policy        73
    room type                   0
    price                     245
    service fee               273
    minimum nights            407
    number of reviews         183
    review rate number        324
    availability 365          436
    dtype: int64



#### Instant Bookable


```python
print(*Counter(airbnb['instant_bookable']))
```

    False True nan
    


```python
airbnb['instant_bookable'] = airbnb['instant_bookable'].fillna('False')
```


```python
airbnb.isnull().sum()
```




    host_identity_verified      0
    neighbourhood group         0
    neighbourhood               0
    instant_bookable            0
    cancellation_policy        73
    room type                   0
    price                     245
    service fee               273
    minimum nights            407
    number of reviews         183
    review rate number        324
    availability 365          436
    dtype: int64



#### Cancellation Policy


```python
airbnb['cancellation_policy'].unique()
```




    array(['strict', 'moderate', 'flexible', nan], dtype=object)




```python
airbnb['cancellation_policy'].describe()
```




    count       102481
    unique           3
    top       moderate
    freq         34330
    Name: cancellation_policy, dtype: object



<p>Since moderate is the top value, the NaN value will be replaced with moderate</p>


```python
airbnb['cancellation_policy'] = airbnb['cancellation_policy'].fillna('moderate')
airbnb.isnull().sum()
```




    host_identity_verified      0
    neighbourhood group         0
    neighbourhood               0
    instant_bookable            0
    cancellation_policy         0
    room type                   0
    price                     245
    service fee               273
    minimum nights            407
    number of reviews         183
    review rate number        324
    availability 365          436
    dtype: int64



#### Price


```python
airbnb['price']
```




    0           $966 
    1           $142 
    2           $620 
    3           $368 
    4           $204 
               ...   
    102594      $844 
    102595      $837 
    102596      $988 
    102597      $546 
    102598    $1,032 
    Name: price, Length: 102554, dtype: object




```python
airbnb['price'].describe()
```




    count     102309
    unique      1151
    top        $206 
    freq         137
    Name: price, dtype: object




```python
airbnb['price'] = airbnb['price'].replace('[\$,]', '', regex=True).astype(float)
```


```python
airbnb['price']
```




    0          966.0
    1          142.0
    2          620.0
    3          368.0
    4          204.0
               ...  
    102594     844.0
    102595     837.0
    102596     988.0
    102597     546.0
    102598    1032.0
    Name: price, Length: 102554, dtype: float64




```python
airbnb['price'].describe()
```




    count    102309.000000
    mean        625.269693
    std         331.678071
    min          50.000000
    25%         340.000000
    50%         624.000000
    75%         913.000000
    max        1200.000000
    Name: price, dtype: float64




```python
mean = airbnb['price'].mean()
airbnb['price'] = airbnb['price'].fillna(mean)
airbnb.isnull().sum()
```




    host_identity_verified      0
    neighbourhood group         0
    neighbourhood               0
    instant_bookable            0
    cancellation_policy         0
    room type                   0
    price                       0
    service fee               273
    minimum nights            407
    number of reviews         183
    review rate number        324
    availability 365          436
    dtype: int64



#### Service Fee


```python
airbnb['service fee']
```




    0         $193 
    1          $28 
    2         $124 
    3          $74 
    4          $41 
              ...  
    102594    $169 
    102595    $167 
    102596    $198 
    102597    $109 
    102598    $206 
    Name: service fee, Length: 102554, dtype: object




```python
airbnb['service fee'] = airbnb['service fee'].replace('[\$,]', '', regex=True).astype(float)
```


```python
airbnb['service fee']
```




    0         193.0
    1          28.0
    2         124.0
    3          74.0
    4          41.0
              ...  
    102594    169.0
    102595    167.0
    102596    198.0
    102597    109.0
    102598    206.0
    Name: service fee, Length: 102554, dtype: float64




```python
airbnb['service fee'].describe()
```




    count    102281.000000
    mean        125.022135
    std          66.327633
    min          10.000000
    25%          68.000000
    50%         125.000000
    75%         183.000000
    max         240.000000
    Name: service fee, dtype: float64




```python
mean = round(airbnb['service fee'].mean())
airbnb['service fee'] = airbnb['service fee'].fillna(mean)
airbnb.isnull().sum()
```




    host_identity_verified      0
    neighbourhood group         0
    neighbourhood               0
    instant_bookable            0
    cancellation_policy         0
    room type                   0
    price                       0
    service fee                 0
    minimum nights            407
    number of reviews         183
    review rate number        324
    availability 365          436
    dtype: int64



#### Minimum Nights


```python
airbnb['minimum nights'].describe()
```




    count    102147.000000
    mean          8.133249
    std          30.551705
    min       -1223.000000
    25%           2.000000
    50%           3.000000
    75%           5.000000
    max        5645.000000
    Name: minimum nights, dtype: float64




```python
airbnb['minimum nights'] = airbnb['minimum nights'].fillna(3)
airbnb.isnull().sum()
```




    host_identity_verified      0
    neighbourhood group         0
    neighbourhood               0
    instant_bookable            0
    cancellation_policy         0
    room type                   0
    price                       0
    service fee                 0
    minimum nights              0
    number of reviews         183
    review rate number        324
    availability 365          436
    dtype: int64



#### Number of Reviews


```python
airbnb['number of reviews'].describe()
```




    count    102371.000000
    mean         27.460072
    std          49.470095
    min           0.000000
    25%           1.000000
    50%           7.000000
    75%          30.000000
    max        1024.000000
    Name: number of reviews, dtype: float64




```python
airbnb['number of reviews'] = airbnb['number of reviews'].fillna(0)
airbnb.isnull().sum()
```




    host_identity_verified      0
    neighbourhood group         0
    neighbourhood               0
    instant_bookable            0
    cancellation_policy         0
    room type                   0
    price                       0
    service fee                 0
    minimum nights              0
    number of reviews           0
    review rate number        324
    availability 365          436
    dtype: int64



#### Review Rate Number


```python
airbnb['review rate number'].describe()
```




    count    102230.000000
    mean          3.279096
    std           1.284626
    min           1.000000
    25%           2.000000
    50%           3.000000
    75%           4.000000
    max           5.000000
    Name: review rate number, dtype: float64




```python
mean = round(airbnb['review rate number'].mean())
airbnb['review rate number'] = airbnb['review rate number'].fillna(mean)
airbnb.isnull().sum()
```




    host_identity_verified      0
    neighbourhood group         0
    neighbourhood               0
    instant_bookable            0
    cancellation_policy         0
    room type                   0
    price                       0
    service fee                 0
    minimum nights              0
    number of reviews           0
    review rate number          0
    availability 365          436
    dtype: int64



#### Availability 365


```python
airbnb['availability 365'].describe()
```




    count    102118.000000
    mean        141.117139
    std         135.434207
    min         -10.000000
    25%           3.000000
    50%          96.000000
    75%         269.000000
    max        3677.000000
    Name: availability 365, dtype: float64




```python
mean = round(airbnb['availability 365'].mean())
airbnb['availability 365'] = airbnb['availability 365'].fillna(mean)
airbnb['availability 365'] = abs(airbnb['availability 365'])
airbnb.isnull().sum()
```




    host_identity_verified    0
    neighbourhood group       0
    neighbourhood             0
    instant_bookable          0
    cancellation_policy       0
    room type                 0
    price                     0
    service fee               0
    minimum nights            0
    number of reviews         0
    review rate number        0
    availability 365          0
    dtype: int64




```python
airbnb.to_csv('Dataset/Modified Airbnb.csv')
```

# End
