// ##############################
// ########## Dutchman ##########
// ##### Yahka Color to HEX #####
// ##############################

const zigbeeDevice = [
	'zigbee.0.xxxxxxxxxxxxxx',
];

// Prepare variables
const mySubscription = {};

// Read all array objects, create new state in javascript instance and subscribe on changes
for (const device in zigbeeDevice) {
	const deviceName = `yahkaColor.${zigbeeDevice[device].split('.').join('__')}`;

	// Create State to handle convertion in RGB
	// @ts-ignore
	createState(`${deviceName}.hue` , {
		'name': `Hue of`,
		'role': 'level.color.hue',
		'type': 'number'
	});
	// @ts-ignore
	createState(`${deviceName}.sat`, {
		'name': `Sat`,
		'role': 'level.color.sat',
		'type': 'number'
	});

	// Subscribe on state changes of converted hue value
	// @ts-ignore
	mySubscription[`${deviceName}.hue`] = on(
        [`javascript.${instance}.${deviceName}.hue`, 
        `javascript.${instance}.${deviceName}.sat`,
        `${zigbeeDevice[device]}.brightness`,
        // `${zigbeeDevice[device]}.color`
        ], (data) => {
        // if (stateDetails[`${stateName}.hue`].blockChanges !== true){
        console.log(`${JSON.stringify(data.id)} change detected : ${data['newState'].val}`);

        ////////////////Variablen/////////////////
        var h, s, v, r, g, b
        ////////////////Funktionen////////////////
        //HSVtoRGB
        function HSVtoRGB() {
            var r1, g1, b1, i, f, p, q, t;
            i = Math.floor(h * 6);
            f = h * 6 - i;
            p = v * (1 - s);
            q = v * (1 - f * s);
            t = v * (1 - (1 - f) * s);
            switch (i % 6) {
                case 0: r1 = v, g1 = t, b1 = p; break;
                case 1: r1 = q, g1 = v, b1 = p; break;
                case 2: r1 = p, g1 = v, b1 = t; break;
                case 3: r1 = p, g1 = q, b1 = v; break;
                case 4: r1 = t, g1 = p, b1 = v; break;
                case 5: r1 = v, g1 = p, b1 = q; break;
            }
            r=Math.round(255 * r1);
            g=Math.round(255 * g1);
            b=Math.round(255 * b1);    
        }
        //In HEX konvertieren
        function toHex(number) {
            if (number < 0) number = 0xFFFFFFFF + number + 1;
            var n = number.toString(16).toUpperCase();
            if (n.length == 1) {
                n = '0' + n;
            }
            return n;
        }
        ///////////////////Variablenzuweisung//////////////////

        h = getState(`${deviceName}.hue`).val / 360;
        s = getState(`${deviceName}.sat`).val / 255;
        v = getState(`${zigbeeDevice[device]}.brightness`).val / 100;
        HSVtoRGB();
        setState(`${zigbeeDevice[device]}.color`, '#' + toHex(r) + toHex(g) + toHex(b));

    });
}
