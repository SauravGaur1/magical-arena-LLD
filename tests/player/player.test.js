let expect;
const Player = require('../../src/models/player.model');


(async () => {
    const chai = await import('chai');
    expect = chai.expect;
})();

describe('Player', () => {
    describe('Initialization', () => {
        it('should initialize with default values if no parameters are provided', () => {
            const player = new Player();
            expect(player.health).to.equal(100); 
            expect(player.strength).to.equal(20); 
            expect(player.attack).to.equal(10); 
            expect(player.name).to.equal('100-20-10');
        });

        it('should initialize with provided values', () => {
            const player = new Player('Player 1', 150, 15, 8);
            expect(player.health).to.equal(150);
            expect(player.strength).to.equal(15);
            expect(player.attack).to.equal(8);
            expect(player.name).to.equal('Player 1');
        });
    });

    describe('Setters', () => {
        let player;

        beforeEach(() => {
            player = new Player();
        });

        it('should set health correctly', () => {
            player.setHealth(120);
            expect(player.health).to.equal(120);
        });

        it('should set strength correctly', () => {
            player.setStrength(12);
            expect(player.strength).to.equal(12);
        });

        it('should set attack correctly', () => {
            player.setAttack(6);
            expect(player.attack).to.equal(6);
        });

        it('should set name correctly', () => {
            player.setName('New Name');
            expect(player.name).to.equal('New Name');
        });
    });

    describe('Game Features', () => {
        let player;

        beforeEach(() => {
            player = new Player('Player 1', 100, 10, 5);
        });

        it('should correctly determine if player is alive', () => {
            expect(player.isAlive).to.be.true;

            player.takeDamage(100);
            expect(player.isAlive).to.be.false;
        });

        it('should correctly calculate defence', () => {
            const defence = player.calcDefence(3);
            expect(defence).to.equal(30); // 10 * 3
        });

        it('should correctly calculate damage', () => {
            const damage = player.calcDamage(4);
            expect(damage).to.equal(20); // 5 * 4
        });

        it('should reduce health correctly when taking damage', () => {
            player.takeDamage(20);
            expect(player.health).to.equal(80); // 100 - 20
        });

        it('should set health to 0 when taking fatal damage', () => {
            player.takeDamage(200);
            expect(player.health).to.equal(0);
            expect(player.isAlive).to.be.false;
        });
    });
});
