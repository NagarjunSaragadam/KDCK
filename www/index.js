
var app = {
   
    
 
    initialize: function() {
        this.bindEvents();		
	},


    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);  		
    },
	
    onDeviceReady: function() {  
	    alert("Hai Rupa");
		   alert(cordova.plugins.uid.IMEI);
    }
	
   
    
	
};      

