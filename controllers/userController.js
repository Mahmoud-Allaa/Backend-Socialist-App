
const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const salt = bcrypt.genSaltSync(10)
const secret = 'sdkjks37rehdjhjs294'


const register = async (req, res) => {

    const { name, phone, email, password } = req.body;
    try {
        const userDoc = await UserModel.create({ name, phone, email, password: bcrypt.hashSync(password, salt) })
        return res.json(userDoc)

    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
    // const isUserExists = await UserModel.findOne({ email })

    // isUserExists && res.json('email is already exists!')



    // bcrypt.hash(password, 10)
    //     .then(hash => {
    //         UserModel.create({ name, phone, email, password: hash })
    //             .then(user => res.json(user))
    //             .catch(err => res.json(err))
    //     }).catch(err => console.log(err))
}

const login = async (req, res) => {

    const { email, password } = req.body;
    const userDoc = await UserModel.findOne({ email })
    // const passOk = bcrypt.compareSync(password, userDoc.password)

    // if (passOk) {
    //     // logged in
    //     jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
    //         if (err) throw err
    //         res.cookie('token', token).json('ok')
    //     })
    // } else { res.status(400).json('wrong credentials') }

    if (userDoc) {
        bcrypt.compareSync(password, userDoc.password, (err, response) => {
            if (response) {
                const token = jwt.sign({ email: userDoc.email, password: userDoc.password }, secret, { expiresIn: '1d' })
                res.cookie('token', token)
                return res.json('Success!')
            }
            else {
                return res.json('Password is incorect!')
            }
        })
    }
    else {
        return res.json('user not exists!')
    }

}

module.exports = {
    register,
    login
}