function Attribute(initial = {}) {
    this.health = initial.health ? initial.health : 0;
    this.maxHealth = initial.maxHealth ? initial.maxHealth : 0;
    this.mana = initial.mana ? initial.mana : 0;
    this.maxMana = initial.maxMana ? initial.maxMana : 0;
    this.str = initial.str ? initial.str : 0;
    this.arm = initial.arm ? initial.arm : 0;
    this.int = initial.int ? initial.int : 0;
    this.res = initial.res ? initial.res : 0;
    this.xp = initial.xp ? initial.xp : 0;

    this.add = function(other) {
        const result = new Attribute();
        result.health = this.health + other.health;
        result.maxHealth = this.maxHealth + other.maxHealth;
        result.mana = this.mana + other.mana;
        result.maxMana = this.maxMana + other.maxMana;
        result.str = this.str + other.str;
        result.arm = this.arm + other.arm;
        result.int = this.int + other.int;
        result.res = this.res + other.res;
        result.xp = this.xp + other.xp;
        return result;
    };

    this.sub = function(other) {
        const result = new Attribute();
        result.health = this.health - other.health;
        result.maxHealth = this.maxHealth - other.maxHealth;
        result.mana = this.mana - other.mana;
        result.maxMana = this.maxMana - other.maxMana;
        result.str = this.str - other.str;
        result.arm = this.arm - other.arm;
        result.int = this.int - other.int;
        result.res = this.res - other.res;
        result.xp = this.xp;
        return result;
    };

    this.mult = function(other) {
        const result = this.copy();
        result.health *= other.health;
        result.maxHealth *= other.maxHealth;
        result.mana *= other.mana;
        result.maxMana *= other.maxMana;
        result.str *= other.str;
        result.arm *= other.arm;
        result.int *= other.int;
        result.res *= other.res;
        result.xp *= other.xp;
        return result;
    };

    this.copy = function() {
        return this.add(new Attribute());
    };

    return this;
}
