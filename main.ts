input.onButtonPressed(Button.A, function () {
    if (vor) {
        pins.servoWritePin(AnalogPin.P0, 0)
        vor = 0
    } else {
        pins.servoWritePin(AnalogPin.P0, 90)
        vor = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P0, 90)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    } else if (receivedString == "B") {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_B,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    } else if (receivedString == "AB") {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_AB,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    }
})
input.onButtonPressed(Button.B, function () {
    if (zur) {
        pins.servoWritePin(AnalogPin.P0, 180)
        zur = 0
    } else {
        pins.servoWritePin(AnalogPin.P0, 90)
        zur = 1
    }
})
let zur = 0
let vor = 0
radio.setGroup(0)
basic.showIcon(IconNames.SmallDiamond)
vor = 1
zur = 1
