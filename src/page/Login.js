import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  FloatingLabel,
  Row,
  Col,
  Nav,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import Apis, { endpoints } from "../configs/Apis";
import cookies from "react-cookies";
import "../style/login.css";
// import {Link} from "react-router-dom"
import { useHistory } from "react-router";
import { loginUser } from "../ActionCreators/UserCreators";


export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const history = useHistory();


  const login = async (event) => {
    event.preventDefault();
    try {
      let info = await Apis.get(endpoints["oauth2-info"]);
      await Apis.post(endpoints["login"], {
        client_id: info.data.client_id,
        client_secret: info.data.client_secret,
        username: username,
        password: password,
        grant_type: "password",
      }).then((rp) => {
        cookies.save("access_token", rp.data.access_token);
      });
      let user = await Apis.get(endpoints["current-user"], {
        headers: {
          Authorization: `Bearer ${cookies.load("access_token")}`,
        },
      });

      console.info(user);

      cookies.save("user", user.data);
      dispatch(loginUser(user.data))

      // dispatch({
      //   type: "USER_LOGIN",
      //   payload: user.data,
      // });
      history.push("/")
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="login">
      <Row className="justify-content-md-center">
        <Col md="4" className="login-form">
            <h2 className="title-login">Đăng nhập</h2>

            <Form onSubmit={login}>
              <FloatingLabel
                controlId="floatingUsername"
                label="Username"
                className="mb-3"
                size="sm"
              >
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  size="sm"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                size="sm"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  size="sm"
                />
              </FloatingLabel>
              <div className="bt-login">
              <Button className="btn login" type="submit">
              
                Đăng Nhập
              </Button>
              </div>
            </Form>
            <div className="login-other" style={{textAlign: 'center', marginBottom: '10px'}}>
            <Nav.Link  href="/signup"> {"Bạn chưa có tài khoản? Đăng kí ngay  "}</Nav.Link>
            </div> 
        </Col>
      </Row>
    </Container>
  );
}
