let angle = 0
let millig = 0
servos.P0.setAngle(90)
basic.pause(2000)
basic.forever(function () {
    millig = input.acceleration(Dimension.X)
    angle = pins.map(
    millig,
    -1023,
    1023,
    0,
    180
    )
    servos.P0.setAngle(angle)
})
