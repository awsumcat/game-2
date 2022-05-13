input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let lives = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let enemy = game.createSprite(randint(0, 4), 0)
let speed = 700
lives += 3
game.setScore(0)
game.setLife(lives)
basic.forever(function () {
    enemy.change(LedSpriteProperty.Y, 1)
    basic.pause(speed)
    if (enemy.get(LedSpriteProperty.Y) == 4) {
        game.addScore(1)
        enemy.set(LedSpriteProperty.Y, 0)
        enemy.set(LedSpriteProperty.X, randint(0, 4))
    }
})
basic.forever(function () {
    if (enemy.isTouching(player)) {
        lives += -1
        enemy.set(LedSpriteProperty.Y, 0)
        enemy.set(LedSpriteProperty.X, randint(0, 4))
    }
})
basic.forever(function () {
    if (lives == 0) {
        basic.clearScreen()
        game.gameOver()
    }
})
