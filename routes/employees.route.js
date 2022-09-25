import express, { request, response } from 'express';
import employees from '../db/utils';

const router = express.Router();

router.get("/:id?", async(request, response, next) => {
    try {
        let { id } = request.params;
        let data;

        if (id) {
            [data] = await employees.findOne(parseInt(id));
        } else {
            data = await employees.findAll();
            //get all users
        }
        response.json(data)
    } catch (error) {
        // response.send().json()
        next(error);
    }
});

router.post("/", async(request, response, next) => {
    try {
        let newEmployee = request.body;
        let data = await employees.addOne(newEmployee);
        response.json(data)
    } catch (error) {
        // response.send().json()
        next(error);
    }
});

router.put("/:id", async (request, response, next) => {
    try {
        let { id } = request.params;
        let updatedEmployee = request.body;
        let data = await employees.updateOne(updatedEmployee, id);
        response.json(data);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (request, response, next) => {
    try {
        let { id } = request.params;
        let data = await employees.removeOne(id);
        response.json(data);
    } catch (err) {
        next (err);
    }
});

export default router;