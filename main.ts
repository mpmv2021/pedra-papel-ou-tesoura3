let minha_escolha = 0
let outra_escolha = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # . . . .
        # . . . .
        `)
    minha_escolha = 1
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(2000)
    outra_escolha = randint(1, 3)
    if (outra_escolha == 1) {
        basic.pause(2000)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # . . . .
            # . . . .
            `)
        if (minha_escolha == 1) {
            basic.showString("Empatamos")
        } else if (minha_escolha == 2) {
            basic.showString("Ganhei")
        } else {
            basic.showString("Perdi")
        }
    } else if (outra_escolha == 2) {
        basic.pause(2000)
        basic.showIcon(IconNames.Square)
        if (minha_escolha == 2) {
            basic.showString("Empatamos")
        } else if (minha_escolha == 3) {
            basic.showString("Ganhei")
        } else {
            basic.showString("Perdi")
        }
    } else {
        basic.pause(2000)
        basic.showIcon(IconNames.Scissors)
        if (minha_escolha == 3) {
            basic.showString("Empatamos")
        } else if (minha_escolha == 1) {
            basic.showString("Ganhei")
        } else {
            basic.showString("Perdi")
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    minha_escolha = 3
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Square)
    minha_escolha = 2
})
