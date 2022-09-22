import express, { request, response, Router } from "express";
import db from "../mockdb";

// import path from "path";
// import router from ".";

const router = express.Router();



/* Read user data
if an id url parameter is provided, get one user
if not , get all users
*/
router.get("/:id?", async(request, response, next) => {
    try {
        let { id } = request.params;
        let data;
        console.log(id);
        if (id) {
            data = await db.getOne(id);
        } else {
            data = await db.getAll();
            //get all users
        }
        response.json(data)
    } catch (error) {
        // response.send().json()
        next(error);
    }
});

/* Create new user
* New user data is sent with 
*/
router.post("/", async(request, response, next) => {
    try {
        let newUser = request.body;
        let data = await db.add(newUser)
        response.json(data);
    } catch (error) {
        next(error);
    }
});

/* Update user
Updated user data is sent with request body
uset to be updated is id url parameter
*/
router.put("/:id", async(request, response, next) => {
    try {
        let { id } = request.params;
    
        // let { body } = request
        let updatedUser = request.body;
        let data = await db.update(id, updatedUser);
        response.json(data);
    } catch (error) {
        next(error);
    }
});

/* Delete user
*User to be deleted is id url parameter
*/
router.delete("/:id", async(request, response, next) => {
    try {
        let { id } = request.params;
        let data = await db.remove(id)
        response.json(data);
    } catch (error) {
        next(error);
    }
});



export default router;