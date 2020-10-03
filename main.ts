input.onGesture(Gesture.Shake, function () {
    char = list.removeAt(randint(0, list.length - 1))
    if (char == "A") {
        images.createImage(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `).showImage(0)
    } else if (char == "B") {
        images.createImage(`
            . # # # .
            . # . . #
            . # # # .
            . # . . #
            . # # # .
            `).showImage(0)
    } else if (char == "C") {
        images.createImage(`
            . . # # #
            . # . . .
            . # . . .
            . # . . .
            . . # # #
            `).showImage(0)
    } else if (char == "D") {
        images.createImage(`
            . # # # .
            . # . . #
            . # . . #
            . # . . #
            . # # # .
            `).showImage(0)
    } else if (char == "E") {
        images.createImage(`
            . # # # #
            . # . . .
            . # # # .
            . # . . .
            . # # # #
            `).showImage(0)
    } else if (char == "F") {
        images.createImage(`
            . # # # #
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `).showImage(0)
    } else if (char == "G") {
        images.createImage(`
            . . # # #
            . # . . .
            . # . # #
            . # . . #
            . . # # .
            `).showImage(0)
    } else if (char == "H") {
        images.createImage(`
            . # . . #
            . # . . #
            . # # # #
            . # . . #
            . # . . #
            `).showImage(0)
    } else if (char == "I") {
        images.createImage(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `).showImage(0)
    } else if (char == "J") {
        images.createImage(`
            . . # # #
            . . . . #
            . . . . #
            . # . . #
            . . # # .
            `).showImage(0)
    } else if (char == "K") {
        images.createImage(`
            . # . . #
            . # . # .
            . # # . .
            . # . # .
            . # . . #
            `).showImage(0)
    } else if (char == "L") {
        images.createImage(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . . # # #
            `).showImage(0)
    } else if (char == "M") {
        images.createImage(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `).showImage(0)
    } else if (char == "N") {
        images.createImage(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `).showImage(0)
    } else if (char == "O") {
        images.createImage(`
            . . # # .
            . # . . #
            . # . . #
            . # . . #
            . . # # .
            `).showImage(0)
    } else if (char == "P") {
        images.createImage(`
            . # # # .
            . # . . #
            . # # # .
            . # . . .
            . # . . .
            `).showImage(0)
    } else if (char == "Q") {
        images.createImage(`
            . # # . .
            # . . # .
            # . # # .
            # . . # .
            . # # . #
            `).showImage(0)
    } else if (char == "R") {
        images.createImage(`
            . # # # .
            . # . . #
            . # # # .
            . # . # .
            . # . . #
            `).showImage(0)
    } else if (char == "S") {
        images.createImage(`
            . . # # #
            . # . . .
            . . # # .
            . . . . #
            . # # # .
            `).showImage(0)
    } else if (char == "T") {
        images.createImage(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `).showImage(0)
    } else if (char == "U") {
        images.createImage(`
            . # . . #
            . # . . #
            . # . . #
            . # . . #
            . . # # .
            `).showImage(0)
    } else if (char == "V") {
        images.createImage(`
            # . . . #
            # . . . #
            . # . # .
            . # . # .
            . . # . .
            `).showImage(0)
    } else if (char == "W") {
        images.createImage(`
            # . . . #
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            `).showImage(0)
    } else if (char == "X") {
        images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `).showImage(0)
    } else if (char == "Y") {
        images.createImage(`
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            `).showImage(0)
    } else if (char == "Z") {
        images.createImage(`
            # # # # #
            . # . . .
            . . # . .
            . . . # .
            # # # # #
            `).showImage(0)
    } else {
        images.iconImage(IconNames.Skull).showImage(0)
    }
})
let char = ""
let list: string[] = []
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
list = abc.split("")
images.iconImage(IconNames.Ghost).showImage(0)
basic.forever(function () {
	
})
