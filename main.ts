radio.onReceivedString(function (receivedString) {
    if (receivedString == "Hi") {
        basic.showString("Hi")
    } else if (receivedString == "Bye") {
        basic.showString("Bye")
    }
    control.reset()
})
control.onEvent(EventBusSource.MICROBIT_ID_RADIO, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("Hi")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("Bye")
    }
})
radio.setGroup(255)
basic.forever(function () {
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_RADIO,
    EventBusValue.MICROBIT_EVT_ANY
    )
})
