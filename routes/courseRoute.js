const express = require('express');
const courseController = require('../controllers/courseController');
const roleMiddleware = require('../midddlewares/roleMiddleware');
const router = express.Router();

//localhost:3000/courses/
router
  .route('/')
  .post(roleMiddleware(['teacher', 'admin']), courseController.createCourse);

router.route('/').get(courseController.getAllCourses);

router.route('/:slug').get(courseController.getCourse);

router.route('/enroll').post(courseController.enrollCourse);

router.route('/release').post(courseController.releaseCourse);

router.route('/:slug').delete(courseController.deleteCourse);

router.route('/:slug').put(courseController.updateCourse);

module.exports = router;
