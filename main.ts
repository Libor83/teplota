let displej = TM1637.create(
DigitalPin.P1,
DigitalPin.P0,
7,
4
)
displej.on()
basic.forever(function () {
    displej.showNumber(dstemp.celsius(DigitalPin.P5))
})
