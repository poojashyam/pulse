Clazz.GenericWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
            this.templateUrl = "contact.html";
            this.data = config.data;
        },
        postRender : function(){
        var widgeta=new Clazz.footerWidget(this.config);
        var widgetacontainer = document.getElementById("footercontainer");
        widgeta.render(widgetacontainer);
        }
});