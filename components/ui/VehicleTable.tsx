import React from "react";

const VehicleTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Vehicle No.</th>
          <th>Driver Mob No.</th>
          <th>In Time</th>
          <th>Out Time</th>
          <th>Reason</th>
          <th>Vehicle Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>MH04KR2529</td>
          <td>9137423687</td>
          <td>5:06</td>
          <td>8:01</td>
          <td>Fest Promotion</td>
          <td>Truck</td>
        </tr>
      </tbody>
    </table>
  );
};

export default VehicleTable;
