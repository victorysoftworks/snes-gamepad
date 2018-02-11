// For more on the Gamepad API, see https://w3c.github.io/gamepad/.

/// <reference path="SnesGamepadButton.ts" />
/// <reference path="SnesGamepadEventHandler.ts" />
/// <reference path="SnesGamepadMapping.ts" />

namespace VictorySoftworks.IO.Gamepad.SnesGamepad {
  export class SnesGamepad {
    private gamepad: Gamepad;
    private gamepadWasConnectedPreviousFrame: boolean = false;
    private buttonPressHandlers: Array<SnesGamepadEventHandler> = [];
    private listenerLoopAnimationFrame: number;
    private static readonly HANDLER_TRIGGER = 0;
    private static readonly HANDLER_CALLBACK = 1;

    constructor(private readonly navigator: Navigator,
      private readonly window: Window,
      private readonly mapping: SnesGamepadMapping) { }

    public enable(): void {
      this.startButtonPressListener();
    }

    public disable(): void {
      this.stopButtonPressListener();
    }

    public reset(): void {
      this.stopButtonPressListener();
      this.clearButtonPressHandlers();
    }

    private startButtonPressListener(): void {
      this.listenerLoopAnimationFrame = this.window.requestAnimationFrame(
        () => { this.buttonPressListener() }
      );
    }

    private stopButtonPressListener(): void {
      this.window.cancelAnimationFrame(this.listenerLoopAnimationFrame);
    }

    private clearButtonPressHandlers(): void {
      this.buttonPressHandlers = new Array<SnesGamepadEventHandler>();
    }

    private buttonPressListener(): void {
      this.getConnectedGamepad();

      if (this.gamepadIsConnected()) {
        this.handleGamepadInput();
      } else {
        this.handleDisconnectedGamepad();
      }

      this.startButtonPressListener();
    }

    private getConnectedGamepad(): void {
      this.gamepad = this.navigator.getGamepads()[0];
    }

    private gamepadIsConnected(): boolean {
      return this.gamepad !== null;
    }

    private handleGamepadInput(): void {
      if (!this.gamepadWasConnectedPreviousFrame) {
        this.executeButtonPressHandlers(SnesGamepadEvent.OnConnected);
        this.flagGamepadWasConnectedPreviousFrame(true);
      }

      if (this.mapping.upButtonIsPressed(this.gamepad)) {
        this.executeButtonPressHandlers(SnesGamepadEvent.OnUpButtonPressed);
      } else if (this.mapping.downButtonIsPressed(this.gamepad)) {
        this.executeButtonPressHandlers(SnesGamepadEvent.OnDownButtonPressed);
      }

      if (this.mapping.rightButtonIsPressed(this.gamepad)) {
        this.executeButtonPressHandlers(SnesGamepadEvent.OnRightButtonPressed);
      } else if (this.mapping.leftButtonIsPressed(this.gamepad)) {
        this.executeButtonPressHandlers(SnesGamepadEvent.OnLeftButtonPressed);
      }

      if (this.mapping.AButtonIsPressed(this.gamepad)) {
        this.executeButtonPressHandlers(SnesGamepadEvent.OnAButtonPressed);
      }

      if (this.mapping.BButtonIsPressed(this.gamepad)) {
        this.executeButtonPressHandlers(SnesGamepadEvent.OnBButtonPressed);
      }

      if (this.mapping.XButtonIsPressed(this.gamepad)) {
        this.executeButtonPressHandlers(SnesGamepadEvent.OnXButtonPressed);
      }

      if (this.mapping.YButtonIsPressed(this.gamepad)) {
        this.executeButtonPressHandlers(SnesGamepadEvent.OnYButtonPressed);
      }

      if (this.mapping.leftBumperIsPressed(this.gamepad)) {
        this.executeButtonPressHandlers(SnesGamepadEvent.OnLeftBumperPressed);
      }

      if (this.mapping.rightBumperIsPressed(this.gamepad)) {
        this.executeButtonPressHandlers(SnesGamepadEvent.OnRightBumperPressed);
      }

      if (this.mapping.selectButtonIsPressed(this.gamepad)) {
        this.executeButtonPressHandlers(SnesGamepadEvent.OnSelectButtonPressed);
      }

      if (this.mapping.startButtonIsPressed(this.gamepad)) {
        this.executeButtonPressHandlers(SnesGamepadEvent.OnStartButtonPressed);
      }
    }

    private executeButtonPressHandlers(trigger: SnesGamepadEvent) {
      this.buttonPressHandlersByEventType(trigger).forEach(
        handler => handler[SnesGamepad.HANDLER_CALLBACK]()
      );
    }

    private buttonPressHandlersByEventType(trigger: SnesGamepadEvent) {
      return this.buttonPressHandlers.filter(
        handler => handler[SnesGamepad.HANDLER_TRIGGER] == trigger
      );
    }

