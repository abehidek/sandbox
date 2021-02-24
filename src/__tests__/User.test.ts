import request from 'supertest'
import { app } from '../app' 

describe("User", ()=>{

    request(app).post("/user")
    .send({
        email: "user@example.com",
        name: "User Example"
    })
})