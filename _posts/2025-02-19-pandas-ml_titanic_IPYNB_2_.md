---
layout: post
toc: True
categories: ['CSP Big Idea 2']
title: ML | Titanic Data
description: Exploring the Titanic dataset with machine learning.
courses: {'csp': {'week': 25}}
type: ccc
---

## Introduction to Pandas and ML
> Here is how Mort started on this assignment by asking ChatGPT  ... Regarding Python Pandas, what are some data sets that would be good for learning Pandas?

- There are many data sets that are suitable for learning pandas, depending on your interests and the skills you want to develop. 

    Here are some suggestions...

    - Titanic Dataset: This is a classic dataset for data analysis and machine learning, and is often used as an introduction to pandas. The dataset contains information about passengers on the Titanic, including their demographics, ticket class, and survival status.

    - Iris Dataset: This is another classic dataset that is often used in machine learning and data analysis courses. The dataset contains information about iris flowers, including their sepal length, sepal width, petal length, and petal width.

    - NBA Player Stats: This dataset contains information about NBA players, including their stats for various games, their positions, and their salaries. It is a great dataset for learning how to clean and manipulate data using pandas.

    - Housing Prices Dataset: This dataset contains information about housing prices in a particular city or region, including variables such as the number of bedrooms, square footage, and price. It is a great dataset for learning how to manipulate and analyze numerical data using pandas.

    - COVID-19 Dataset: This dataset contains information about the COVID-19 pandemic, including the number of cases, deaths, and recoveries in various countries and regions. It is a great dataset for learning how to manipulate and analyze time-series data using pandas.

    - World Bank Dataset: This dataset contains information about economic indicators from various countries, such as GDP, population, and poverty rates. It is a great dataset for learning how to manipulate and analyze large datasets using pandas.


- These are just a few examples of the many datasets that are suitable for learning pandas. The best dataset for you will depend on your interests and the specific skills you want to develop.


> Follow up question, "where can I find Titanic data set?"

- The Titanic dataset is a popular dataset for data analysis and machine learning, and it can be found on various websites and data repositories. Here are a few places where you can find the Titanic dataset...

    - Kaggle: The Titanic dataset is available on Kaggle, which is a popular platform for data scientists and machine learning enthusiasts. You can download the dataset from the Kaggle website after creating an account.

    - UCI Machine Learning Repository: The Titanic dataset is also available on the UCI Machine Learning Repository, which is a collection of datasets that are commonly used for machine learning research. You can download the dataset from the UCI Machine Learning Repository website.

    - Seaborn library: If you have the Seaborn library installed in your Python environment, you can load the Titanic dataset directly from the library using the following code:


### Titanic Libraries
Using the Titanic dataset will require importing data.

```python
    import seaborn as sns
    titanic_data = sns.load_dataset('titanic')
```


```python
# Uncomment the following lines to install the required packages
# !pip install seaborn
# !pip install pandas
# !pip install scikit-learn
```

### Titanic Data
> Look at a sample of data.