    private handleDisconnectedGamepad(): void {
      if (this.gamepadWasConnectedPreviousFrame) {
        this.executeButtonPressHandlers(SnesGamepadEvent.OnDisconnected);
        this.flagGamepadWasConnectedPreviousFrame(false);
      }
    }

    private flagGamepadWasConnectedPreviousFrame(wasConnected: boolean) {
      this.gamepadWasConnectedPreviousFrame = wasConnected;
    }

    public onConnected(callback: () => void): void {
      this.registerButtonPressHandler(SnesGamepadEvent.OnConnected, callback);
    }

    public onDisconnected(callback: () => void): void {
      this.registerButtonPressHandler(SnesGamepadEvent.OnDisconnected, callback);
    }

    public onUpButtonPressed(callback: () => void): void {
      this.registerButtonPressHandler(SnesGamepadEvent.OnUpButtonPressed, callback);
    }

    public onDownButtonPressed(callback: () => void): void {
      this.registerButtonPressHandler(SnesGamepadEvent.OnDownButtonPressed, callback);
    }

    public onLeftButtonPressed(callback: () => void): void {
      this.registerButtonPressHandler(SnesGamepadEvent.OnLeftButtonPressed, callback);
    }

    public onRightButtonPressed(callback: () => void): void {
      this.registerButtonPressHandler(SnesGamepadEvent.OnRightButtonPressed, callback);
    }

    public onAButtonPressed(callback: () => void): void {
      this.registerButtonPressHandler(SnesGamepadEvent.OnAButtonPressed, callback);
    }

    public onBButtonPressed(callback: () => void): void {
      this.registerButtonPressHandler(SnesGamepadEvent.OnBButtonPressed, callback);
    }

    public onXButtonPressed(callback: () => void): void {
      this.registerButtonPressHandler(SnesGamepadEvent.OnXButtonPressed, callback);
    }

    public onYButtonPressed(callback: () => void): void {
      this.registerButtonPressHandler(SnesGamepadEvent.OnYButtonPressed, callback);
    }

    public onLeftBumperPressed(callback: () => void): void {
      this.registerButtonPressHandler(SnesGamepadEvent.OnLeftBumperPressed, callback);
    }

    public onRightBumperPressed(callback: () => void): void {
      this.registerButtonPressHandler(SnesGamepadEvent.OnRightBumperPressed, callback);
    }

    public onSelectButtonPressed(callback: () => void): void {
      this.registerButtonPressHandler(SnesGamepadEvent.OnSelectButtonPressed, callback);
    }

    public onStartButtonPressed(callback: () => void): void {
      this.registerButtonPressHandler(SnesGamepadEvent.OnStartButtonPressed, callback);
    }

    private registerButtonPressHandler(trigger: SnesGamepadEvent, callback: () => void): void {
      this.buttonPressHandlers.push([trigger, callback]);
    }

    public getPressedButtons(): Array<SnesGamepadButton> {
      this.getConnectedGamepad();

      if (this.gamepadIsConnected()) {
        let pressedButtons = [];

        if (this.mapping.upButtonIsPressed(this.gamepad)) {
          pressedButtons.push(SnesGamepadButton.Up);
        }

        if (this.mapping.downButtonIsPressed(this.gamepad)) {
          pressedButtons.push(SnesGamepadButton.Down);
        }

        if (this.mapping.leftButtonIsPressed(this.gamepad)) {
          pressedButtons.push(SnesGamepadButton.Left);
        }

        if (this.mapping.rightButtonIsPressed(this.gamepad)) {
          pressedButtons.push(SnesGamepadButton.Right);
        }

        if (this.mapping.AButtonIsPressed(this.gamepad)) {
          pressedButtons.push(SnesGamepadButton.A);
        }

        if (this.mapping.BButtonIsPressed(this.gamepad)) {
          pressedButtons.push(SnesGamepadButton.B);
        }

        if (this.mapping.XButtonIsPressed(this.gamepad)) {
          pressedButtons.push(SnesGamepadButton.X);
        }

        if (this.mapping.YButtonIsPressed(this.gamepad)) {
          pressedButtons.push(SnesGamepadButton.Y);
        }

        if (this.mapping.leftBumperIsPressed(this.gamepad)) {
          pressedButtons.push(SnesGamepadButton.LeftBumper);
        }

        if (this.mapping.rightBumperIsPressed(this.gamepad)) {
          pressedButtons.push(SnesGamepadButton.RightBumper);
        }

        if (this.mapping.selectButtonIsPressed(this.gamepad)) {
          pressedButtons.push(SnesGamepadButton.Select);
        }

        if (this.mapping.startButtonIsPressed(this.gamepad)) {
          pressedButtons.push(SnesGamepadButton.Start);
        }

        return pressedButtons;
      } else {
        return [];
      }
    }
  }
}
