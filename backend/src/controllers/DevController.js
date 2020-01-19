const axios = require("axios")
const Dev = require("../models/Dev")
const parseStringAsArray = require("../utils/parseStringAsArray")
const newLocationPoint = require("../utils/newLocationPoint")
const cleanObject = require("../utils/cleanObject")
const { findConnections, sendMessage } = require('../websocket')

module.exports = {
    async index(req, res) {
        const devs = await Dev.find()

        return res.json(devs)
    },
    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body
        const techsArr = parseStringAsArray(techs);

        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            const resAPI = await axios.get(`http://api.github.com/users/${github_username}`)

            const { name = login, avatar_url, url, bio } = resAPI.data

            const location = newLocationPoint(latitude, longitude)

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                url,
                bio,
                techs: techsArr,
                location
            })

            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsArr
            )

            sendMessage(sendSocketMessageTo, 'new-dev', dev)
        }
        return res.json(dev)

    },
    update(req, res) {
        const { id } = req.params
        const { name, bio, avatar_url, techs, latitude, longitude } = req.body

        const location = newLocationPoint(latitude, longitude)

        updateObj = { name, bio, avatar_url, techs, location }

        Dev.findByIdAndUpdate({ _id: id }, cleanObject(updateObj))
            .then(data => {
                res.status(200)
                res.json(data)
            })
            .catch(err => {
                res.status(500)
                res.send(err.message)
            })
    },
    destroy(req, res) {
        const { id } = req.params

        Dev.findByIdAndDelete(id)
            .then(data => {
                res.status(200)
                res.json(data)
            })
            .catch(err => {
                res.status(500)
                res.send(err.message)
            })
    }
}

    // name: String,
//     github_username: String,
//     bio: String,
//     avatar_url: String,
//     techs: [String],
//     location: {
//         type: PointSchema,
//         index: '2dsphere'
//     }