```python
import seaborn as sns

# Load the titanic dataset
titanic_data = sns.load_dataset('titanic')

print("Titanic Data")


print(titanic_data.columns) # titanic data set
display(titanic_data[['survived','pclass', 'sex', 'age', 'sibsp', 'parch', 'class', 'fare', 'embark_town', 'alone']]) # look at selected columns
```

    Matplotlib is building the font cache; this may take a moment.


    Titanic Data
    Index(['survived', 'pclass', 'sex', 'age', 'sibsp', 'parch', 'fare',
           'embarked', 'class', 'who', 'adult_male', 'deck', 'embark_town',
           'alive', 'alone'],
          dtype='object')



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
      <th>survived</th>
      <th>pclass</th>
      <th>sex</th>
      <th>age</th>
      <th>sibsp</th>
      <th>parch</th>
      <th>class</th>
      <th>fare</th>
      <th>embark_town</th>
      <th>alone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0</td>
      <td>3</td>
      <td>male</td>
      <td>22.0</td>
      <td>1</td>
      <td>0</td>
      <td>Third</td>
      <td>7.2500</td>
      <td>Southampton</td>
      <td>False</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>1</td>
      <td>female</td>
      <td>38.0</td>
      <td>1</td>
      <td>0</td>
      <td>First</td>
      <td>71.2833</td>
      <td>Cherbourg</td>
      <td>False</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1</td>
      <td>3</td>
      <td>female</td>
      <td>26.0</td>
      <td>0</td>
      <td>0</td>
      <td>Third</td>
      <td>7.9250</td>
      <td>Southampton</td>
      <td>True</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1</td>
      <td>1</td>
      <td>female</td>
      <td>35.0</td>
      <td>1</td>
      <td>0</td>
      <td>First</td>
      <td>53.1000</td>
      <td>Southampton</td>
      <td>False</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0</td>
      <td>3</td>
      <td>male</td>
      <td>35.0</td>
      <td>0</td>
      <td>0</td>
      <td>Third</td>
      <td>8.0500</td>
      <td>Southampton</td>
      <td>True</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>886</th>
      <td>0</td>
      <td>2</td>
      <td>male</td>
      <td>27.0</td>
      <td>0</td>
      <td>0</td>
      <td>Second</td>
      <td>13.0000</td>
      <td>Southampton</td>
      <td>True</td>
    </tr>
    <tr>
      <th>887</th>
      <td>1</td>
      <td>1</td>
      <td>female</td>
      <td>19.0</td>
      <td>0</td>
      <td>0</td>
      <td>First</td>
      <td>30.0000</td>
      <td>Southampton</td>
      <td>True</td>
    </tr>
    <tr>
      <th>888</th>
      <td>0</td>
      <td>3</td>
      <td>female</td>
      <td>NaN</td>
      <td>1</td>
      <td>2</td>
      <td>Third</td>
      <td>23.4500</td>
      <td>Southampton</td>
      <td>False</td>
    </tr>
    <tr>
      <th>889</th>
      <td>1</td>
      <td>1</td>
      <td>male</td>
      <td>26.0</td>
      <td>0</td>
      <td>0</td>
      <td>First</td>
      <td>30.0000</td>
      <td>Cherbourg</td>
      <td>True</td>
    </tr>
    <tr>
      <th>890</th>
      <td>0</td>
      <td>3</td>
      <td>male</td>
      <td>32.0</td>
      <td>0</td>
      <td>0</td>
      <td>Third</td>
      <td>7.7500</td>
      <td>Queenstown</td>
      <td>True</td>
    </tr>
  </tbody>
</table>
<p>891 rows × 10 columns</p>
</div>


### Clean Titanic Data
This is called 'Cleaning' data.  

Most analysis, like Machine Learning require data to be in standardized format...
- All data needs to be numeric
- Some data is removed, as it is not useable in study
- Sex and alone is changed to binary 
- The embark data is split into multiple columns



