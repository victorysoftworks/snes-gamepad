namespace VictorySoftworks.IO.Gamepad.SnesGamepad {
  export interface SnesGamepadMapping {
    upButtonIsPressed(gamepad: Gamepad): boolean;
    downButtonIsPressed(gamepad: Gamepad): boolean;
    leftButtonIsPressed(gamepad: Gamepad): boolean;
    rightButtonIsPressed(gamepad: Gamepad): boolean;
    AButtonIsPressed(gamepad: Gamepad): boolean;
    BButtonIsPressed(gamepad: Gamepad): boolean;
    XButtonIsPressed(gamepad: Gamepad): boolean;
    YButtonIsPressed(gamepad: Gamepad): boolean;
    leftBumperIsPressed(gamepad: Gamepad): boolean;
    rightBumperIsPressed(gamepad: Gamepad): boolean;
    selectButtonIsPressed(gamepad: Gamepad): boolean;
    startButtonIsPressed(gamepad: Gamepad): boolean;
  }
}
