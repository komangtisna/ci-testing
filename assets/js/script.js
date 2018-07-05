$(window).on('load', function() {
    $('.loader-progress').hide();
});

//=================================== History PushState
$(document).ready(function() {
    var base_url = $('#base_url').val();

    $('#menu-nav a').click(function(e){
        e.preventDefault();
        $('.loader-progress').show();
        
        var targetUrl = $(this).attr('href'),
            targetTitle = $(this).attr('title');
        
        $("#menu-nav a[href='" + window.location.pathname + "']").fadeTo(500, 1.0);
        
        window.history.pushState({url: "" + targetUrl + ""}, targetTitle, targetUrl);

        var data = "title="+ targetTitle;

        $.ajax({
            type: "POST",
            cache: false,
            url: base_url + "pushstate-show",
            data: data,
            success: function (response) {
                $('.content_show').html(response);
                setTimeout(function() {
                    $('.loader-progress').hide();
                },2000)
            },
            error: function() {
                console.log("error");
            }
        });
    });
})
//================================ End History PushState