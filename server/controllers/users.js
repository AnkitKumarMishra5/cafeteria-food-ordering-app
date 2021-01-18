import User from '../models/User';

export const getUsers = async (req, res) =>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

export const createUser = async (req,res) =>{
    const { fullName, orgName, employeeID, email, mobile, idCard, password} = req.body;

    const newUser = new User({ fullName, orgName, employeeID, email, mobile, idCard, password});

    try{
        await newUser.save();
        res.status(201).json(newUser);
    } catch(error) {
        res.status(400).json({message: error.message})
    }
}