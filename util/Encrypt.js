const bcrypt = require("bcrypt")
const saltRound = 10

const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(saltRound)
    const hashedpassword = bcrypt.hashSync(password, salt)
    return hashedpassword
}

const decryptPassword = (password, hash) => {
    const flag = bcrypt.compareSync(password, hash)
    return flag;
}
const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}

module.exports = {
    encryptPassword,
    decryptPassword,
    comparePassword
}