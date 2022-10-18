////////////////////////////////
// JavaScript for Posts page //
//////////////////////////////

$(function() {
    // Executed when js-menu-icon js clicked 
    $('.js-menu-icon').click(function() {
        $(this).next().toggle();
    })

})

$(function(){
    $('.js-popover').popover({
        container: 'body'

    })    
}
)
