const Course = require('../models/Course');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
const slugify = require('slugify');

class CourseController {

    async #generateSlug(name) {
        const baseSlug = slugify(name, { replacement: '-', trim: true, lower: true, strict: false });
        let slug = baseSlug;
        let count = 1;

        while (await Course.findOne({ slug })) {
            slug = `${baseSlug}-${count}`;
            count++;
        }
        return slug;
    }

    

    // GET /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    // POST /courses/store
    async store(req, res, next) {
        try {
            const formData = req.body;
            formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
            // formData.slug = formData.name.toLowerCase().replace(/ /g, '-');
            formData.slug = await this.#generateSlug(formData.name);
            console.log('Form data before save:', formData);
            
            const course = new Course(formData);
            await course.save();
            
            console.log('Course after save:', course);
            console.log('Course slug:', course.slug);
            
            res.redirect(`/courses/${course.slug}`);
        } catch (error) {
            console.error('Error creating course:', error);
            next(error);
        }
    }

    // GET /courses/:slug
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
