# SNES Gamepad

A TypeScript library providing a simple interface for using USB SNES gamepads in HTML5 game projects.

For more on the :video_game: Gamepad API, see https://w3c.github.io/gamepad/ and https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API.

## Quick Start

The SNES Gamepad library allows you to bind callback functions to SNES gamepad events, such as `onConnected` or `onStartButtonPressed`.

```javascript
import snesGamepad = VictorySoftworks.IO.Gamepad.SnesGamepad;

let mapping = new snesGamepad.KiwitataSnesGamepadMapping();
let gamepad = new snesGamepad.SnesGamepad(navigator, window, mapping);

gamepad.onConnected(() => {
  console.log('SNES gamepad connected!');
});

gamepad.onDisconnected(() => {
  console.log('SNES gamepad disconnected.');
});

gamepad.onBButtonPressed(() => {
  console.log('Samus jumps into the air!');
});

gamepad.enable();
```

## Method Reference

| Method                | Parameters             | Description                                                                                                                                       |
|-----------------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| enable                | None                   | Enables a connected SNES gamepad. If no gamepad is connected, the browser will wait for one to be connected before firing an `onConnected` event. |
| disable               | None                   | Disables an SNES gamepad. The browser will stop listening for gamepad connections and button press events until `enable` is called.               |
| reset                 | None                   | Disables an SNES gamepad and clears all registered callbacks.                                                                                     |
| onConnected           | `callback: () => void` | Binds a callback function to execute when an SNES gamepad is connected.                                                                           |
| onDisconnected        | `callback: () => void` | Binds a callback function to execute when an SNES gamepad is disconnected.                                                                        |
| onUpButtonPressed     | `callback: () => void` | Binds a callback function to execute when the up button is pressed on the directional pad.                                                        |
| onDownButtonPressed   | `callback: () => void` | Binds a callback function to execute when the down button is pressed on the directional pad.                                                      |
| onLeftButtonPressed   | `callback: () => void` | Binds a callback function to execute when the left button is pressed on the directional pad.                                                      |
| onRightButtonPressed  | `callback: () => void` | Binds a callback function to execute when the right button is pressed on the directional pad.                                                     |
| onAButtonPressed      | `callback: () => void` | Binds a callback function to execute when the A button is pressed.                                                                                |
| onBButtonPressed      | `callback: () => void` | Binds a callback function to execute when the B button is pressed.                                                                                |
| onXButtonPressed      | `callback: () => void` | Binds a callback function to execute when the X button is pressed.                                                                                |
| onYButtonPressed      | `callback: () => void` | Binds a callback function to execute when the Y button is pressed.                                                                                |
| onLeftBumperPressed   | `callback: () => void` | Binds a callback function to execute when the left bumper is pressed.                                                                             |
| onRightBumperPressed  | `callback: () => void` | Binds a callback function to execute when the right bumper is pressed.                                                                            |
| onSelectButtonPressed | `callback: () => void` | Binds a callback function to execute when the select button is pressed.                                                                           |
| onStartButtonPressed  | `callback: () => void` | Binds a callback function to execute when the start button is pressed.                                                                            |

## Available Mappings

The SNES Gamepad library comes with two button mappings:

- `KiwitataSnesGamepadMapping`: Button mapping for [SNES gamepads manufactured by Kiwitata](http://amzn.to/2pp29ab).
- `StandardSnesGamepadMapping`: Button mapping for [SNES gamepads that follow the W3C spec](https://w3c.github.io/gamepad/#remapping).

Pull requests for additional mappings are welcome!

## Single-Player Only

The SNES Gamepad library does not currently support multiple gamepads connected to the same computer.
