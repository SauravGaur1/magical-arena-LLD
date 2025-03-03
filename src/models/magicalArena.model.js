const Player = require('./player.model.js');
const Dice = require('../utils/dice.util.js');
const Future = require('../services/future.service.js');
const Logger = require('../services/loger/loger.service.js');
const Lang = require('../config/lang.config.js');

class MagicalArena {

    async startMatch(_playerA, _playerB) {

        const playerA = _playerA ?? new Player("Player 1");
        const playerB = _playerB ?? new Player("Player 2");

        let attacker;
        let defender;

        [attacker, defender] = playerA.health <= playerB.health
            ? [playerA, playerB]
            : [playerB, playerA]

        Logger.log(`\n\n\nMatch Started : ${attacker.name} 🗡️  ${defender.name}\n\n\n`);


        while(attacker.isAlive && defender.isAlive) {
            Logger.log(`Attacker : ${attacker.name} is rolling... 🎲`);
            await Future.delay(500);
            let _boosterDice = Dice.roll();
            Logger.log(`           ${attacker.name} Got the Booster as: ${_boosterDice}\n`);
            const attackerDamage = attacker.calcDamage(_boosterDice);
            Logger.log(`Defender : ${defender.name} is rolling... 🎲`);
            await Future.delay(500);
            _boosterDice = Dice.roll();
            Logger.log(`           ${defender.name} Got the Booster as: ${_boosterDice}\n`);
            const defenderStrength = defender.calcDefence(_boosterDice);

            const actualDamage = Math.max((attackerDamage - defenderStrength), 0);

            if(actualDamage == 0)
                Logger.log(`Defender : ${defender.name} defended this attack 🛡️\n`);
            else
                Logger.log(`Attacker : ${attacker.name} attacked with the damage of : ${actualDamage} 🗡️\n`);


            defender.takeDamage(actualDamage);
            Logger.log(`Remaning Health : ${attacker.name} : ${attacker.health} AND ${defender.name} : ${defender.health}`);

            [attacker, defender] = this.#toggle(attacker, defender);

            Logger.log(Lang.diveider)
        }

        this.#announceWinner(attacker, defender);

    }

    #toggle(attacker, defender) {
        return [defender, attacker];
    }

    #announceWinner(_playerA, _playerB) {
        Logger.log('\n');
        if(_playerA.isAlive)
            Logger.log(`🏆 ${_playerA.name} 🏆 Won this Match and defeted ${_playerB.name} with ${_playerA.health} health remaning`);
        else
            Logger.log(`🏆 ${_playerB.name} 🏆 Won this Match and defeted ${_playerA.name} with ${_playerB.health} health remaning`);

        Logger.log('\n')
        Logger.log(Lang.diveider);
    }
}

module.exports = MagicalArena;
