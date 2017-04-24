function BattleUI()
{
    if (battleUI) {
        return battleUI;
    }


    this.show = function () {
        this.$container.removeClass('hidden');
        this.$container.animate({bottom: 0}, 200, function () {
            //
        }.bind(this));
    };

    this.hide = function () {
        this.$container.animate({bottom: '-140px'}, 200, function () {
            this.$container.addClass('hidden');
        }.bind(this));
    };

    this.update = function (delta) {
        if (!player) {
            return;
        }
        const vals = player.getAttributes();
        const hp = vals.health === 0 ? 0 : vals.health / vals.maxHealth * 100;
        const mp = vals.mana === 0 ? 0 : vals.mana / vals.maxMana * 100;
        this.$playerHealth.text(`${vals.health} / ${vals.maxHealth}`);
        this.$playerHealthBar.css('width', `${hp}%`);
        this.$playerMana.text(`${vals.mana} / ${vals.maxMana}`);
        this.$playerManaBar.css('width', `${mp}%`);
        this.$playerStr.text(vals.str);
        this.$playerArm.text(vals.arm);
        this.$playerInt.text(vals.int);
        this.$playerRes.text(vals.res);
    };

    this.$container = $("#combatUI");
    this.$playerStr = $("#ui-player-str");
    this.$playerInt = $("#ui-player-int");
    this.$playerArm = $("#ui-player-arm");
    this.$playerRes = $("#ui-player-res");
    this.$playerHealth = $("#combatUI-health");
    this.$playerHealthBar = $("#combatUI-health-bar");
    this.$playerMana = $("#combatUI-mana");
    this.$playerManaBar = $("#combatUI-mana-bar");
    this.$basicAttack = $("#basic-attack");
    this.$bashAttack = $("#bash-attack");
    this.$basicMagic = $("#basic-magic");
    this.$fireball = $("#fireball-attack");

    this.$basicAttack.on('click', function () {
        const amount = actions.baseAttack.getEffect().mult(player.getAttributes());
        const attr = new Attribute();
        attr.health = amount.str + amount.int;
        gameState.attackEnemy(attr);
    }.bind(this));

    this.$bashAttack.on('click', function () {
        const amount = actions.bash.getEffect().mult(player.getAttributes());
        const attr = new Attribute();
        attr.health = amount.str + amount.int;
        gameState.attackEnemy(attr);
        const cost = new Attribute();
        cost.mana = 3;
        player.takeDamage(cost);
    }.bind(this));

    const pub = {
        show: this.show.bind(this),
        hide: this.hide.bind(this),
        update: this.update.bind(this)
    };
    return pub;
};
