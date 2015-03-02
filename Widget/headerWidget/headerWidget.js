Clazz.headerWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
            this.data = config;
            this.templateUrl = "./Widget/headerWidget/header.html";
        }
});