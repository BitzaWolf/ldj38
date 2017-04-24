<?php?>


<div id="game">


    <canvas id="game-canvas" width="800" height="600"></canvas>


    <div id="combatUI" class="ui-container hidden" style="bottom: -140px;">
        <table style="margin-left: 10px;">
            <tbody>
                <tr title="Strength">
                    <td><img src="images/game/ldj38/ui/sword-icon.png" height="20" />
                    <td id="ui-player-str">5</td>
                </tr>
                <tr title="Intelligence" style="height: 40px;">
                    <td><img src="images/game/ldj38/ui/sword-icon-blue.png" height="20" />
                    <td id="ui-player-int">8</td>
                </tr>
            </tbody>
        </table>
        <table style="margin: 0 10px 0 5px;">
            <tbody>
                <tr title="Armor">
                    <td><img src="images/game/ldj38/ui/shield-icon.png" height="20" />
                    <td id="ui-player-arm">7</td>
                </tr>
                <tr title="Resistance" style="height: 40px;">
                    <td><img src="images/game/ldj38/ui/shield-icon-blue.png" height="20" />
                    <td id="ui-player-res">10</td>
                </tr>
            </tbody>
        </table>
        <table style="margin-top: 50px">
            <tbody>
                <tr title="Health">
                    <td><img src="images/game/ldj38/ui/health-icon.png" height="20" /></td>
                    <td><div class="combatUI-bar-wrapper"><div id="combatUI-health-bar"></div><div id="combatUI-health">10 / 10</div></div></td>
                </tr>
                <tr title="Mana">
                    <td><img src="images/game/ldj38/ui/mana-icon.png" height="20" /></td>
                    <td><div class="combatUI-bar-wrapper"><div id="combatUI-mana-bar"></div><div id="combatUI-mana">10 / 10</div></div></td>
                </tr>
            </tbody>
        </table>
        <div id="player-actions">
            <img id="basic-attack" src="images/game/ldj38/ui/basic-attack.png" height="100" />
            <img id="bash-attack" src="images/game/ldj38/ui/bash.png" height="100" />
            <img id="basic-magic" src="images/game/ldj38/ui/basic-magic.png" height="100" />
            <img id="fireball-attack" src="images/game/ldj38/ui/fireball.png" height="100" />
        </div>
    </div>


    <div id="UI" class="ui-container hidden">
        <!-- general out-of-combat UI goes here -->
    </div>


    <div id="title-screen" class="ui-container">
        <h2>One Day</h2>
        <p>Click to start</p>
    </div>


</div>
