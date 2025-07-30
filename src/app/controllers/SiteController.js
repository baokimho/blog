class SiteController {
    constructor() {
        console.log('✅ SiteController constructor loaded!');
    }
    // GET /home
    index(req, res) {
        // res.render('home');
        res.json({
            name: 'Bao Kim',
            age: 18,
        })
        console.log('Home page accessed');
    }

    // GET /search
    search(req, res) {
        res.render('search');
    }

    // POST /search
    searchResults(req, res) {
        res.send('Search results will be displayed here');
    }
}

module.exports = new SiteController();
