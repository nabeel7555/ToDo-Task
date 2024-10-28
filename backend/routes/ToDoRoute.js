const { Router } = require('express');
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../controllers/ToDoController');

const router = Router();

router.get('/', getToDo);
router.post('/save', saveToDo); // Route for saving a new to-do
router.put('/update', updateToDo); // Use PUT for updating a to-do
router.delete('/delete/:id', deleteToDo); // Use DELETE for deleting a to-do

module.exports = router;
