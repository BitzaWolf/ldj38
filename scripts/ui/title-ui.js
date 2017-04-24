function TitleUI()
{
    if (titleScreen) {
        return titleScreen;
    }


    this.startGame = function (e) {
        e.preventDefault();
        this.$container.animate({opacity: 0}, 1000, function () {
            this.$container.addClass('hidden');
            this.$container.css('opacity', 100);
            gameState.startNewGame();
        }.bind(this));
    };

    this.$container = $("#title-screen");

    this.$container.on('click', this.startGame.bind(this));

    const pub = {
    };
    return pub;
};
