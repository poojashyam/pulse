Clazz.menuWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(data){
            this.templateUrl = "menu.html";
            this.data = data;
        },
        
        apps1 : function(){
            $('.subMenu').hide();
            $('.menuTitle').click(function(){
                $(this).children('.subMenu').toggle();
            })
            $('#swipe').click(function(){
                $('.menuTitle').toggle()
            })            
            },
        postRender : function(){
        this.apps1();
        }
});