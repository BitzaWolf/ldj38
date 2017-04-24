var player = null;

function Player() {
    if (player) {
        return player;
    }

    this.attributes = new Attribute({
        health: 10,
        maxHealth: 10,
        mana: 10,
        maxMana: 10,
        str: 4,
        arm: 0,
        int: 4,
        res: 0
    });
    this.actions = [
        actions.baseAttack,
        actions.bash,
        actions.baseMagic,
        actions.fireBall
    ];
    this.name = "";
    this.damage = new Attribute();

    this.getBaseAttributes = function () {
        return this.attributes.copy();
    };

    this.getCurrentAttributes = function () {
        let retMe = this.attributes.copy();
        retMe = retMe.sub(this.damage);
        return retMe
    };

    this.takeDamage = function (attr) {
        this.damage = attr.add(this.damage);
    };

    this.cleanse = function () {
        this.damage = new Attribute();
    }

    this.isDead = function () {
        const attr = this.getCurrentAttributes();
        return attr.health <= 0;
    };

    const pub = {
        getBaseAttributes: this.getBaseAttributes.bind(this),
        getAttributes: this.getCurrentAttributes.bind(this),
        isDead: this.isDead.bind(this),
        name: this.name,
        takeDamage: this.takeDamage.bind(this),
        cleanse: this.cleanse.bind(this)
    };

    return pub;
}
