glossary.md/* Search */

function getSearchTerm()
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == 'q') {
            return sParameterName[1];
        }
    }
}

$(document).ready(function() {
    var search_term = getSearchTerm(),
        $search_modal = $('#mkdocs_search_modal');

    if(search_term) {
        $search_modal.modal();
    }

    $search_modal.on('shown.bs.modal', function () {
        $search_modal.find('#mkdocs-search-query').focus();
    });

    /* Highlight */

    hljs.initHighlightingOnLoad();
    $('table').addClass('table table-striped table-hover');

    // Left navbar

    $(".panel-collapse").each(function(){
        $(this).on("show.bs.collapse", function(){
            $(".panel-collapse.in").collapse("hide");
        });
    });

    //   if ($.fn.niceScroll){
    // var mainScroller = $("html").niceScroll({
    //        cursorcolor: "#202f38",
    //         cursorborder :"0px solid",
    // });
    // }

    // $(".panel-collapse").each(function(){
    //     $(this).collapse("toggle");
    // });

    // $('.sidebar_nav').affix({
    //   offset: {
    //     top: 0
    //   }
    // });

    // $('.sidebar_nav').on("affix.bs.affix", function(){
    //   alert('affixed bottom');
    //   console.log("cool");
    // });

});

// $('body').scrollspy({
//     target: '.sidebar_nav'
// });

/* Prevent disabled links from causing a page reload */
$("li.disabled a").click(function() {
    event.preventDefault();
});



