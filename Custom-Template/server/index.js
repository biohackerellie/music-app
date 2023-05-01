require('dotenv').config();
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;
const apiUrl = process.env.API_URL;


app.use(express.json());
app.use(cors({
	origin: process.env.SITE_URL || 'http://localhost:5173',
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
}));

const db = new sqlite3.Database(':memory:')

db.serialize(() => {
	db.run(
		`CREATE TABLE songs (id INTEGER PRIMARY KEY, title TEXT, artist TEXT, album TEXT, image TEXT, audioFile TEXT, releaseDate TEXT)`
	);
	
	const songs = JSON.parse(fs.readFileSync(path.join(__dirname, 'songs.json')));
	
	const stmt = db.prepare('INSERT INTO songs VALUES (?, ?, ?, ?, ?, ?, ?)');
	songs.forEach((song) => {
		stmt.run(song.id, song.title, song.artist, song.album, song.image, song.audioFile, song.releaseDate);
	});
	stmt.finalize();
});

app.get('/api/songs', (req, res) => {
	
  db.all('SELECT * FROM songs', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });		
    } else {
      res.status(200).json(rows);
    }
	console.log (rows)
  });
});


app.use('/songs/audio', express.static('public/audio'));
app.use('/songs/images', express.static('public/images'));

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});