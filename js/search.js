
$(document).ready(function(){

    $('#submit').click(function(e) {
        e.preventDefault();
        var keyword = $('#keyword').val();
        console.log(keyword);

        (async function() {
            const searchEvents = await Promise.resolve(getSearchEvents(keyword));
            showSearchEvents(searchEvents);

            getDataId();

            selectFavorite();

            favoritesOnCurrentPage();
        
        })();
    });


});
