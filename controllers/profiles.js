const Profile = require('../models/profiles')

module.exports = {
    getProfile: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Profile.find({userId:req.user.id})
            res.render('profiles.ejs', {profiles: todoItems, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createProfile: async (req, res)=>{
        try{
            await Profile.create({driverName: req.body.driverName, completed: false, userId: req.user.id})
            console.log('Todo has been added!')
            res.redirect('/profiles')
        }catch(err){
            console.log(err)
        }
    },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Profile.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Profile.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteProfile: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Profile.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}    