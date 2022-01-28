import React, {useEffect} from 'react';
import Router from './Route/Routes'

import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({
  name: 'test'
});

export default function App(){

  const createTable = () =>{
    db.transaction(transac => {

      //transac.executeSql('DROP TABLE IF EXISTS tickets');

      transac.executeSql(
        `CREATE TABLE IF NOT EXISTS tickets (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          ticketTitle VARCHAR(20),
          customerName VARCHAR(100),
          customerNumber VARCHAR(20),
          schedule VARCHAR(20),
          address VARCHAR(20),
          distance VARCHAR(20),
          dispatchNote VARCHAR(100),
          departmentClass VARCHAR(20),
          serviceType VARCHAR(20),
          reason VARCHAR(20)
        )`,
        [],
        (sqltranx, resp) => {
          console.log('table created successfully!!')
        },
        error => {
          console.log('error creating table '+ error.message)
        },
      );
    });
  }


  useEffect(() => {
    createTable();
  },[])

  return (
    <Router />
  )
};
