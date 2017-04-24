function Action (name, attr, /*categories, */desc) {
    this.name = name;
    this.attributes = new Attribute(attr);
    this.categories = [];
    this.description = desc;

    this.getEffect = function () {
        return this.attributes.copy();
    };

    this.getName = function () { return this.name; };
    this.getDescription = function () { return this.description; };

    const pub = {
        name: this.getName.bind(this),
        description: this.getDescription.bind(this),
        getEffect: this.getEffect.bind(this)
    };

    return pub;
};

var actions = {
    baseAttack: new Action(
        'Basic Attack',
        {str: 1},
        'Basic physical blow. Deals a minimal amount of physical damage.'
    ),

    baseMagic: new Action(
        'Basic Magic',
        {int: 1},
        'Basic magical attack. Deals a minimal amount of magic damage.'
    ),

    fireBall: new Action(
        'Fireball',
        {int: 1.2},
        'Fling a firey, flaming sphere of fire at your enemy. Deals a modest amount of magic damage.'
    ),

    bash: new Action(
        'Bash',
        {str: 2},
        'Put some \'umf into that swing and bash your enemy\'s head in! Deals a modest amount of physical damage.'
    ),

    OneTwo: new Action(
        'One-Two',
        {str: 0.5, int: 0.5},
        'The basic one-two combo. Swing your weapon and throw some magic on the follow-through. Deals a bit of pyhsical and magical damage.'
    )
    //firedUp - buff
};