```python
import pandas as pd
# Preprocess the data
from sklearn.preprocessing import OneHotEncoder

td = titanic_data
td.drop(['alive', 'who', 'adult_male', 'class', 'embark_town', 'deck'], axis=1, inplace=True)
td.dropna(inplace=True) # drop rows with at least one missing value, after dropping unuseful columns
td['sex'] = td['sex'].apply(lambda x: 1 if x == 'male' else 0)
td['alone'] = td['alone'].apply(lambda x: 1 if x == True else 0)

# Encode categorical variables
enc = OneHotEncoder(handle_unknown='ignore')
enc.fit(td[['embarked']])
onehot = enc.transform(td[['embarked']]).toarray()
cols = ['embarked_' + val for val in enc.categories_[0]]
td[cols] = pd.DataFrame(onehot)
td.drop(['embarked'], axis=1, inplace=True)
td.dropna(inplace=True) # drop rows with at least one missing value, after preparing the data

print(td.columns)
display(td)
```

    Index(['survived', 'pclass', 'sex', 'age', 'sibsp', 'parch', 'fare', 'alone',
           'embarked_C', 'embarked_Q', 'embarked_S'],
          dtype='object')



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
      <th>survived</th>
      <th>pclass</th>
      <th>sex</th>
      <th>age</th>
      <th>sibsp</th>
      <th>parch</th>
      <th>fare</th>
      <th>alone</th>
      <th>embarked_C</th>
      <th>embarked_Q</th>
      <th>embarked_S</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0</td>
      <td>3</td>
      <td>1</td>
      <td>22.0</td>
      <td>1</td>
      <td>0</td>
      <td>7.2500</td>
      <td>0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>38.0</td>
      <td>1</td>
      <td>0</td>
      <td>71.2833</td>
      <td>0</td>
      <td>1.0</td>
      <td>0.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1</td>
      <td>3</td>
      <td>0</td>
      <td>26.0</td>
      <td>0</td>
      <td>0</td>
      <td>7.9250</td>
      <td>1</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>35.0</td>
      <td>1</td>
      <td>0</td>
      <td>53.1000</td>
      <td>0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0</td>
      <td>3</td>
      <td>1</td>
      <td>35.0</td>
      <td>0</td>
      <td>0</td>
      <td>8.0500</td>
      <td>1</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>705</th>
      <td>0</td>
      <td>2</td>
      <td>1</td>
      <td>39.0</td>
      <td>0</td>
      <td>0</td>
      <td>26.0000</td>
      <td>1</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>706</th>
      <td>1</td>
      <td>2</td>
      <td>0</td>
      <td>45.0</td>
      <td>0</td>
      <td>0</td>
      <td>13.5000</td>
      <td>1</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>707</th>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>42.0</td>
      <td>0</td>
      <td>0</td>
      <td>26.2875</td>
      <td>1</td>
      <td>0.0</td>
      <td>1.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>708</th>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>22.0</td>
      <td>0</td>
      <td>0</td>
      <td>151.5500</td>
      <td>1</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>710</th>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>24.0</td>
      <td>0</td>
      <td>0</td>
      <td>49.5042</td>
      <td>1</td>
      <td>1.0</td>
      <td>0.0</td>
      <td>0.0</td>
    </tr>
  </tbody>
</table>
<p>564 rows × 11 columns</p>
</div>


### Train Titanic Data
The result of 'Training' data is making it easier to analyze or make conclusions.

What conclusions can you make using min, max, means statistics bout the following...
- Given that 1-male and 0-femaale, what gender is more likely to suvive?
- Can you make an conclusions on fare?
- Can you make any conclusions on being alone?

#### Median Values


```python
print(titanic_data.median())
```

    survived       0.0
    pclass         2.0
    sex            1.0
    age           28.0
    sibsp          0.0
    parch          0.0
    fare          16.1
    alone          1.0
    embarked_C     0.0
    embarked_Q     0.0
    embarked_S     1.0
    dtype: float64


#### Perished Mean/Average


```python
print(titanic_data.query("survived == 0").mean())
```

    survived       0.000000
    pclass         2.464072
    sex            0.844311
    age           31.073353
    sibsp          0.562874
    parch          0.398204
    fare          24.835902
    alone          0.616766
    embarked_C     0.185629
    embarked_Q     0.038922
    embarked_S     0.775449
    dtype: float64


#### Survived Mean/Average


```python
print(td.query("survived == 1").mean())
```

    survived       1.000000
    pclass         1.878261
    sex            0.326087
    age           28.481522
    sibsp          0.504348
    parch          0.508696
    fare          50.188806
    alone          0.456522
    embarked_C     0.152174
    embarked_Q     0.034783
    embarked_S     0.813043
    dtype: float64


#### Survived Max and Min Stats


