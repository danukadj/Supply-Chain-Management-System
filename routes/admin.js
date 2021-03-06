const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();
const auth = require('../config/auth');

router.get('/',auth.checkNotAuthenticated, adminController.viewAdminDashboard);
router.post('/approveUser', adminController.approveUser);
router.post('/disapproveUser', adminController.disapproveUser);
router.get('/editInfo', adminController.viewAdminEditInfo);
router.post('/editInfo',auth.checkNotAuthenticated,adminController.editInfo);
router.post('/changePassword',auth.checkNotAuthenticated,adminController.changePassword)

module.exports = router;
