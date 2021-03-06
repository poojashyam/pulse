Clazz.GenericWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
            this.templateUrl = "./Widget/genericWidget/contact.html";
            this.config = config;
            
        },
        postRender : function(){
        var widgeta=new Clazz.footerWidget(this.config.data);
        var widgetacontainer = document.getElementById("footercontainer");
        widgeta.render(widgetacontainer);
        
        var headerWidget=new Clazz.headerWidget(this.config.data);
        var headerContainer = document.getElementById("headerContainer");
        headerWidget.render(headerContainer);
            
        var updateWidget = new Clazz.photonUpdatesWidget(this.config.data);
        var updateContainer = document.getElementById("updateContainer");
        updateWidget.render(updateContainer);
            
        var menuWidget = new Clazz.menuWidget(this.config.data);
        var menuContainer = document.getElementById("menuContainer");
        menuWidget.render(menuContainer);
        }
});