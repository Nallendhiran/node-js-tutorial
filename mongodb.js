const express=require('express');
const router=express.Router();
const Aliens=require('./schema')

router.get('/',async(req,res)=>{
    console.log('get request came');
    try{
        const db=await Aliens.find();
        res.json(db);
        
    }catch(err){
        res.send('error')
    }
     
});

router.post('/', async(req,res)=>{
    console.log('post request came');
    const alien=new Aliens({
        name: req.body.name,
        group: req.body.group,
        college: req.body.college
    })
        try{
        const db1= await alien.save()
        res.json(db1)
    }catch(err){
        res.send('error'+ err);
    }
router.get('/:id', async(req,res)=>{
    try{
        const id=   await Aliens.findById(req.params.id);
        res.json(id);
    }
        catch(err){
            res.send('error');
        }
    })

    router.patch('/:id', async(req,res)=>{
        try{
            const ad=   await Aliens.findById(req.params.id)
           ad.college=req.body.college;
            const a1=await ad.save()
            res.json(a1)
        }
            catch(err){
                res.send('error'+ err);
            }
        })
});   

module.exports= router