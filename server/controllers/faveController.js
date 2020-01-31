module.exports = {
    addFave: (req, res) => {
        console.log(req.session.user)
        const db = req.app.get("db")
        // const {id} = req.session.user
        const {image, title, content} = req.body

        db.add_fave(1, image, title, content)
        .then(() => res.sendStatus(200))
    }
}