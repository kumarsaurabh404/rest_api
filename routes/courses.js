const ex = require("express");
const course = require("../models/course");
const Course = require('../models/course');
const router = ex.Router();

// creating routes



//get all courses
router.get("/" ,async (req,res) => {
    try{

        const courses= await Course.find();
        res.json(courses);
    }catch (err){
        res.json(err);
    }
});

//single course get
router.get("/:courseID", async (req,res) => {
    const courseID = req.params.courseID;
    try{
        const c = await Course.findById(courseID);
        res.json(c);
    }catch (error){
          res.json(error);
    }
})



//create course

router.post("/",async (req,res) => {
   const course = await Course.create(req.body);
   res.json(course);
})

router.delete("/:courseId" ,async (req,res) => {
    try{
        await Course.remove({"_id":req.params.courseId});
        res.status(200).json({
            message:"done"
        })
    }catch (err){
        res.json(err);
    }
})

router.put("/:courseId",async (req,res) => {
    const courseId=req.params.courseId;

    try{
        const course=await Course.updateOne(
            {
                "_id":courseId
            },
            req.body
        ) ;
        res.json(course);

    }catch(err){
        res.json(err);
    }
})


module.exports = router;