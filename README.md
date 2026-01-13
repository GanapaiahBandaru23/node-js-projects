<<<<<<< HEAD
# Todo Application

Given an `app.js` file and an empty database file `todoApplication.db`.

Create a table with the name `todo` with the following columns,

**Todo Table**

| Column   | Type    |
| -------- | ------- |
| id       | INTEGER |
| todo     | TEXT    |
| priority | TEXT    |
| status   | TEXT    |

and write APIs to perform operations on the table `todo`,

<MultiLineNote>
  
  - Replace the spaces in URL with `%20`.
  - Possible values for `priority` are `HIGH`, `MEDIUM`, and `LOW`.
  - Possible values for `status` are `TO DO`, `IN PROGRESS`, and `DONE`.
</MultiLineNote>

### API 1

#### Path: `/todos/`

#### Method: `GET`

- **Scenario 1**

  - **Sample API**
    ```
    /todos/?status=TO%20DO
    ```
  - **Description**:

    Returns a list of all todos whose status is 'TO DO'

  - **Response**

    ```
    [
      {
        id: 1,
        todo: "Watch Movie",
        priority: "LOW",
        status: "TO DO"
      },
      ...
    ]
    ```

- **Scenario 2**

  - **Sample API**
    ```
    /todos/?priority=HIGH
    ```
  - **Description**:

    Returns a list of all todos whose priority is 'HIGH'

  - **Response**

    ```
    [
      {
        id: 2,
        todo: "Learn Node JS",
        priority: "HIGH",
        status: "IN PROGRESS"
      },
      ...
    ]
    ```

- **Scenario 3**

  - **Sample API**
    ```
    /todos/?priority=HIGH&status=IN%20PROGRESS
    ```
  - **Description**:

    Returns a list of all todos whose priority is 'HIGH' and status is 'IN PROGRESS'

  - **Response**

    ```
    [
      {
        id: 2,
        todo: "Learn Node JS",
        priority: "HIGH",
        status: "IN PROGRESS"
      },
      ...
    ]
    ```

- **Scenario 4**

  - **Sample API**
    ```
    /todos/?search_q=Play
    ```
  - **Description**:

    Returns a list of all todos whose todo contains 'Play' text

  - **Response**

    ```
    [
      {
        id: 4,
        todo: "Play volleyball",
        priority: "MEDIUM",
        status: "DONE"
      },
      ...
    ]
    ```

### API 2

#### Path: `/todos/:todoId/`
=======
<<<<<<< HEAD
# Player Match Scores

Given two files `app.js` and a database file `cricketMatchDetails.db` consisting of three tables `player_details`, `match_details` and `player_match_score`.

Write APIs to perform operations on the tables `player_details`, `match_details` and `player_match_score` containing the following columns,

**Player Details Table**

| Column    | Type    |
| ---------- | ------- |
| player_id   | INTEGER |
| player_name | TEXT    |

**Match Details Table**

| Column    | Type    |
| ---------- | ------- |
| match_id   | INTEGER |
| match | TEXT    |
|year|INTEGER|

**Player Match Score Table**

| Column    | Type    |
| ---------- | ------- |
| player_match_id   | INTEGER |
| player_id | INTEGER    |
|match_id|INTEGER|
|score|INTEGER|
|fours | INTEGER |
|sixes | INTEGER |

### API 1

#### Path: `/players/`
=======
<<<<<<< HEAD
# Covid-19 India

Given two files `app.js` and a database file `covid19India.db` consisting of two tables `state` and `district`.

Write APIs to perform CRUD operations on the tables `state`, `district` containing the following columns,

**State Table**

| Columns    | Type    |
| ---------- | ------- |
| state_id   | INTEGER |
| state_name | TEXT    |
| population | INTEGER |

**District Table**

| Columns       | Type    |
| ------------- | ------- |
| district_id   | INTEGER |
| district_name | TEXT    |
| state_id      | INTEGER |
| cases         | INTEGER |
| cured         | INTEGER |
| active        | INTEGER |
| deaths        | INTEGER |

### API 1

#### Path: `/states/`
=======
# Movies

Given two files `app.js` and a database file `moviesData.db` consisting of two tables `movie` and `director`.

Write APIs to perform CRUD operations on the tables `movie`, `director` containing the following columns,

**Movie Table**

| Columns     | Type    |
| ----------- | ------- |
| movie_id    | INTEGER |
| director_id | INTEGER |
| movie_name  | TEXT    |
| lead_actor  | TEXT    |

**Director Table**

| Columns       | Type    |
| ------------- | ------- |
| director_id   | INTEGER |
| director_name | TEXT    |

### API 1

#### Path: `/movies/`
>>>>>>> 5fa32dd151572963e79301063bb2fd5de5e55eb7
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de

#### Method: `GET`

#### Description:

<<<<<<< HEAD
Returns a list of all the players in the player table
=======
<<<<<<< HEAD
Returns a list of all states in the state table
=======
Returns a list of all movie names in the movie table
>>>>>>> 5fa32dd151572963e79301063bb2fd5de5e55eb7
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de

#### Response

```
[
<<<<<<< HEAD
  { 
    playerId: 1,
    playerName: "Ram"
=======
  {
<<<<<<< HEAD
    stateId: 1,
    stateName: "Andaman and Nicobar Islands",
    population: 380581
=======
    movieName: "Captain America: The First Avenger",
>>>>>>> 5fa32dd151572963e79301063bb2fd5de5e55eb7
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de
  },

  ...
]
```

### API 2

<<<<<<< HEAD
#### Path: `/players/:playerId/`
=======
<<<<<<< HEAD
#### Path: `/states/:stateId/`
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de
>>>>>>> 0df8bc9178230be30f4d79eb2ddddadef3eddfca

#### Method: `GET`

#### Description:

<<<<<<< HEAD
Returns a specific todo based on the todo ID
=======
<<<<<<< HEAD
Returns a specific player based on the player ID
=======
Returns a state based on the state ID
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de
>>>>>>> 0df8bc9178230be30f4d79eb2ddddadef3eddfca

#### Response

```
<<<<<<< HEAD
{
  id: 2,
  todo: "Learn JavaScript",
  priority: "HIGH",
  status: "DONE"
=======
<<<<<<< HEAD
{ 
  playerId: 2,
  playerName: "Joseph"
=======
{
  stateId: 8,
  stateName: "Delhi",
  population: 16787941
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de
>>>>>>> 0df8bc9178230be30f4d79eb2ddddadef3eddfca
}
```

### API 3

<<<<<<< HEAD
#### Path: `/todos/`
=======
<<<<<<< HEAD
#### Path: `/players/:playerId/`

#### Method: `PUT`

#### Description:

Updates the details of a specific player based on the player ID
=======
#### Path: `/districts/`
=======
#### Path: `/movies/`
>>>>>>> 5fa32dd151572963e79301063bb2fd5de5e55eb7
>>>>>>> 0df8bc9178230be30f4d79eb2ddddadef3eddfca

#### Method: `POST`

#### Description:

<<<<<<< HEAD
Create a todo in the todo table,
=======
<<<<<<< HEAD
Create a district in the district table, `district_id` is auto-incremented
=======
Creates a new movie in the movie table. `movie_id` is auto-incremented
>>>>>>> 5fa32dd151572963e79301063bb2fd5de5e55eb7
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de
>>>>>>> 0df8bc9178230be30f4d79eb2ddddadef3eddfca

#### Request

```
{
<<<<<<< HEAD
  "id": 10,
  "todo": "Finalize event theme",
  "priority": "LOW",
  "status": "TO DO"
=======
<<<<<<< HEAD
  "playerName": "Raju"
=======
<<<<<<< HEAD
  "districtName": "Bagalkot",
  "stateId": 3,
  "cases": 2323,
  "cured": 2000,
  "active": 315,
  "deaths": 8
=======
  "directorId": 6,
  "movieName": "Jurassic Park",
  "leadActor": "Jeff Goldblum"
>>>>>>> 5fa32dd151572963e79301063bb2fd5de5e55eb7
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de
>>>>>>> 0df8bc9178230be30f4d79eb2ddddadef3eddfca
}
```

#### Response

```
<<<<<<< HEAD
Todo Successfully Added
=======
<<<<<<< HEAD
Player Details Updated
```



### API 4

#### Path: `/matches/:matchId/`
=======
<<<<<<< HEAD
District Successfully Added
```

### API 4

#### Path: `/districts/:districtId/`
=======
Movie Successfully Added
```

### API 3

#### Path: `/movies/:movieId/`
>>>>>>> 5fa32dd151572963e79301063bb2fd5de5e55eb7
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de

#### Method: `GET`

#### Description:

<<<<<<< HEAD
Returns the match details of a specific match
=======
<<<<<<< HEAD
Returns a district based on the district ID
=======
Returns a movie based on the movie ID
>>>>>>> 5fa32dd151572963e79301063bb2fd5de5e55eb7
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de

#### Response

```
<<<<<<< HEAD
{ 
  matchId: 18,
  match: "RR vs SRH",
  year: 2011
=======
{
<<<<<<< HEAD
  districtId: 322,
  districtName: "Haveri",
  stateId: 36,
  cases: 2816,
  cured: 2424,
  active: 172,
  deaths: 220,
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de
}
```

### API 5

<<<<<<< HEAD
#### Path: `/players/:playerId/matches`

#### Method: `GET`

#### Description:

Returns a list of all the matches of a player
=======
#### Path: `/districts/:districtId/`

#### Method: `DELETE`

#### Description:

Deletes a district from the district table based on the district ID
=======
  movieId: 12,
  directorId: 3,
  movieName: "The Lord of the Rings",
  leadActor: "Elijah Wood",
}
>>>>>>> 0df8bc9178230be30f4d79eb2ddddadef3eddfca
```

### API 4

<<<<<<< HEAD
#### Path: `/todos/:todoId/`
=======
#### Path: `/movies/:movieId/`
>>>>>>> 0df8bc9178230be30f4d79eb2ddddadef3eddfca

#### Method: `PUT`

#### Description:

<<<<<<< HEAD
Updates the details of a specific todo based on the todo ID

- **Scenario 1**

  - **Request**
    ```
    {
      "status": "DONE"
    }
    ```
  - **Response**

    ```
    Status Updated
    ```

- **Scenario 2**

  - **Request**
    ```
    {
      "priority": "HIGH"
    }
    ```
  - **Response**

    ```
    Priority Updated
    ```

- **Scenario 3**

  - **Request**
    ```
    {
      "todo": "Some task"
    }
    ```
  - **Response**

    ```
    Todo Updated
    ```

### API 5

#### Path: `/todos/:todoId/`
=======
Updates the details of a movie in the movie table based on the movie ID

#### Request

```
{
  "directorId": 24,
  "movieName": "Thor",
  "leadActor": "Christopher Hemsworth"
}
```
>>>>>>> 5fa32dd151572963e79301063bb2fd5de5e55eb7
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de

#### Response

```
<<<<<<< HEAD
[
  { 
    matchId: 1,
    match: "SRH vs MI",
    year: 2016
  },

  ...
]
```


### API 6

#### Path: `/matches/:matchId/players`
=======
<<<<<<< HEAD
District Removed

```

### API 6

#### Path: `/districts/:districtId/`

#### Method: `PUT`

#### Description:

Updates the details of a specific district based on the district ID

#### Request

```
{
  "districtName": "Nadia",
  "stateId": 3,
  "cases": 9628,
  "cured": 6524,
  "active": 3000,
  "deaths": 104
}
```
=======
Movie Details Updated

```

### API 5

#### Path: `/movies/:movieId/`
>>>>>>> 0df8bc9178230be30f4d79eb2ddddadef3eddfca

#### Method: `DELETE`

#### Description:

<<<<<<< HEAD
Deletes a todo from the todo table based on the todo ID
=======
Deletes a movie from the movie table based on the movie ID
>>>>>>> 5fa32dd151572963e79301063bb2fd5de5e55eb7
>>>>>>> 0df8bc9178230be30f4d79eb2ddddadef3eddfca

#### Response

```
<<<<<<< HEAD
Todo Deleted
=======
<<<<<<< HEAD

District Details Updated

```

### API 7

#### Path: `/states/:stateId/stats/`
=======
Movie Removed
```

### API 6

#### Path: `/directors/`
>>>>>>> 5fa32dd151572963e79301063bb2fd5de5e55eb7
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de

#### Method: `GET`

#### Description:

<<<<<<< HEAD
Returns a list of players of a specific match
=======
<<<<<<< HEAD
Returns the statistics of total cases, cured, active, deaths of a specific state based on state ID
=======
Returns a list of all directors in the director table
>>>>>>> 5fa32dd151572963e79301063bb2fd5de5e55eb7
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de

#### Response

```
<<<<<<< HEAD
[
  { 
    playerId: 2,
    playerName: "Joseph"
  },
=======
<<<<<<< HEAD
{
  totalCases: 724355,
  totalCured: 615324,
  totalActive: 99254,
  totalDeaths: 9777
}

```

### API 8

#### Path: `/districts/:districtId/details/`
=======
[
  {
    directorId: 1,
    directorName: "Joe Johnston",
  },

>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de
  ...
]
```

<<<<<<< HEAD


### API 7

#### Path: `/players/:playerId/playerScores`
=======
### API 7

#### Path: `/directors/:directorId/movies/`
>>>>>>> 5fa32dd151572963e79301063bb2fd5de5e55eb7
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de

#### Method: `GET`

#### Description:

<<<<<<< HEAD
Returns the statistics of the total score, fours, sixes of a specific player based on the player ID
=======
<<<<<<< HEAD
Returns an object containing the state name of a district based on the district ID
=======
Returns a list of all movie names directed by a specific director
>>>>>>> 5fa32dd151572963e79301063bb2fd5de5e55eb7
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de

#### Response

```
<<<<<<< HEAD
{
  playerId: 1,
  playerName: "Ram"
  totalScore: 3453,
  totalFours: 342,
  totalSixes: 98
}

=======
<<<<<<< HEAD

{
  stateName: "Maharashtra"
}

=======
[
  {
    movieName: "Captain Marvel",
  },

  ...
]
>>>>>>> 5fa32dd151572963e79301063bb2fd5de5e55eb7
>>>>>>> cb42690ae20f43f231b1e57be592ded8657760de
>>>>>>> 0df8bc9178230be30f4d79eb2ddddadef3eddfca
```

<br/>

Use `npm install` to install the packages.

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**