```python
print("maximums for survivors")
print(td.query("survived == 1").max())
print()
print("minimums for survivors")
print(td.query("survived == 1").min())
```

    maximums for survivors
    survived        1.0000
    pclass          3.0000
    sex             1.0000
    age            80.0000
    sibsp           4.0000
    parch           5.0000
    fare          512.3292
    alone           1.0000
    embarked_C      1.0000
    embarked_Q      1.0000
    embarked_S      1.0000
    dtype: float64
    
    minimums for survivors
    survived      1.00
    pclass        1.00
    sex           0.00
    age           0.75
    sibsp         0.00
    parch         0.00
    fare          0.00
    alone         0.00
    embarked_C    0.00
    embarked_Q    0.00
    embarked_S    0.00
    dtype: float64


## Machine Learning 
<a href="https://www.tutorialspoint.com/scikit_learn/scikit_learn_introduction.htm#:~:text=Scikit%2Dlearn%20(Sklearn)%20is,a%20consistence%20interface%20in%20Python">Visit Tutorials Point</a>

> Scikit-learn is a powerful Python library for machine learning, offering tools for classification, regression, clustering, and dimensionality reduction.

- The Titanic dataset is a classic for data analysis and machine learning. We'll use machine learning techniques like Decision Trees and Logistic Regression to predict passenger survival. 

