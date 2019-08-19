let Switch = function () {
    this.status = false;

    this.switchOnAndOff = function () {
        if (!this.status) {
             this.status = true;
        } else {
             this.status = false;
        }
    };

    this.switchLamp = function (lamp) {
        if (this.status) {
            lamp.turnOn();
        } else {
            lamp.turnOff();
        }
    };
};

let Lamp = function () {
    this.status = false;

    this.light = function () {
        if (this.status) {
            alert("lighting");
        } else {
            alert("not lighting");
        }
    };
    this.turnOn = function () {
        this.status = true;
    };

    this.turnOff = function () {
        this.status = false;
    }
};

let lightSwitch = new Switch();
let lamp = new Lamp();

function statusOfTheLamp() {
    lightSwitch.switchOnAndOff();
    lightSwitch.switchLamp(lamp);
    lamp.light();

}