// Implementation of the Kiwitata SNES Gamepad: http://amzn.to/2pp29ab

/// <reference path="SnesGamepadMapping.ts" />

namespace VictorySoftworks.IO.Gamepad.SnesGamepad {
  export class KiwitataSnesGamepadMapping implements SnesGamepadMapping {
    public upButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.axes[1] == -1;
    }

    public downButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.axes[1] == 1;
    }

    public leftButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.axes[0] == -1;
    }

    public rightButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.axes[0] == 1;
    }

    public AButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[1].pressed;
    }

    public BButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[2].pressed;
    }

    public XButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[0].pressed;
    }

    public YButtonIsPressed(gamepad: Gamepad): boolean {
      return gamepad.buttons[3].pressed;
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
