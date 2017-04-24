var gameState = null;
var player = null;
var titleScreen = null;
var battleUI = null;

function startGame() {
    if (gameState) {
        return gameState;
    }

    console.log('starting');
    this.gameStarted = true;
    var loaded = false;

    canvasController = new CanvasController();
    titleScreen = new TitleUI();
    battleUI = new BattleUI();

    this.enemies = [];

    this.startNewGame = function () {
        player = new Player();
        battleUI.show();

        const dum = enemies.dummy();
        dum.setPosition(300, 10);
        this.enemies.push(dum);
        canvasController.addObject(dum);

        const a = enemies.pettyThief();
        a.setPosition(50, 40);
        this.enemies.push(a);
        canvasController.addObject(a);

        const b = enemies.noviceFireMage();
        b.setPosition(650, 40);
        this.enemies.push(b);
        canvasController.addObject(b);
    };

    this.attackEnemy = function (attr) {
        if (this.enemies.length === 0) {
            return;
        }

        this.enemies[0].takeDamage(attr);
        if (this.enemies[0].getAttributes().health <= 0) {
            this.enemies.splice(0, 1);
            canvasController.removeObject(this.enemies[0]);
        }
    };

    loaded = true;

    gameState = {
        isGameRunning: function () { return !!gameState; },
        isLoaded: function () { return loaded; },
        startNewGame: this.startNewGame.bind(this),
        attackEnemy: this.attackEnemy.bind(this)
    };
    return gameState;
}

