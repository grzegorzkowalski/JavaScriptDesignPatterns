import { createClient } from 'pexels';

class Redaction {
    constructor() {
        this.portal = "";
    }
    findPhotos(category) {
        this.portal.findPhotos(category);
    }
    setStrategy(strategy) {
        this.portal = strategy;
    }
}

class Pexels {
    constructor() {
        this.apiKey = "563492ad6f917000010000014de76e01ded246738f9066ae449b798a";
    }
    findPhotos(category) {
        const client = createClient(this.apiKey);
        const query = category;

        const getData = async (client, query) => {
            const r = await client.photos.search({ query, per_page: 50 });
            console.log(r.photos);
            return r.photos;
        }

        return getData(client, query);
    }
}

class Pixabay {
    constructor() {
        this.apiKey = "6799546-801a9e48e0e142c05114f0377";
    }
    findPhotos(category) {
        const getData = async (url) => {
            const r = await fetch(url);
            const data = await r.json();
            console.log(data);
            return data.hits;
        }
        return getData(`https://pixabay.com/api/?key=${this.apiKey}&category=${category}&image_type=photo`);
    }
}

const pexel = new Pexels();
const pixabay = new Pixabay();
const redaction = new Redaction();
redaction.setStrategy(pexel);
redaction.findPhotos("Nature");
redaction.setStrategy(pixabay);
redaction.findPhotos("Nature");
