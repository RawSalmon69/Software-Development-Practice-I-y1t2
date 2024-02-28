const express = require('express');
const {getHospitals, getHospital, createHospital, updateHospital, deleteHospital, getVacCenters} = require('../controllers/hospitals');
const router = express.Router();
const {protect, authorize} = require('../middleware/auth');

const appointmentsRouter = require('./appointments');

//re-route into other resource routers
router.use('/:hospitalId/appointments', appointmentsRouter);

router.route('/').get(getHospitals).post(protect, authorize('admin'), createHospital);
router.route('/vacCenters').get(getVacCenters);
router.route('/:id').get(getHospital).put(protect, authorize('admin'), updateHospital).delete(protect, authorize('admin'), deleteHospital);


module.exports = router;