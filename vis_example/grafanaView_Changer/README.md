# Automatically create an grafana URL based on dropdown for view and time range

Using this blockly script will give you the possibility to easily switch between your differnt Grafana Views and their time range.  

## URL build blockly
![URL Builder](https://raw.githubusercontent.com/smarthome-ts-de/TS_Community_Script_library/master/vis_example/grafanaView_Changer/img_blocklyURLbuilder.png)

## configuration
### Blockly
Import content from blockly_grafanaVisu.xml to a new Blockly script in ioBroker

### Initialise variables
ipAddr: Set IP address over which grafana is accessable
port: Set port over which grafana is accessable


### Edit the path for new created states
Go in your Blockly editor to the block "Javascript-Funktion - createStates" and hit the three dots (...)

Here you can set the path where the new states shall be created.
If you change the default path for the new states you need to adapt this values in the blockly as well

## VIS
To have an easy start import in your VIS view the wiget widdget_grafanaVisuTimeDropdown.json and widdget_grafanaVisuViewDropdown.json

Widget viewSelect
You need to adapet the attributes "Werte" and "Texte" to your own values
If your Link to your Grafana view look like this you need to fill "Werte" and "Texte" like this:
Werte: L6bfbnwWz/benzinpreise
Texte: Benzinpreise

To show the selected Grafana widget inject an iframe to your VIS view and insert in the attribute "Quelle" the following binding: {0_userdata.0.grafanaVisu.grafanaViewURL}

## Changelog

### 0.0.1
* (Dutchman) initial release

The MIT License (MIT)

Copyright (c) 2020 

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
