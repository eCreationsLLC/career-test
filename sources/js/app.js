(function($){
    $(function(){
        print_hello_user();
    });

    function print_hello_user() {
        $.ajax({
            type: "GET",
            url: theme_vars.template_uri + "/users.json",
            beforeSend: function() {
                console.log( 'Loading...' );
            }
        })
            .done();
    }
})(jQuery);