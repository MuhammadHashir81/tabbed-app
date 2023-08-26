import React, { useState } from 'react';
import './App.css';
import Papa from 'papaparse';

const App = () => {
  const [state, setState] = useState(1);
  const [userData, setUserData] = useState([]);

  const fetchData = () => {
    // Fetch the CSV file
    fetch(process.env.PUBLIC_URL + '/user_data.csv')
      .then((response) => response.text())
      .then((csvString) => {
        // Parse the CSV data
        Papa.parse(csvString, {
          header: true,
          complete: (result) => {
            setUserData(result.data);
          },
        });
      });
  };
  const fetchSecondData = () => {
    // Fetch the CSV file
    fetch(process.env.PUBLIC_URL + '/user_second_data.csv')
      .then((response) => response.text())
      .then((csvString) => {
        // Parse the CSV data
        Papa.parse(csvString, {
          header: true,
          complete: (result) => {
            setUserData(result.data);
          },
        });
      });
  };
  const fetchThirdData = () => {
    // Fetch the CSV file
    fetch(process.env.PUBLIC_URL + '/user_third_data.csv')
      .then((response) => response.text())
      .then((csvString) => {
        // Parse the CSV data
        Papa.parse(csvString, {
          header: true,
          complete: (result) => {
            setUserData(result.data);
          },
        });
      });
  };

  const action = (index) => {
    setState(index);
    if (index === 1) {
      fetchData(); 
    }
    else if(index === 2){
      fetchSecondData()
    }
    else if( index === 3){
      fetchThirdData()

    }
  };

  return (
    <div className='App'>
      
        <div className="tabs">
          <div className={`${state === 1 ? 'tab active-tab' : 'tab'}`} onClick={() => action(1)}>
            tab1
          </div>
          <div className={`${state === 2 ? 'tab active-tab' : 'tab'}`} onClick={() => action(2)}>
            tab2
          </div>
          <div className={`${state === 3 ? 'tab active-tab' : 'tab'}`} onClick={() => action(3)}>
            tab3
          </div>
        </div>

        {/* contents */}
        <div className="contents">
          <div className={`${state === 1 ? 'active-content ' : 'content'}`}>
            {userData.length > 0 && (
               <div className='box'>
              <table className={`${state === 1 ? 'active-content ' : 'content'}`}>
                <thead >
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user, index) => (
                    <tr key={index}>
                      <td className='table-cell text-center border border-bottom' >{user.Name}</td>
                      <td className='table-cell text-center border border-bottom'>{user.Email}</td>
                      <td className='table-cell text-center border border-bottom'>{user.Age}</td>
                    </tr>
                  ))}
              
                </tbody>
              </table>
              </div>
            )}
          </div>
          <div className={`${state === 2 ? 'active-content ' : 'content'}`}>
            {userData.length > 0 && (
              <div className="box">
              <table className={`${state === 2 ? 'active-content ' : 'content'}`}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user, index) => (
                    <tr key={index}>
                      <td className='table-cell text-center border border-bottom' >{user.Name}</td>
                      <td className='table-cell text-center border border-bottom'>{user.Email}</td>
                      <td className='table-cell text-center border border-bottom'>{user.Age}</td>
                    </tr>
                  ))}
              
                </tbody>
              </table>
              </div>
            )}
          </div>
          <div className={`${state === 3 ? 'active-content ' : 'content'}`}>
            {userData.length > 0 && (
              <div className="box">
              <table className={`${state === 3 ? 'active-content ' : 'content'}`}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user, index) => (
                    <tr key={index}>
                      <td className='table-cell text-center border border-bottom' >{user.Name}</td>
                      <td className='table-cell text-center border border-bottom'>{user.Email}</td>
                      <td className='table-cell text-center border border-bottom'>{user.Age}</td>
                    </tr>
                  ))}
              
                </tbody>
              </table>
              </div>
            )}
          </div>
        </div>
      
    </div>
  );
}

export default App;
