const multer = require("multer");
const UserModel = require("../models/UserModel");
const encrypt = require("../util/Encrypt")
const tokenutil = require("../util/TokenUtil")
const cloudinary = require("./CloudinaryController")
const mailer = require("../util/MailUtil")

const addUser = async (req, res) => {
    // const user = req.body
    // if (user.name == undefined || user.email == undefined || user.age == undefined || user.status == undefined) {
    //     res.status(404).json({
    //         message: "Data is not correct"
    //     })
    // } else {
    //     const saveUser = await UserModel.create(req.body);

    //     res.status(201).json({
    //         message: "Success",
    //         data: saveUser
    //     })
    // }

    const hashedPassword = encrypt.encryptPassword(req.body.password);
    const UserObject = Object.assign(req.body, {
        password: hashedPassword
    })


    const saveUser = await UserModel.create(UserObject);
    await mailer.sendMail(saveUser.email, "Greeting Mail To New User", `Hello Mr/Mrs ${saveUser.name} , Welcome To Our App`)
    res.status(201).json({
        message: "Success",
        data: saveUser
    })

}

const getAllUsers = async (req, res) => {
    const users = await UserModel.find();
    res.status(200).json({
        msg: "Users Found Successfully",
        data: users
    })
}

const getUserById = async (req, res) => {
    const userId = await UserModel.findById(req.params.id)
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

    const updatedUser = await UserModel.findByIdAndUpdate(id, userData)

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
        const userByAge = await UserModel.find({ age: age });
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
const loginUser = async (req, res) => {

    try {
        const email = req.body.email;
        const password = req.body.password;

        const UserEmail = await UserModel.findOne({ email: email })

        if (UserEmail) {
            const isPasswordMatches = encrypt.comparePassword(password, UserEmail.password)

            if (isPasswordMatches == true) {
                const token = tokenutil.generateToken(UserEmail.toObject());

                res.status(200).json({
                    message: "Login Success",
                    data: token,
                })
            } else {
                res.status(400).json({
                    message: "Invalid Password"
                })
            }
        }
        else {
            res.status(400).json({
                message: "User not found!"
            })
        }

    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err
        })
    }

}

// multer is a middleware which is used to uploading files in Node.js Applications
// it is also used to handle form data
const storage = multer.diskStorage({ // diskstorage is used to define custom storage option
    destination: "./uploads",
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
            cb(null, true);
        }
        else {
            return cb(new Error("Only .png, .jpg and .jpeg formats are supported!"))
        }
    }
}).single("file")

const uploadFile = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                res.status(500).json({
                    message: err.message
                });
            }
            else {
                if (req.file) {
                    const result = await cloudinary.uploadFile(req.file);

                    res.status(200).json({
                        message: "File uploaded successfully",
                        data: req.file,
                        cloudinaryData: result
                    })
                }
                else {
                    res.status(400).json({
                        message: "File not found",
                    });
                }
            }
        })
    } catch (err) {
        res.status(500).json({
            message: err,
            error: err
        });
    }
}

module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserByAge,
    loginUser,
    uploadFile
};

