const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid')

router.get('api/notes', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);



  
  module.exports = router;