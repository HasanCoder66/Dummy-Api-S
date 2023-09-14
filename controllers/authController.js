import User from '../model/userSchema.js'
import bcrypt from 'bcrypt'

// signup api
//localhost:8800/api/signup
export const signup = async (req, res) => {


    try {

        // Generate a password using bcrypt

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)


        // Create New User 
        const newUser = new User({
            userName: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        // saveUser 

        const user = await newUser.save()
        res.status(200).json(user)
    }

    catch (error) {
        res.status(404).json(error)
    }
}


// login api
//localhost:8800/api/login
export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(404).json('user not found')

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(404).json('wrong password')

        res.status(200).json('user logged in successfully')

    } catch (error) {
        res.status(400).json(error)
    }

}

// forget api
// localhost:8800/api/forget/6502e7ec668ce982f7a727e1
export const forget = async (req, res) => {
    if (req.body.userId === req.param.id || req.user.isAdmin) {
        if (req.body.password)
        try {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password , salt)

        } catch (error) {
            res.status(500).json(error)
        }
        
        try {
            const forgetPassword = await User.findByIdAndUpdate(req.params.id ,{
               $set : req.body 
            }) 
            res.status(200).json('The password has been updated')
            
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json('You can update only your password')
    }
}




