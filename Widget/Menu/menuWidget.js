Clazz.menuWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(data){
            this.templateUrl = "./Widget/Menu/menu.html";
            this.data = data;
        },
        
        apps1 : function(){
            $('#a').hide();
            $('#b').hide();
            $('#aa').click(function(){
                $('#a').toggle();
                $('#b').hide();
            })
            $('#bb').click(function(){
                $('#b').toggle();
                $('#a').hide();
            })
            },
        jq2: function(){
        $('.menu1 table').show();
            $('#menutoggle').click(function(){
                $('.menu1 table').toggle();
            })
                      
            },
        postRender : function(){
        this.apps1();
        this.jq2();
        }
});