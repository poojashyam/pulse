Clazz.photonUpdatesWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
            this.data = config;
            this.templateUrl = "./Widget/photonUpdates/photonUpdates.html";
        },
        /*jQuer1: function(){
            $(document).ready(function(){
                
                
                
            }
            
        }
        */
        jq1: function(){
        $('.placing table').show();
            $('#touch').click(function(){
                $('.placing table').toggle();
            })
                      
            },
        postRender : function(){
        this.jq1();
        }
      
});










