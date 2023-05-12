const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const { Note, Tag } = require('../app/models');

// GET all notes
router.get('/', (req, res) => {
    Note.findAll({
        attributes: [
            'id',
            'note_text'
        ],
        include: [{
            model: Tag,
            attributes: ['id', 'tag_name'],
            include: {
                model: User,
                attributes: ['username']
            }
        }]
    })
});

// GET a single note by ID
router.get('/:id', noteController.getNoteById);

// POST a new note
router.post('/', noteController.createNote);

// PUT (update) an existing note
router.put('/:id', noteController.updateNote);

// DELETE a note
router.delete('/:id', noteController.deleteNote);

module.exports = router;
