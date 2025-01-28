let 右 = 0
let 左 = 0
basic.showIcon(IconNames.Happy)
while (!(input.buttonIsPressed(Button.A))) {
    cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Stop)
}
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    左 = pins.digitalReadPin(DigitalPin.P13)
    右 = pins.digitalReadPin(DigitalPin.P12)
    if (左 == 0 && 右 == 0) {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Stop)
        basic.pause(500)
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Back)
        basic.pause(500)
        if (Math.randomBoolean()) {
            cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_SpinLeft)
        } else {
            cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_SpinRight)
        }
        basic.pause(500)
    } else if (左 == 1 && 右 == 0) {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Back)
        basic.pause(200)
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_SpinLeft)
        basic.pause(300)
    } else if (左 == 0 && 右 == 1) {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Back)
        basic.pause(200)
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_SpinRight)
        basic.pause(300)
    } else {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Run)
    }
})
