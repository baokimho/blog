const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {

    async storedCourses(req, res, next) {
        try {
            const courses = await Course.find({});
            res.render('me/stored-courses', { courses: multipleMongooseToObject(courses), title: 'My Courses' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new MeController();
