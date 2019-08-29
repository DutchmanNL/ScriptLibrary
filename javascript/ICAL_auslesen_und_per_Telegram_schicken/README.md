







# ICal Adapter auslesen und per Telegram schicken

Dieses Javascript ermöglicht euch, Kalendereinträge über den Ical Adapter auszulesen und per Telegram zu schicken.

### Installation :

Nachdem importieren des Javascriptes müssen noch folgende Einstellungen vorgenommen werden :

* Statenamen anpassen  bei Bedarf. In jedem State sind 2 mal der Name und einmal der Speicherort angegeben. Standartmäßig werden sie in "javascript.0.Kalender" erstellt. Wenn der Name von "Anzahl_Kalender_Eintraege" geändert wird, muss auch der Datenpunkt in Zeile 9 geändert werden.
```
// States erstellen
createState('javascript.0.Kalender.Kalender_auslesen', {name: "Kalender_auslesen", role: "state", type: "boolean", def : false});
createState('javascript.0.Kalender.Kalender_auslesen_Text', {name: "Kalender_auslesen_Text", role: "state", type: "string", def : "script wurde noch nicht ausgefuert"});
createState('javascript.0.Kalender.Anzahl_Kalender_Eintraege', {name: "Anzahl_Kalender_Eintraege", role: "state", type: "number", def : 3});
```
```
on({id: "javascript.0.Kalender.Kalender_auslesen", val: true}, function (obj) {
```
* Die Zahl in den Klammern muss für den dazugehörigen Kalender geändert werden wenn mehr als ein Kalender besteht. 
```
const ical_object = getState("ical." + 0 + ".data.table").val;
```
* Hier kann die Trennung  (Zeichen in den Anführungszeichen) geändert werden wie es in dem State gespeichert wird.
```
kalender_eintraege = kalender_eintraege + result + " | ";
```


Wenn das Script das erste mal gestartet wird, werden die States erstellt in denen auch noch was eingestellt werden "kann". 
* Hier kann eingestellt werden, wie viele Kalendereinträge abgefragt werden.  
![Einstellungen_01_screenshot beispiel](https://raw.githubusercontent.com/smarthome-ts-de/TS_Community_Script_library/master/javascript/ICAL_auslesen_und_per_Telegram_schicken/Einstellungen_01.jpg)






## Contributors and source reffenrences
* [DutchmanNL](https://github.com/DutchmanNL)
  
## Changelog

* (Denkra) Script veröffentlicht 