
$(document).ready(function(){

    // Lancer la recherche au clic puis la requete de la recherche
    $('#submit').click(function(e) {
        e.preventDefault();
        var keyword = $('#keyword').val();
        console.log(keyword);

        (async function() {
            const searchEvents = await Promise.resolve(getSearchEvents(keyword));
            showSearchEvents(searchEvents);

            getDataId();

            selectFavorite();
        
        })();
    });


});
