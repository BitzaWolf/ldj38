function Enemy (name, attr, flavor, imgSrc) {
    this.name = name;
    this.attributes = new Attribute(attr);
    this.flavor = flavor;
    this.actions = [];
    this.image = new cImage(imgSrc + '.png');
    this.hurtImage = new cImage(imgSrc + '-hurt.png');
    this.hurtTimer = 0;
    this.position = [0, 0];

    this.getName = function () { return this.name; };
    this.getFlavorText = function () { return this.flavor; };
    this.update = function (delta) {
        if (this.hurtTimer > 0) {
            this.hurtTimer -= delta;
        }
    };

    this.draw = function (ctx) {
        let img = this.image;
        if (this.hurtTimer > 0) {
            img = this.hurtTimer % 5 > 2 ? this.hurtImage : null;
        }

        if (img) img.draw(ctx, this.position[0], this.position[1]);
    };

    this.takeDamage = function (dmg) {
        this.attributes = this.attributes.sub(dmg);
        console.log(this.attributes.health);
        this.hurtTimer = 500;
    }

    this.setPosition = function (x, y) { this.position = [x, y]; };

    return {
        name: this.getName.bind(this),
        flavor: this.getFlavorText.bind(this),
        draw: this.draw.bind(this),
        update: this.update.bind(this),
        takeDamage: this.takeDamage.bind(this),
        setPosition: this.setPosition.bind(this),
        getAttributes: function () { return this.attributes.copy(); }.bind(this)
    };
};

var enemies = {
    dummy: function () {
        return new Enemy(
            'Training Dummy',
            {health: 10},
            'A training dummy to practice combat on.',
            'images/game/ldj38/enemy/dummy'
        );
    },

    pettyThief: function () {
        return new Enemy(
            'Petty Theif',
            {health: 10, mana: 10, str: 3, xp: 4},
            'A lowly beggar down on their luck. Desparate and willing to risk their life for little gain.',
            'images/game/ldj38/enemy/swordsman'
        );
    },

    noviceFireMage: function () {
        return new Enemy(
            'Novice Fire Mage',
            {health: 10, mana: 10, int: 3, xp: 4},
            'A beginner in the ways of wielding fire, overzelaous and underestimating of the danger.',
            'images/game/ldj38/enemy/mage'
        );
    }
};
