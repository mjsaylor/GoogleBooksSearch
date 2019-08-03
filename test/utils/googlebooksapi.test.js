const assert = require('chai').assert
const gba = require("../../utils/googlebooksapi")

describe("googlebooksapi", () => {
    describe("searchByTitle", () => {
        it("Should Return valid Object", () => {
            gba.searchByTitle("Station Eleven")
                .then(response => {
                    assert.isOk(JSON.stringify(response))
                })
        })
    })
})