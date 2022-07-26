# Tap_PDMMP
A homeless man's Project Diva Mega Mix Plus Controller.

![image](https://user-images.githubusercontent.com/101374892/181129034-8b3a6892-b380-48dd-94b9-82a798728be4.png)

### What is this?

This is the "owotrack for the Project Diva community". It allows you to use your mobile devices as controllers!

**Note, this project is experimental. Gameplay results may vary depending on WiFi stability, device type, so on.**

(And yes, there's an OBS widget.)

### How do I use it?

#### Starting the server

1. Make sure you have the latest version of Node.JS installed on your system.
2. Download the [master](https://github.com/raymonable/Tap_PDMMP/archive/refs/heads/main.zip) zip and extract to a location on your computer.
3. Open a command terminal in that location, and run `npm i`.
4. Then run `node server` after all the packages finish installing.

#### Using it

1. Make sure your mobile device is connected to the same network as your computer.
2. Go to your web browser, and input your computer's local ip address (can be found by running `ipconfig` or `ifconfig`).
3. Once a Hatsune Miku splash screen pops up, tap on the display.
4. Play some Project Diva (Mega Mix Plus)!

### How do I use the OBS widget?

1. Open OBS.
2. Create a new browser source.
3. Set the url to `http://localhost/overlay`.
4. Set the width to 800, and height to 400.
5. Enable `Shutdown source when not visible`.
6. Press OK, and the widget should show up!

Have fun, and report any bugs! :)

### Additional Information

#### What modules does this use?
- `express` - hosting the local server
- `ws` - hosting the websocket server
- `nut.js` - controlling the computer for gameplay purposes

#### Will there be a V2?
Most likely, but not sure why it'd be too necessary just yet.
