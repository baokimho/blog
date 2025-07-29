class SiteController {

    // GET /home
    index(req, res){
        res.render('home') 
    }

    // GET /search
    search(req, res){
        res.render('search')
    }

    // POST /search
    searchResults(req, res){
        res.send("Search results will be displayed here") 
    }

}

module.exports = new SiteController();