
// States erstellen
createState('javascript.0.Kalender.Kalender_auslesen', {name: "Kalender_auslesen", role: "state", type: "boolean", def : false});
createState('javascript.0.Kalender.Kalender_auslesen_Text', {name: "Kalender_auslesen_Text", role: "state", type: "string", def : "script wurde noch nicht ausgefuert"});
createState('javascript.0.Kalender.Anzahl_Kalender_Eintraege', {name: "Anzahl_Kalender_Eintraege", role: "state", type: "number", def : 3});


// Variablen auslesen
on({id: "javascript.0.Kalender.Kalender_auslesen", val: true}, function (obj) {
    var value = obj.state.val;
    var oldValue = obj.oldState.val;

    const ical_object = getState("ical." + 0 + ".data.table").val;
    const ical_amount = getState("javascript.0.Kalender.Anzahl_Kalender_Eintraege").val;
    let kalender_eintraege = "";

    // Einträge auslesen
    console.log(JSON.stringify(ical_object));

    for (const i in ical_object){

        if (i < ical_amount ) {

        const Kalender = "Kalender : " + ical_object[i]._calName + " ";
        const Datum = "Datum : " + ical_object[i].date + " ";
        const event = "Event : " + ical_object[i].event + " ";
        const GanzTag = "Ganzen Tag : " + ical_object[i]._allDay + " ";
        const Ort = "Ort : " + ical_object[i].location + " ";

        console.log(([Kalender, '\n', Datum, '\n', event, '\n', GanzTag, '\n', Ort].join('')));
        const result = ([Kalender, '\n', Datum, '\n', event, '\n', GanzTag, '\n', Ort].join(''));
            sendTo('telegram.0', {
                text:   result,
                reply_markup: {
                    resize_keyboard:   true,
                    one_time_keyboard: false
                }
            });
            kalender_eintraege = kalender_eintraege + result + " | ";
            }

    }
    // Einträge in State schreiben
    setState("javascript.0.Kalender.Kalender_auslesen_Text", kalender_eintraege, true);

    // Wert wieder auf falsche setzen
    setState("javascript.0.Kalender.Kalender_auslesen", false, true);
    

});