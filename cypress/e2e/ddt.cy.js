const testVal = [

    {

        "name": "test1",
        "context": "1"

    },
    {
        "name": "test2",
        "context": "2"

    }

]

describe('DD', function () {

    testVal.forEach(function (fixtureData) {

        describe(fixtureData.context, function () {


            before(function () {
                cy.fixture(fixtureData.name).then(function (user) {
                    // "this" is still the test context object
                    this.user = user
                  })
                })

            it('Login to App', function () {

                cy.log(this.user.email)
            })

        })

    })

})