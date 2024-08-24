import React from 'react';
import './styling.css';

const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
     </tr>
     </thead>
     <tbody>
     {sat.map((satellite) => (
     <tr key={satellite.id}>
            <td>{satellite.name}</td>
            <td>{satellite.orbitType}</td>
            <td>{satellite.launchDate}</td>
            <td>{satellite.operational ? 'Active' : 'Inactive'}</td>

     </tr>
     ))}
     </tbody>
   </table>
  );
};

export default Table;