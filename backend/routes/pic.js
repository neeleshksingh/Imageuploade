const express = require('express')
const Pic = require('../models/model')
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.post('/post', async(req,res)=>{
    try{
        const {img} = req.body
        if(!img){
            res.status(400).json({
                status : 'failed',
                message : 'upload image'
            })
        }
        else{
            const data = await Pic.create({img})
            return res.status(200).json({
                status : 'success',
                data
            })
        }
    } catch(e){
        return res.status(400).json({
            error : e.message
        })
    }
})

router.get('/', async(req,res)=>{
    try{
        const data = await Pic.find()
        if(data){
            return res.status(200).json({
                status : 'success',
                data
            })
        }
        else{
            res.status(400).json({
                message : 'image not found'
            })
        }
    } catch(e){
        return res.status(400).json({
            error : e.message
        })
    }
})

module.exports = router