var canvasController = null;

function CanvasController() {
    if (canvasController) {
        return canvas;
    }

    console.log('creating canvas context controller');
    this.canvas = document.getElementById('game-canvas');
    this.context = this.canvas.getContext('2d');
    this.prevTime = -1;
    this.drawables = [];

    this.gameLoop = function (timestamp) {
        if (!gameState || !gameState.isLoaded()) {
            requestAnimationFrame(this.gameLoop.bind(this));
            return;
        }

        let deltaTime = 0;
        if (this.prevTime !== -1) {
            deltaTime = timestamp - this.prevTime;
        }
        this.prevTime = timestamp;


        // updates
        battleUI.update(deltaTime);


        // draws
        const width = this.canvas.width;
        const height = this.canvas.height;

        // fill BG
        this.context.fillStyle = '#000';
        this.context.fillRect(0, 0, width, height);
        this.context.fillStyle = '#FFF';
        const ctx = this.context;

        this.drawables.forEach(function (d) {
            d.update(deltaTime);
            d.draw(ctx);
        });
        requestAnimationFrame(this.gameLoop.bind(this));
    };

    this.addObject = function (obj) {
        if (this.drawables.indexOf(obj) === -1) {
            this.drawables.push(obj);
        }
    };

    this.removeObject = function (obj) {
        const index = this.drawables.indexOf(obj);
        this.drawables.splice(index - 1, 1);
    };

    const pub = {
        addObject: this.addObject.bind(this),
        removeObject: this.removeObject.bind(this)
    };

    requestAnimationFrame(this.gameLoop.bind(this));

    return pub;
};

function cImage(src) {
    this.doneLoading = function () {
        this.loaded = true;
    };

    this.draw = function (ctx, x = 0, y = 0) {
        if (this.loaded) {
            ctx.drawImage(this.img, x, y);
        }
    };

    this.flash = function () {
        // tint red then not then again until time up
    };

    this.isLoaded = function () { return this.loaded; };

    this.update = function () {};

    this.loaded = false;
    this.img = new Image();
    this.img.onload = this.doneLoading.bind(this);
    this.img.src = src;

    const pub = {
        draw: this.draw.bind(this),
        update: this.update.bind(this),
        flash: this.flash.bind(this),
        isLoaded: this.isLoaded.bind(this)
    };

    return pub;
};
