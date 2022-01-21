const express = require('express');
const router = express.Router();

const Anime = require('../models/anime');

router.get('/', (req, res) => {
    const animesData = Anime.all;
    res.send(animesData);
});

router.get('/:id', (req, res) => {
    try {
        const animeId = parseInt(req.params.id);
        const selectedAnime = Anime.findById(animeId);
        res.send(selectedAnime);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    const newAnime = Anime.create(data);
    res.status(201).send(newAnime);
});

router.delete('/:id', (req, res) => {
    const animeId = parseInt(req.params.id);
    const animeToDestroy = Anime.findById(animeId);
    animeToDestroy.destroy();
    res.status(204).send();
});

module.exports = router;
