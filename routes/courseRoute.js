const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

//localhost:3000/courses/
router.route('/').post(courseController.createCourse);
router.route('/').get(courseController.getAllCourses);

router.route('/:slug').get(courseController.getCourse);

module.exports = router;
