const { Router } = require('express');
const router = Router();
const { getEmails, createEmail, sendEmail } = require('../controller/index.controller')

router.get('/emails', getEmails)
router.post('/emails', createEmail)
router.post('/sendEmail', sendEmail)

module.exports = router;