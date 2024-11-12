const { Router } = require('express');
const router = Router();

const taskController = require ('../Controllers/Task.controller')


router.post('/task', taskController.create)
router.get('/task', taskController.getAll)
router.put('/task/:id', taskController.update)
router.delete('task/:id',taskController.delete)


module.exports = router;