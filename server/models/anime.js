const catsData = require('../data');

class Anime {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.picture = data.picture;
    }

    static get all() {
        const animes = animesData.map((anime) => new Anime(anime));
        return animes;
    }

    static findById(id) {
        try {
            const animesData = animesData.filter((anime) => anime.id === id)[0];
            const anime = new Anime(animeData);
            return anime;
        } catch (err) {
            throw new Error('That anime does not exist!');
        }
    }

    static create(anime) {
        const newAnimeId = animesData.length + 1;
        const newAnime = new Anime({ id: newAnimeId, ...anime });
        animesData.push(newAnime);
        return newAnime;
    }

    destroy() {
        const anime = animesData.filter((anime) => anime.id === this.id)[0];
        animesData.splice(animesData.indexOf(anime), 1);
    }
}

module.exports = Anime;
