Clazz.footerWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
            //this.templateUrl = config.templateUrl;
            this.data = config;
         
            this.templateUrl = "./Widget/footerWidget/footer.html";
            //console.log("widget1" +config.data);
        }
});