- [Decision Trees](https://scikit-learn.org/stable/modules/tree.html#tree) are a type of model used for both classification and regression. They work by creating a tree-like model of decisions based on the features. For example, in the context of the Titanic dataset, a Decision Tree might make decisions based on features like 'age', 'sex', and 'fare' to predict whether a passenger survived. The tree might first split by 'sex', then for each sex, split by 'age', and so on, creating a tree of decisions.

- [Logistic Regression](https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression) is a statistical model used in machine learning for binary classification problems. It models the probabilities of the default class (e.g., the probability of a passenger surviving, in the context of the Titanic dataset). 

- After training our models, we'll evaluate their performance using accuracy, the percentage of correct predictions on unseen data.


```python
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Build distinct data frames on survived column
X = td.drop('survived', axis=1) # all except 'survived'
y = td['survived'] # only 'survived'

# Split arrays in random train 70%, random test 30%, using stratified sampling (same proportion of survived in both sets) and a fixed random state (42
# The number 42 is often used in examples and tutorials because of its cultural significance in fields like science fiction (it's the "Answer to the Ultimate Question of Life, The Universe, and Everything" in The Hitchhiker's Guide to the Galaxy by Douglas Adams). But in practice, the actual value doesn't matter; what's important is that it's set to a consistent value.
# X_train is the DataFrame containing the features for the training set.
# X_test is the DataFrame containing the features for the test set.
# y-train is the 'survived' status for each passenger in the training set, corresponding to the X_train data.
# y_test is the 'survived' status for each passenger in the test set, corresponding to the X_test data.
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Train a decision tree classifier
dt = DecisionTreeClassifier()
dt.fit(X_train, y_train)

# Test the model
y_pred = dt.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print('DecisionTreeClassifier Accuracy: {:.2%}'.format(accuracy))  

# Train a logistic regression model
logreg = LogisticRegression()
logreg.fit(X_train, y_train)

# Test the model
y_pred = logreg.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print('LogisticRegression Accuracy: {:.2%}'.format(accuracy))  
```

    DecisionTreeClassifier Accuracy: 75.29%
    LogisticRegression Accuracy: 78.82%


    /Users/johnmortensen/nighthawk/portfolio_2025/venv/lib/python3.12/site-packages/sklearn/linear_model/_logistic.py:465: ConvergenceWarning: lbfgs failed to converge (status=1):
    STOP: TOTAL NO. OF ITERATIONS REACHED LIMIT.
    
    Increase the number of iterations (max_iter) or scale the data as shown in:
        https://scikit-learn.org/stable/modules/preprocessing.html
    Please also refer to the documentation for alternative solver options:
        https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression
      n_iter_i = _check_optimize_result(


### Predicting Survival
So, now we are ready to play the game... "Would I have survived the Titanic?".  

Insert your own data in the code.  Look at your analysis and consider how you would travel today.
- Data description:
    - pclass - Passenger Class (1 = 1st; 2 = 2nd; 3 = 3rd)
    - name - Name
    - sex - male or female
    - age - number of year 
    - sibsp - number of Siblings/Spouses Aboard
    - parch - number of Parents/Children Aboard
    - fare - passenger fare 0 to 512
    - embarked - Port of Embarkation (C = Cherbourg; Q = Queenstown; S = Southampton)
    - alone - boolean True or False


```python
import numpy as np

# Logistic regression model is used to predict the probability

# Define a new passenger
passenger = pd.DataFrame({
    'name': ['John Mortensen'],
    'pclass': [2], # 2nd class picked as it was median, bargains are my preference, but I don't want to have poor accomodations
    'sex': ['male'],
    'age': [65],
    'sibsp': [1], # I usually travel with my wife
    'parch': [1], # currenly I have 1 child at home
    'fare': [16.00], # median fare picked assuming it is 2nd class
    'embarked': ['S'], # majority of passengers embarked in Southampton
    'alone': [False] # travelling with family (spouse and child))
})

display(passenger)
new_passenger = passenger.copy()

# Preprocess the new passenger data
new_passenger['sex'] = new_passenger['sex'].apply(lambda x: 1 if x == 'male' else 0)
new_passenger['alone'] = new_passenger['alone'].apply(lambda x: 1 if x == True else 0)

# Encode 'embarked' variable
onehot = enc.transform(new_passenger[['embarked']]).toarray()
cols = ['embarked_' + val for val in enc.categories_[0]]
new_passenger[cols] = pd.DataFrame(onehot, index=new_passenger.index)
new_passenger.drop(['name'], axis=1, inplace=True)
new_passenger.drop(['embarked'], axis=1, inplace=True)

display(new_passenger)

# Predict the survival probability for the new passenger
dead_proba, alive_proba = np.squeeze(logreg.predict_proba(new_passenger))

# Print the survival probability
print('Death probability: {:.2%}'.format(dead_proba))  
print('Survival probability: {:.2%}'.format(alive_proba))
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
      <th>name</th>
      <th>pclass</th>
      <th>sex</th>
      <th>age</th>
      <th>sibsp</th>
      <th>parch</th>
      <th>fare</th>
      <th>embarked</th>
      <th>alone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>John Mortensen</td>
      <td>2</td>
      <td>male</td>
      <td>65</td>
      <td>1</td>
      <td>1</td>
      <td>16.0</td>
      <td>S</td>
      <td>False</td>
    </tr>
  </tbody>
</table>
</div>



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
      <th>pclass</th>
      <th>sex</th>
      <th>age</th>
      <th>sibsp</th>
      <th>parch</th>
      <th>fare</th>
      <th>alone</th>
      <th>embarked_C</th>
      <th>embarked_Q</th>
      <th>embarked_S</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2</td>
      <td>1</td>
      <td>65</td>
      <td>1</td>
      <td>1</td>
      <td>16.0</td>
      <td>0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
  </tbody>
</table>
</div>


    Death probability: 90.89%
    Survival probability: 9.11%


### Improve your chances
Is there anything you could do to improve your chances? 


```python
# Decision tree model is used to determine the importance of each feature

importances = dt.feature_importances_
for feature, importance in zip(new_passenger.columns, importances):
    print(f'The importance of {feature} is: {importance}')
```

    The importance of pclass is: 0.15079115953493002
    The importance of sex is: 0.27345943069742495
    The importance of age is: 0.23920011105434624
    The importance of sibsp is: 0.05411073601351371
    The importance of parch is: 0.013914855333419261
    The importance of fare is: 0.23936320058241756
    The importance of alone is: 0.004181924322029404
    The importance of embarked_C is: 0.01202303242583453
    The importance of embarked_Q is: 0.0
    The importance of embarked_S is: 0.012955550036084264


## Building a Python Application

### Building a Backend Model
The code above needs to be reformed into a Model.  This Python Class is resturctured to follow Modlel, View (JavaScript), Control (Python API) paradigm.

Be sure to add to the model and "Improve your chances" interface.


```python
## Python Titanic Model, prepared for a titanic.py file

# Import the required libraries for the TitanicModel class
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
import pandas as pd
import numpy as np
import seaborn as sns

class TitanicModel:
    """A class used to represent the Titanic Model for passenger survival prediction.
    """
    # a singleton instance of TitanicModel, created to train the model only once, while using it for prediction multiple times
    _instance = None
    
    # constructor, used to initialize the TitanicModel
    def __init__(self):
        # the titanic ML model
        self.model = None
        self.dt = None
        # define ML features and target
        self.features = ['pclass', 'sex', 'age', 'sibsp', 'parch', 'fare', 'alone']
        self.target = 'survived'
        # load the titanic dataset
        self.titanic_data = sns.load_dataset('titanic')
        # one-hot encoder used to encode 'embarked' column
        self.encoder = OneHotEncoder(handle_unknown='ignore')

    # clean the titanic dataset, prepare it for training
    def _clean(self):
        # Drop unnecessary columns
        self.titanic_data.drop(['alive', 'who', 'adult_male', 'class', 'embark_town', 'deck'], axis=1, inplace=True)

        # Convert boolean columns to integers
        self.titanic_data['sex'] = self.titanic_data['sex'].apply(lambda x: 1 if x == 'male' else 0)
        self.titanic_data['alone'] = self.titanic_data['alone'].apply(lambda x: 1 if x == True else 0)

        # Drop rows with missing 'embarked' values before one-hot encoding
        self.titanic_data.dropna(subset=['embarked'], inplace=True)
        
        # One-hot encode 'embarked' column
        onehot = self.encoder.fit_transform(self.titanic_data[['embarked']]).toarray()
        cols = ['embarked_' + str(val) for val in self.encoder.categories_[0]]
        onehot_df = pd.DataFrame(onehot, columns=cols)
        self.titanic_data = pd.concat([self.titanic_data, onehot_df], axis=1)
        self.titanic_data.drop(['embarked'], axis=1, inplace=True)

        # Add the one-hot encoded 'embarked' features to the features list
        self.features.extend(cols)
        
        # Drop rows with missing values
        self.titanic_data.dropna(inplace=True)

    # train the titanic model, using logistic regression as key model, and decision tree to show feature importance
    def _train(self):
        # split the data into features and target
        X = self.titanic_data[self.features]
        y = self.titanic_data[self.target]
        
        # perform train-test split
        self.model = LogisticRegression(max_iter=1000)
        
        # train the model
        self.model.fit(X, y)
        
        # train a decision tree classifier
        self.dt = DecisionTreeClassifier()
        self.dt.fit(X, y)
        
    @classmethod
    def get_instance(cls):
        """ Gets, and conditionaly cleans and builds, the singleton instance of the TitanicModel.
        The model is used for analysis on titanic data and predictions on the survival of theoritical passengers.
        
        Returns:
            TitanicModel: the singleton _instance of the TitanicModel, which contains data and methods for prediction.
        """        
        # check for instance, if it doesn't exist, create it
        if cls._instance is None:
            cls._instance = cls()
            cls._instance._clean()
            cls._instance._train()
        # return the instance, to be used for prediction
        return cls._instance

    def predict(self, passenger):
        """ Predict the survival probability of a passenger.

        Args:
            passenger (dict): A dictionary representing a passenger. The dictionary should contain the following keys:
                'pclass': The passenger's class (1, 2, or 3)
                'sex': The passenger's sex ('male' or 'female')
                'age': The passenger's age
                'sibsp': The number of siblings/spouses the passenger has aboard
                'parch': The number of parents/children the passenger has aboard
                'fare': The fare the passenger paid
                'embarked': The port at which the passenger embarked ('C', 'Q', or 'S')
                'alone': Whether the passenger is alone (True or False)

        Returns:
           dictionary : contains die and survive probabilities 
        """
        # clean the passenger data
        passenger_df = pd.DataFrame(passenger, index=[0])
        passenger_df['sex'] = passenger_df['sex'].apply(lambda x: 1 if x == 'male' else 0)
        passenger_df['alone'] = passenger_df['alone'].apply(lambda x: 1 if x == True else 0)
        onehot = self.encoder.transform(passenger_df[['embarked']]).toarray()
        cols = ['embarked_' + str(val) for val in self.encoder.categories_[0]]
        onehot_df = pd.DataFrame(onehot, columns=cols)
        passenger_df = pd.concat([passenger_df, onehot_df], axis=1)
        passenger_df.drop(['embarked', 'name'], axis=1, inplace=True)
        
        # predict the survival probability and extract the probabilities from numpy array
        die, survive = np.squeeze(self.model.predict_proba(passenger_df))
        # return the survival probabilities as a dictionary
        return {'die': die, 'survive': survive}
    
    def feature_weights(self):
        """Get the feature weights
        The weights represent the relative importance of each feature in the prediction model.

        Returns:
            dictionary: contains each feature as a key and its weight of importance as a value
        """
        # extract the feature importances from the decision tree model
        importances = self.dt.feature_importances_
        # return the feature importances as a dictionary, using dictionary comprehension
        return {feature: importance for feature, importance in zip(self.features, importances)} 
    
def initTitanic():
    """ Initialize the Titanic Model.
    This function is used to load the Titanic Model into memory, and prepare it for prediction.
    """
    TitanicModel.get_instance()
    
def testTitanic():
    """ Test the Titanic Model
    Using the TitanicModel class, we can predict the survival probability of a passenger.
    Print output of this test contains method documentation, passenger data, survival probability, and survival weights.
    """
     
    # setup passenger data for prediction
    print(" Step 1:  Define theoritical passenger data for prediction: ")
    passenger = {
        'name': ['John Mortensen'],
        'pclass': [2],
        'sex': ['male'],
        'age': [65],
        'sibsp': [1],
        'parch': [1],
        'fare': [16.00],
        'embarked': ['S'],
        'alone': [False]
    }
    print("\t", passenger)
    print()

    # get an instance of the cleaned and trained Titanic Model
    titanicModel = TitanicModel.get_instance()
    print(" Step 2:", titanicModel.get_instance.__doc__)
   
    # print the survival probability
    print(" Step 3:", titanicModel.predict.__doc__)
    probability = titanicModel.predict(passenger)
    print('\t death probability: {:.2%}'.format(probability.get('die')))  
    print('\t survival probability: {:.2%}'.format(probability.get('survive')))
    print()
    
    # print the feature weights in the prediction model
    print(" Step 4:", titanicModel.feature_weights.__doc__)
    importances = titanicModel.feature_weights()
    for feature, importance in importances.items():
        print("\t\t", feature, f"{importance:.2%}") # importance of each feature, each key/value pair
        
if __name__ == "__main__":
    print(" Begin:", testTitanic.__doc__)
    testTitanic()
```

     Begin:  Test the Titanic Model
        Using the TitanicModel class, we can predict the survival probability of a passenger.
        Print output of this test contains method documentation, passenger data, survival probability, and survival weights.
        
     Step 1:  Define theoritical passenger data for prediction: 
    	 {'name': ['John Mortensen'], 'pclass': [2], 'sex': ['male'], 'age': [65], 'sibsp': [1], 'parch': [1], 'fare': [16.0], 'embarked': ['S'], 'alone': [False]}
    
     Step 2:  Gets, and conditionaly cleans and builds, the singleton instance of the TitanicModel.
            The model is used for analysis on titanic data and predictions on the survival of theoritical passengers.
            
            Returns:
                TitanicModel: the singleton _instance of the TitanicModel, which contains data and methods for prediction.
            
     Step 3:  Predict the survival probability of a passenger.
    
            Args:
                passenger (dict): A dictionary representing a passenger. The dictionary should contain the following keys:
                    'pclass': The passenger's class (1, 2, or 3)
                    'sex': The passenger's sex ('male' or 'female')
                    'age': The passenger's age
                    'sibsp': The number of siblings/spouses the passenger has aboard
                    'parch': The number of parents/children the passenger has aboard
                    'fare': The fare the passenger paid
                    'embarked': The port at which the passenger embarked ('C', 'Q', or 'S')
                    'alone': Whether the passenger is alone (True or False)
    
            Returns:
               dictionary : contains die and survive probabilities 
            
    	 death probability: 93.46%
    	 survival probability: 6.54%
    
     Step 4: Get the feature weights
            The weights represent the relative importance of each feature in the prediction model.
    
            Returns:
                dictionary: contains each feature as a key and its weight of importance as a value
            
    		 pclass 11.87%
    		 sex 29.65%
    		 age 24.34%
    		 sibsp 5.96%
    		 parch 2.03%
    		 fare 22.13%
    		 alone 0.68%
    		 embarked_C 0.43%
    		 embarked_Q 0.79%
    		 embarked_S 2.13%


### Building a Backend API
API code is then created to work with the Model.   This example is in imperitive style.  This is unlike the object style we use in user.py.   Teacher suggestion is to adapt this to style you are using in your code base. 

Be sure to resturcture this code to work well with you Web applications frontend.  The dictionary keys you pass into the TitanicModel.predict() must match the requirements shown in the docstring comments of the predict method.


```python
## Python Titanic Sample API endpoint
from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource # used for REST API building

# Import the TitanicModel class from the model file
# from model.titanic import TitanicModel

titanic_api = Blueprint('titanic_api', __name__,
                   url_prefix='/api/titanic')

api = Api(titanic_api)
class TitanicAPI:
    class _Predict(Resource):
        
        def post(self):
            """ Semantics: In HTTP, POST requests are used to send data to the server for processing.
            Sending passenger data to the server to get a prediction fits the semantics of a POST request.
            
            POST requests send data in the body of the request...
            1. which can handle much larger amounts of data and data types, than URL parameters
            2. using an HTTPS request, the data is encrypted, making it more secure
            3. a JSON formated body is easy to read and write between JavaScript and Python, great for Postman testing
            """     
            # Get the passenger data from the request
            passenger = request.get_json()

            # Get the singleton instance of the TitanicModel
            titanicModel = TitanicModel.get_instance()
            # Predict the survival probability of the passenger
            response = titanicModel.predict(passenger)

            # Return the response as JSON
            return jsonify(response)

    api.add_resource(_Predict, '/predict')

```


    ---------------------------------------------------------------------------

    ModuleNotFoundError                       Traceback (most recent call last)

    Cell In[12], line 2
          1 ## Python Titanic Sample API endpoint
    ----> 2 from flask import Blueprint, request, jsonify
          3 from flask_restful import Api, Resource # used for REST API building
          5 # Import the TitanicModel class from the model file
          6 # from model.titanic import TitanicModel


    ModuleNotFoundError: No module named 'flask'


### Register and init in main.py
As with all API's it will be necessary to register your APIs.  This is following same pattern as importing and then registering the blueprint.

```python
app.register_blueprint(titanic_api) # register api routes
```

Additionally, the initTitanic method was made in the model to be included with generate_data commands.  This makes sure that the Titanic model is loaded at startup, avoiding cleaning and training delays for each prediction.

```python
@custom_cli.command('generate_data')
def generate_data():
    initUsers()
    initPlayers()
    initTitanic() # init titanic data
```
