import { useEffect, useRef, useState } from 'react';
import React from 'react';
import './App.css';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import CustomTab from '../components/custom-tab';
import UserData from './Data.json'


const UserDatacolumns = [
  {name: 'id',header: 'Id',minWidth: 50,maxWidth: 100, defaultFlex: 1},
  { name: 'name', header: 'Name', minWidth: 50,maxWidth: 200, defaultFlex: 2 },
  { name: 'email', header: 'Email', maxWidth: 500, defaultFlex: 2 },
  { name: 'work_email', header: 'Work Email', maxWidth: 500, defaultFlex: 2 },
  {name: 'phone_number', header: 'Phone Number', maxWidth: 300,defaultFlex: 2}
]

const UserScorecolumns = [
  { name: 'id', header: 'ID', minWidth: 50, defaultFlex: 1 },
  { name: 'scores', header: 'Scores', maxWidth: 1000, defaultFlex: 2 },
  { name: 'percentage', header: 'Percentage', maxWidth: 1000, defaultFlex: 2 }
]

const gridStyle = { minHeight: 550 }

// const userdata = [
//   { id: 1, name: 'John McQueen', age: 35, gender: 'Male'},
//   { id: 2, name: 'Mary Stones', age: 25 , gender: 'Female'},
//   { id: 3, name: 'Robert Fil', age: 27, gender: 'Male' },
//   { id: 4, name: 'Roger Robson', age: 81, gender: 'Male' },
//   { id: 5, name: 'Billary Konwik', age: 18, gender: 'Male' }
// ]

const userdata = UserData

const userScore = [
  { id: 1, scores: 46, percentage: `${Math.floor((46/80)*100)}%`},
  { id: 2, scores: 64, percentage: `${Math.floor((64/80)*100)}%` },
  { id: 3, scores: 57, percentage: `${Math.floor((57/80)*100)}%`},
  { id: 4, scores: 51, percentage: `${Math.floor((51/80)*100)}%` },
  { id: 5, scores: 42, percentage: `${Math.floor((42/80)*100)}%` }
]

function App() {
  const [count, setCount] = useState(0)
  const [DataSource,setDataSource] = useState([])
  const [Columns, setColumns] = useState([])
 
  useEffect(()=>{
    setDataSource(userdata)
    setColumns(UserDatacolumns)
  },[])
  console.log("Rerender")
  function displayGrid(index){
    if(index == 1){
      console.log("Index called: ",index)
      setDataSource(userdata)
      setColumns(UserDatacolumns)
    }
    if(index == 2){
      console.log("Index called: ",index)
      setDataSource(userScore)
      setColumns(UserScorecolumns)
    }
  }
  
  let tableTitle = ['User', 'User-Roles','User-PI','User-Subscriptions', 'User-Attendence']

  function displayTabs(){
    console.log("Inside display tabs")
    let tempArr = []
    for (let i = 0; i < 5; i++) {
      tempArr.push(
        <div className='tabs'
          onClick={()=>{
            displayGrid(i+1)
          }}
        >
          <CustomTab
            key= {i}
            title = {`${tableTitle[i]}`}
            indexVal = {i+1}
          />
        </div>  
      )
      console.log(tempArr)
    }
    return tempArr
  }
  return (
    <>
      <div className='react-data-grid-container'>
        <ReactDataGrid
          idProperty="id"
          columns={Columns}
          dataSource={DataSource}
          style={gridStyle}
          className='react-data-grid'
        />
        <div className='datagrid-tabs'>
          <div className='TabList'> 
            {
              displayTabs()
            } 
          </div>
        </div>
      </div>
    </>
  )
}

export default App
