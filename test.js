const _ = require('lodash');
const assert = require('assert');
const { stintIndex } = require("./stint-index");
const Chance = require("chance");

describe('stintIndex', () => {

    let chance;

    before(() => {
        chance = new Chance();
    });

    describe('overallScore()', () => {

        it('should return 50 when all responses are 0', () => {
            const data = _.times(18, () => 0);
            const ui = new stintIndex(data);
            assert.equal(50, ui.overallScore());
        });

    });

    describe("happinessScore()", () => {

        it('should return 100 when all happiness responses are 5', () => {
            const data = _.times(18, () => chance.natural({min: 0, max: 5}));
            data[0] = 5;
            data[13] = 5;
            data[17] = 5;
            const ui = new stintIndex(data);
            assert.equal(100, ui.happinessScore());
        });

    });

});
