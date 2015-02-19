Clazz.GenericWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
            this.templateUrl = "contact.html";
            this.config = config;
            
        },
        postRender : function(){
        var widgeta=new Clazz.footerWidget(this.config.data);
        var widgetacontainer = document.getElementById("footercontainer");
        widgeta.render(widgetacontainer);
        var headerWidget=new Clazz.headerWidget(this.config);
        var headerContainer = document.getElementById("headerContainer");
        headerWidget.render(headerContainer);
        }
});