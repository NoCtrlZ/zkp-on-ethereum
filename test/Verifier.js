const Verifier = artifacts.require("Verifier")
const { args } = require('./args')

contract("ZKP Verifier Test", () => {
    let verifier

    before( async() => {
        verifier = await Verifier.new()
    })

    describe("Whether Proof Is Valid",
        it("Proof Test", async () => {
            const isValid = await verifier.verifyProof(...args)
            assert.equal(isValid, true)
        })
    )
})
