const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const dbFilePath = path.join(__dirname, 'db', 'db.json');

// GET route reading the db.json file.
router.get('/api/notes', (req, res) =>
  readFromFile(dbFilePath).then((data) => res.json(JSON.parse(data)))
);

// POST routes for submitting a new note
router.post('/api/notes', (req, res) => {
    const { title, text } = req.body;

    const note = {
        title,
        text,
        unique_id: uuidv4(),
    };
      
    // Reads the file
    fs.readFile(dbFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        let notesArray = [];

        // Looks to see if the data is available
        if (data) {
            try {
                notesArray = JSON.parse(data);
            } catch (parseError) {
                console.error(parseError);
                res.status(500).json({ error: 'Data is not parsing.' });
                return;
            }
        }

        // Adds a new note to the array
        notesArray.push(note);

        // Takes the array and updates the file. 
        fs.writeFile(dbFilePath, JSON.stringify(notesArray, null, 2), (writeErr) => {
            if (writeErr) {
                console.error(writeErr);
                res.status(500).json({ error: 'Error writing to file' });
                return;
            }

            const response = {
                status: 'success',
                body: note,
            };

            res.json(response);
        });
    });
});

module.exports = router;