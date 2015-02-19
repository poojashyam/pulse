Clazz.menuWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        
        initialize : function(data){
            this.templateUrl = "menu.html";
            this.data = data;
        },
        
        apps1 : function(){
            //$('.change').hide();
            $('.rootMenu').click(function(){
                $('.subMenu').children.toggle()
            })
            /*$('#changePaymentMethod').click(function(){
                $('#otherPaymentMethod').toggle()
            })
            $('#changeBillingAddress').click(function(){
                $('#otherBillingAddress').toggle()
            })
            $('.otherBillingAddress').click(function(){
               otherbillingAddress=$(this).text();
 $('#currentBillingAddress').text(otherbillingAddress)
            })*/
            
            },
        postRender : function(){
        this.apps1();
        }
});