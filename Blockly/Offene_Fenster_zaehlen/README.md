


# Offene Fenster Zählen

Dieses blockly script ermöglicht euch, offene Fenster mittels Fenster Sensoren zu zählen, die Anzahl und den Namen der geöffneten Fenster anzuzeigen und schreibt sie zur weiteren Verarbeitung in ein State.

### Installation :

Nachdem importieren des blockly scripts müssen noch folgende Einstellungen vorgenommen werden :

* Datenpunkte der zu überwachenden Fenster definieren.
![Einstellungen_01_screenshot beispiel](https://raw.githubusercontent.com/smarthome-ts-de/TS_Community_Script_library/master/Blockly/Offene_Fenster_zaehlen/Einstellungen_01.jpg)

Beispiel :

```
// Ab hier änderungen vornehmen. (-----v----- dieser und -----------v---------- dieser Name muss geändert werden)
createState('javascript.0.Fenster.Wohnzimmer_klein', {name: "Wohnzimmer_klein", role: "state", type: "boolean"});
createState('javascript.0.Fenster.Wohnzimmer_groß', {name: "Wohnzimmer_groß", role: "state", type: "boolean"});
```

* Die zu überwachenden Fenster umbenennen. (Die ersten beiden Reihen dürfen nicht geändert werden)
![Einstellungen_02_screenshot beispiel](https://raw.githubusercontent.com/smarthome-ts-de/TS_Community_Script_library/master/Blockly/Offene_Fenster_zaehlen/Einstellungen_02.jpg)

* Im Trigger die States der Fensterkontakte eintragen

![Einstellungen_03_screenshot beispiel](https://raw.githubusercontent.com/smarthome-ts-de/TS_Community_Script_library/master/Blockly/Offene_Fenster_zaehlen/Einstellungen_03.jpg)

* Bei "Wert" die im Trigger angegeben Datenpunkte einfügen und bein "steure" die selbst erstellten Datenpunkte.
![Einstellungen_04_screenshot beispiel](https://raw.githubusercontent.com/smarthome-ts-de/TS_Community_Script_library/master/Blockly/Offene_Fenster_zaehlen/Einstellungen_04.jpg)

* Hier den selbst erstellten Datenpunkt angeben und darunter das Fenster benennen wie es in dem Datenpunkt der offenen Fenster ausgeschrieben werden soll.
![Einstellungen_05_screenshot beispiel](https://raw.githubusercontent.com/smarthome-ts-de/TS_Community_Script_library/master/Blockly/Offene_Fenster_zaehlen/Einstellungen_05.jpg)

#### Beispiel :
```
Offene Fenster,,,,,Badezimmer rechts,,,Wohnzimmer groß,,,Schlafzimmer groß,,,
```
![States screenshot beispiel](https://raw.githubusercontent.com/smarthome-ts-de/TS_Community_Script_library/master/Blockly/Offene_Fenster_zaehlen/States.jpg)
  
## Contributors and source reffenrences
  

## Changelog

* (Denkra) Script veröffentlicht