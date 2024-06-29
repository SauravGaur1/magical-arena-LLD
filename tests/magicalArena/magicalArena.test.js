let expect;
const sinon = require('sinon');
const Player = require('../../src/models/player.model.js');
const MagicalArena = require('../../src/models/magicalArena.model.js');
const Dice = require('../../src/utils/dice.util.js');
const Future = require('../../src/services/future.service.js');
const Logger = require('../../src/services/loger/loger.service.js');

(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();

describe('MagicalArena', () => {
    let playerA, playerB, arena;

    beforeEach(() => {
        playerA = new Player()
            .setName("Player A")
            .setHealth(100)
            .setAttack(20)
            .setStrength(10); 

        playerB = new Player()
            .setName("Player B")
            .setHealth(100)
            .setAttack(20)
            .setStrength(10); 

        arena = new MagicalArena();
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should correctly perform attack and update health', async () => {
        const diceRollStub = sinon.stub(Dice, 'roll').returns(3);
        const futureDelayStub = sinon.stub(Future, 'delay').resolves();
        sinon.stub(Logger, 'log'); // Stub the Logger to avoid actual logging

        await arena.startMatch(playerA, playerB);

        expect(playerB.health).to.be.lessThan(100); // Player B's health should decrease
        expect(playerA.health).to.be.lessThan(50); // Player A's health should decrease

        diceRollStub.restore();
        futureDelayStub.restore();
    });

    it('should end the fight when a player dies', async () => {
        playerA = new Player()
            .setName("Player A")
            .setHealth(100)
            .setAttack(20)
            .setStrength(10); 

        const diceRollStub = sinon.stub(Dice, 'roll').returns(3);
        const futureDelayStub = sinon.stub(Future, 'delay').resolves();
        sinon.stub(Logger, 'log'); // Stub the Logger to avoid actual logging

        playerA.setHealth(0);

        expect(playerA.isAlive).to.be.false;

        diceRollStub.restore();
        futureDelayStub.restore();
    });

    it('should handle a full fight correctly', async () => {
        const diceRollStub = sinon.stub(Dice, 'roll').returns(3);
        const futureDelayStub = sinon.stub(Future, 'delay').resolves();
        sinon.stub(Logger, 'log'); // Stub the Logger to avoid actual logging

        await arena.startMatch(playerA, playerB);

        const winner = playerA.isAlive ? playerA : playerB;

        expect(winner.isAlive).to.be.true;
        expect(playerA.isAlive && playerB.isAlive).to.be.false;

        diceRollStub.restore();
        futureDelayStub.restore();
    });
});
