# Send picture of camera by telegram

This script will take a snapshot with your camera (camera must suppirt this) and send it to all telegram receipts.
3 pictures are send with an timout of 3 seconds

All credits to :

* Kaiman55 https://forum.iobroker.net/viewtopic.php?f=20&t=19173&hilit=function+getImage+%7B&start=20


## configuration

Provide the wanted trigger state (like motion sensor)
'const trigger = 'zigbee.0.00158d0001ef6056.double_click'  // Define trigger here, example : motion sensor or button '

Provide an URL te get the picture
'const camerapicture = 'http://192.168.178.43/eec360c16d4f74799eacd7a662b3ede4/live/snapshot_720.jpg' ;    // Object from camera'

Provide an temporary path to store the picture (will be deleted after 5 seconds)
'const imagepath = '\tmp'                                       // Path to temporary store image from camera'

Define messae to be send with picture
'const message = 'Motion detected'                // Message tesxt to telegram when picture is sent'

## Changelog

### 0.5.0
* (Dutchman) repository created

The MIT License (MIT)

Copyright (c) 2019 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.