import React, { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import Apis, { endpoints } from "../configs/Apis";
import "../style/profile.css";
import cookies from "react-cookies";

export default function Profile() {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    let loadedProfile = async () => {
      try {
        let user = await Apis.get(endpoints["current-user"], {
          headers: {
            Authorization: `Bearer ${cookies.load("access_token")}`,
          },
        });
        setProfile(user.data)
        console.log(profile);
        cookies.save("user", user.data);
      } catch (error) {
        console.error(error);
      }
    };
  });
  return (
    <div className="profile">
      <Container className="profile">
        <ListGroup variant="flush">
          <ListGroup.Item>Username: </ListGroup.Item>
          <ListGroup.Item>First Name: </ListGroup.Item>
          <ListGroup.Item>Last Name: </ListGroup.Item>
          <ListGroup.Item>Email: </ListGroup.Item>
          <ListGroup.Item>Phone Number: </ListGroup.Item>
          <ListGroup.Item>Address: </ListGroup.Item>
          <ListGroup.Item>Ngày tham gia: </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}
