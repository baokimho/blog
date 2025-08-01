const Course = require('../models/Course');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class CourseController {


    async show(req, res, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug});
            if (!course){
                return res.status(404).send('Course not found');
            } 
            res.render('courses/show', { course: mongooseToObject(course) });
        } catch(error) {
            next(error);
        }
        
    }
}

module.exports = new CourseController();
