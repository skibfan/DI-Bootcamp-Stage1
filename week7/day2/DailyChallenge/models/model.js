import {db} from '../config/data.js'
import bcrypt from 'bcrypt'

const hashPassword = async (password) => {
    const saltRounds = 10
    const hashedPass = await bcrypt.hash(password, saltRounds)
    return hashedPass
}

const checkPass = async (password, hashedPass) => {
    const flag = await bcrypt.compare(password, hashedPass)
    return flag
}




export const _registerNewU = async (username, password) => {
    try {
        password = await hashPassword(password)
        const trx = await db.transaction()

        const [{id}] = await db('hashpwd').insert({username, password}, ["id"]).transacting(trx)
        await db('users').insert({id, username}, ["username"]).transacting(trx)
        
        await trx.commit()
        console.log(`user ${username} created successfuly`);
    } catch (e) {
        console.log('user not created');
        console.log(e);
        await trx.rollback()
        
        throw(e)
        
        
    }
}

export const _loginUser = async (username, passwordinput) => {
    try {
        const result = await db('hashpwd').select("password").where({username}).first()
        const passwordhash = result.password
        return checkPass(passwordinput, passwordhash)
    } catch (e) {
        console.log('some error, user not created?');
        throw(e)
    }
}



export const _getAllUsers = () => {
    try {
        return db('users').select('id', 'email', 'username', 'first_name', 'last_name')
    } catch(e){
        throw(e)
    }   
}


export const _getUserByID = async (id) => {
    try {
        const data = await db('users').select('id', 'email', 'username', 'first_name', 'last_name').where({id}).first()
        if (!data) {
            throw new Error('no such user')
        }
        return data
    } catch(e) {
        throw(e)
    }
}


export const _updateUserByID =  (id, email, first_name, last_name) => {
    try {
        return db('users').update({email, first_name, last_name}, ["id", "email", "username", "first_name", "last_name"]).where({id})
    } catch (e) {
        throw(e)
    }
}

