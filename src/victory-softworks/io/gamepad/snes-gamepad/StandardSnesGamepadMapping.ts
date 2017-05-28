// Implementation of the Standard SNES Gamepad as defined by
// the W3C specification: https://w3c.github.io/gamepad/.

/// <reference path="SnesGamepadMapping.ts" />

namespace VictorySoftworks.IO.Gamepad.SnesGamepad {
  export class StandardSnesGamepadMapping implements SnesGamepadMapping {
    public upButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[12].pressed;
    }

    public downButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[13].pressed;
    }

    public leftButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[14].pressed;
    }

    public rightButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[15].pressed;
    }

    public AButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[1].pressed;
    }

    public BButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[0].pressed;
    }

    public XButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[3].pressed;
    }

    public YButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[2].pressed;
    }

    public leftBumperIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[4].pressed;
    }

    public rightBumperIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[5].pressed;
    }

    public selectButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[8].pressed;
    }

    public startButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[9].pressed;
    }
  }
}
