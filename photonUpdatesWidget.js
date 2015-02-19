Clazz.photonUpdatesWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
            this.data = config;
            this.templateUrl = "photonUpdates.html";
        }
});