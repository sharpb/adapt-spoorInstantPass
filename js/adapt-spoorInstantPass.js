define(function(require) {

	var Adapt = require('coreJS/adapt');
    
    // Listen for course ready
    Adapt.on('app:dataReady', function () {
        
        // Get spoor configuration
        var spoorConfig = Adapt.config.get('_spoor');
        
        // Check spoor is available and enabled
        if (spoorConfig && spoorConfig._isEnabled) {
            // Get scorm object and set lesson to passed
            try {
                var scormAPI = require('extensions/adapt-contrib-spoor/js/scorm');
            } catch (error) {
                console.log("adapt-spoorInstantPass: Could not get SCORMAPI.", error);
            }
            scormAPI.setPassed();
        } else {
            console.log("adapt-spoorInstantPass: Spoor not found or enabled!");
        }
    });
    
});