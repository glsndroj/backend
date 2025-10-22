import { User } from "../models/user.js"

export const createUser = async (req, res) => {
    try {
        const result = await User.create({
            username: req.body.username,
            lastname: req.body.lastname,
            phonenumber: req.body.phonenumber,
            age: req.body.age,
            gender: req.body.gender,
        })
        console.log(result, "result")
        res.send(result)
    } catch (error) {
        console.log(error)
        res.send(error)
        
    }

}

export const getUser = async (req, res) => {
    try {
        const result = await User.find({
            
        })
        console.log(result, "Find result ")
        res.send(result)
    } catch (error) {
        console.log(error)
        res.send(error)
        
    }

}

export const getUsersById = async (req, res) => {
    try {
        const result = await User.findById(id)
        console.log(result, "result")
        res.send(result)
    } catch (error) {
        console.log(error)
        res.send(error)
        
    }

}