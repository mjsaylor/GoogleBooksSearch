const Axios = require('axios')

const API_KEY = process.env.API_KEY
console.log(API_KEY)

function searchByTitle(title) {
    return Axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${title}&printType=books&key=${API_KEY}`)
        .then(function (response) {
            console.log(response.data)
            return response.data
        })
}

module.exports = { searchByTitle }
