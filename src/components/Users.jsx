import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Image</th>
            <th>Height</th>
            <th>Weight</th>
            <th>City</th>
            <th>Lat</th>
            <th>Lng</th>
            <th>Card Expire</th>
            <th>CompanyName</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.birthDate}</td>
                <td>
                  <img
                    style={{ width: "3rem", height: "2rem" }}
                    src={user.image}
                    alt=""
                  />
                </td>
                <td>{user.height}</td>
                <td>{user.weight}</td>
                <td>{user.address.city}</td>
                <td>{user.address.coordinates.lat}</td>
                <td>{user.address.coordinates.lng}</td>
                <td>{user.bank.cardExpire}</td>
                <td>{user.company.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

// Data" s to fetch from API
// FirstName
// LastName
// Age
// Gender
// Email
// Phone
// UserName
// DOB
// Image
// Height
// Weight
// City
// Lat
// Lng
// Card Expire
// CompanyName

// id, firstname,  lastname, age, gender, email, phone, username, birthDate, image, height, weight,
// address:{city, coordinates : {lat, lng}}, bank: {cardExpire}, company : {name}
