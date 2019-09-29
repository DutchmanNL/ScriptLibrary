/*
############################################
################# Dutchman #################
############## CV trigger 1.0 ##############
############################################
*/

// List all devices at script start 
log("#############  Start Heating script  #############");
log("###############  Watching Devices  ###############");
    $('channel[state.id=*.1.LEVEL]').each(function (id,name, i) {

    log(getObject(id).common.name + " = " + getState(id).val + "%");

});
log("################  Devices Loaded  ################");


// Subscribe on all valve states and execute function when value is changed
on({id: /\.LEVEL$/, change: "ne"}, function (obj) {
    var device_name = obj.common.name;
    var oldval = obj.oldState.val;
    var newval = obj.state.val;
    // Write to log which devices initiated the trigger
    log ("trigger initiated by : " + device_name + " | current value = " + newval + "% | previous value = " + oldval + "%");
    
    // Create heating variable, default = false
    var heating = false;

    // Read all states with attribute id name *VALVE_STATE and theyr value, activate heating if an value is above 10%)
    $('channel[state.id=*.1.LEVEL]').each(function (id,name, i) {

        if (getState(id).val > "10") {   //Activate heating when valve_state > 5
            heating = true;
            log("Room : " + getObject(id).common.name + " heating needed | valve position = " + getState(id).val + "%");
        }
    });

    // Write to log if heating is required
    log("Heating required : " + heating);
    CV_Switch(heating)

});

// Switch heating device on/off
function CV_Switch (status){

    // Switch CV on/off based on heating variable
    if (status === true && getState("shelly.0.SHSW-1#0586B7#1.Relay0.Switch").val === false){
        setState("shelly.0.SHSW-1#0586B7#1.Relay0.Switch", true);
        log("CV activated");
    } else if (status === false && getState("shelly.0.SHSW-1#0586B7#1.Relay0.Switch").val === true){
        setState("shelly.0.SHSW-1#0586B7#1.Relay0.Switch", false);
        log("CV deactivated");        
    } else {
        log ("nothing to do, heating required = " + status + " | CV switch = " + getState("shelly.0.SHSW-1#0586B7#1.Relay0.Switch").val);
    }

}