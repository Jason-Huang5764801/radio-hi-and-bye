control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("Hi")
    }
})
