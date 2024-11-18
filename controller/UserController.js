const UserModel = require("../models/UserModel");
const encrypt = require("../util/Encrypt")

const addUser = async (req, res) => {
    // const user = req.body
    // if (user.name == undefined || user.email == undefined || user.age == undefined || user.status == undefined) {
    //     res.status(404).json({
    //         message: "Data is not correct"
    //     })
    // } else {
    //     const saveUser = await userModel.create(req.body);

    //     res.status(201).json({
    //         message: "Success",
    //         data: saveUser
    //     })
    // }

    const hashedPassword = encrypt.encryptPassword(req.body.password);
    const UserObject = Object.aassign(req.body, {
        password: hashedPassword
    })


    const saveUser = await userModel.create(UserObject);
    res.status(201).json({
        message: "Success",
        data: saveUser
    })

}

const getAllUsers = async (req, res) => {
    const users = await userModel.find();
    res.status(200).json({
        msg: "Users Found Successfully",
        data: users
    })
}

const getUserById = async (req, res) => {
    const userId = await userModel.findById(req.params.id)
    if (userId != null || userId != undefined) {
        res.status(200).json({
            msg: "User Fatched Successfully",
            data: userId
        })
    }
    else {
        res.status(404).json({
            msg: "User Not Found"
        })
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const userData = req.body

    const updatedUser = await userModel.findByIdAndUpdate(id, userData)

    res.status(200).json({
        message: "User Updated Successfully",
        data: updatedUser
    })
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const userData = req.body

    const deletedUser = await UserModel.findByIdAndDelete(id, userData);

    if (deletedUser || deletedUser != null) {
        res.status(200).json({
            message: "User Deleted Successfully",
            data: deletedUser
        })
    }
    else {
        res.status(404).json({
            message: "User Not Found To Delete",
        })
    }
}

const getUserByAge = async (req, res) => {

    try {
        const age = req.params.age;
        const userByAge = await userModel.find({ age: age });
        res.status(200).json({
            message: "users filtered by age",
            data: userByAge
        })
    } catch (err) {
        res.status(400).json({
            message: "no user found"
        })
    }
}


module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserByAge
};

