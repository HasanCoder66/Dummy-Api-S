import User from '../model/userSchema.js'
import bcrypt from 'bcrypt'
export const signup = async (req , res) => {
    

    try {
        
        // Generate a password 

        const salt = await bcrypt.genSalt(10)


        // Create New User 
        const newUser =  new User({
            userName: req.body.name,
            email: req.body.email,
            password :req.body.password
        }) 
    
        // saveUser 
    
        const user = await newUser.save()
        res.status(200).json(user)
    }

    catch (error) {
        res.status(404).json(error)
    }
}

export const login = () => { 

}