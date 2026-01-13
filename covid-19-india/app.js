const express = require('express')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const path = require('path')

const app = express()
app.use(express.json())

const dbPath = path.join(__dirname, 'covid19India.db')
let db = null

const ConnectDBandServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    console.log('Database Connected Successfully')
    app.listen(3000, () => {
      console.log('Server is connected in http://localhost:3000/')
    })
  } catch (e) {
    console.log(`Error Connecting to the Database is: ${e.message}`)
  }
}
ConnectDBandServer()
//API 1
app.get('/states/', async (req, res) => {
  const query = `SELECT 
  state_id as stateId, 
  state_name as stateName,
  population from State `
  const DBres = await db.all(query)
  res.send(DBres)
})
//API 2
app.get('/states/:ID', async (req, res) => {
  const {ID} = req.params
  const query = `SELECT 
  state_id as stateId, 
  state_name as stateName,
  population from State where state_id = ?`
  const DBres = await db.get(query, ID)
  res.send(DBres)
})

//API 3
app.post('/districts/', async (req, res) => {
  const {districtName, stateId, cases, cured, active, deaths} = req.body
  const Query = `INSERT INTO district (district_name, state_id, cases, cured, active, deaths) VALUES (?, ?, ?, ?, ?, ?)`
  const Values = [districtName, stateId, cases, cured, active, deaths]
  try {
    const DBres = await db.run(Query, Values)
    console.log('District Successfully Added')
    res.send('District Successfully Added')
  } catch (e) {
    console.log(e.message)
  }
})
//API 4
app.get('/districts/:ID/', async (req, res) => {
  const {ID} = req.params
  Query = `select 
  district_id as districtId,
  district_name as districtName,
  state_id as  stateId,
  cases,
  cured,active , deaths 
  FROM District
  WHERE district_id = ?;
  `
  const DBres = await db.get(Query, ID)
  res.send(DBres)
  console.log('succefull')
})
//API 5
app.delete('/districts/:ID/', async (req, res) => {
  const {ID} = req.params
  Query = `DELETE from District WHERE district_id = ?;`
  const DBRes = await db.run(Query, ID)
  res.send('District Removed')
})
//API 6
app.put('/districts/:ID/', async (req, res) => {
  const {ID} = req.params
  const {districtName, stateId, cases, cured, active, deaths} = req.body
  const Query = `UPDATE District SET district_name = ?, state_id = ?, cases = ?, cured = ?, active = ?, deaths = ? WHERE district_id = ?`
  const Values = [districtName, stateId, cases, cured, active, deaths, ID]
  await db.run(Query, Values)
  res.send('District Details Updated')
})
//API 7
app.get('/states/:ID/stats/', async (req, res) => {
  const {ID} = req.params
  const Query = `SELECT SUM(cases) as totalCases , SUM(cured) as totalCured ,SUM(active) as totalActive , SUM(deaths) as totalDeaths from District where state_id = ? ;`

  const DBres = await db.get(Query, ID)
  res.send(DBres)
})
//API 8
app.get('/districts/:ID/details/', async (req, res) => {
  const {ID} = req.params
  const Query =
    'SELECT s.state_name as stateName from State s INNER JOIN District d WHERE district_id = ?;'

  const DBres = await db.get(Query, ID)
  res.send(DBres)
})

module.exports = app
