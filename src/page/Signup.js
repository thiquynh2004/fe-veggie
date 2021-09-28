import { Form, Button } from "react-bootstrap";
import React, { useState } from 'react';
import Apis, { endpoints } from '../configs/Apis';
import { useHistory } from "react-router";
import '../style/signup.css'

export default function Signup() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [comfirmPassword, setComfirmPassword] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const history = useHistory()

    const signup = (event) => {
        event.preventDefault()

        let signupUser = async () => {
            const formData = new FormData()
            formData.append("first_name", firstName)
            formData.append("last_name", lastName)
            formData.append("email", email)
            formData.append("password", password)
            formData.append("username", username)

            try{
                await Apis.post(endpoints['signup'], formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                history.push("/login")
            }catch(err){
                console.error(err)
            }


        }

        if (password !== null && password === comfirmPassword) {
            signupUser()
        }

    }

    return (

        <div className="signup" style={{ marginTop: '100px' }}>
            <h1 className="text-center text-success">ĐĂNG KÍ NGƯỜI DÙNG</h1>
            <Form className = "sign" onSubmit={signup}>
                <SignupForm id="firstName" Label="First Name"
                    type="text" value={firstName}
                    change={(event) => setFirstName(event.target.value)} />
                <SignupForm id="lastName" Label="Last Name" type="text"
                    value={lastName} change={(event) => setLastName(event.target.value)} />
                <SignupForm id="email" Label="Email" type="email"
                    value={email} change={(event) => setEmail(event.target.value)} />
                <SignupForm id="username" Label="UserName" type="text"
                    value={username} change={(event) => setUsername(event.target.value)} />
                <SignupForm id="pasword" Label="Pasword" type="password"
                    value={password} change={(event) => setPassword(event.target.value)} />

                <SignupForm id="comfirmPassword" Label="Confirm Password" type="password"
                    value={comfirmPassword} change={(event) => setComfirmPassword(event.target.value)} />

                <Button variant="primary" type="submit">
                    Đăng Kí
                </Button>
            </Form>

        </div>
    )
}


function SignupForm(props) {
    return (
        <Form.Group className="mb-3" controlId={props.id}>
            <Form.Label>{props.Label}</Form.Label>
            <Form.Control type={props.type}
                value={props.value}
                onChange={props.change} />
        </Form.Group>
    )
}
