function moveTo(sprite){
    //bmpAnimation2.direction = where;
    if (sprite.x < sprite.width/2) {
        sprite.directionX = "right";
    }
    if (sprite.x >= stage.canvas.width - sprite.width/2) {
        sprite.directionX = "left";
    }
    if (sprite.y < sprite.height/2) {
        sprite.directionY = "down";
    }
    if (sprite.y >= stage.canvas.height - sprite.height/2) {
        sprite.directionY = "up";
    }

    // Moving the sprite based on the direction & the speed
    if (sprite.directionX == "right") {
        sprite.x += sprite.vX;
    }
    if (sprite.directionX == "left") {
        sprite.x -= sprite.vX;
    }
    if (sprite.directionY == "down") {
        sprite.y += sprite.vX;
    }
    if (sprite.directionY == "up") {
        sprite.y -= sprite.vX;
    }

}
function collide() {
    var numEnemies = enemies.length - 1;
    var numPrizes = prizes.length - 1;
    var curEnemy, curPrize;

    for(var i = numEnemies; i >= 0; --i) {
        curEnemy = enemies[i];
        if((!curEnemy.hasCollided) &&(distance(curEnemy, bmpAnimation) < 150)) {
            SCORE -= 10;
        }

        // check avatar collision
        for(var j = numPrizes; j >= 0; --j) {
            curPrize = prizes[j];

            if( distance(curPrize, bmpAnimation) < 200)  {
                //content.removeChild(curRock) ;
                stage.removeChild(prizes[j]); // using [] seems to stop enemies from 'sticking'
                //createExplosion(curRock.x, curRock.y);
                SCORE += 10;
                prizes.splice(j, 1);
            }
        }
        numPrizes = prizes.length - 1;
    }
}