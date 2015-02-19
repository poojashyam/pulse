Clazz.footerWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
            //this.templateUrl = config.templateUrl;
            this.data = config;
            console.log("hello");
            this.templateUrl = "footer.html";
            //console.log("widget1" +config.data);
        }
});