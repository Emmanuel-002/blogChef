const { Router } = require('express');
const router = Router();

const taskController = require ('../Controllers/User.controller')


router.post('/users', taskController.create)
router.get('/user', taskController.getAll)
router.put('/user/:id', taskController.update)
router.delete('user/:id',taskController.delete)


module.exports = router;