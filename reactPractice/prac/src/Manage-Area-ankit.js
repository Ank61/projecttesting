import react from 'react';
import { useState } from 'react';



export default function ManageArea(){
    const [data,setData]=useState([{id: "101"},{id:"102"},{id: "103"},{id:"104"},{id: "105"},{id:"106"},{id: "107"},{id:"108"},{id: "109"},{id:"110"},{id: "115"},{id:"116"}])
return (
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
)
} 