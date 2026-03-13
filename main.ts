basic.showLeds(`
    # # # . .
    . . # . .
    # # . # #
    . . # . .
    . . # . .
    `)
radio.sendString("@@@@@")
basic.forever(function () {
    basic.showString("VAI CORINTHIANS!!!")
    basic.showIcon(IconNames.Heart)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
})
