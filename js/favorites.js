$(document).ready(function(){

    // Afficher les favoris 
    for ( let i = 0; i < localStorage.length; i++){
        let id = localStorage.key(i);
        console.log(id)
        let event = JSON.parse(localStorage.getItem(id));
        console.log(event)
        showFavoriteById(event)
    }

    // Supprimer les favoris 
    $('.delete').on("click", function() {
        let id = $(this).data("id");
        console.log(id);  
        window.localStorage.removeItem(id);
        $(this).closest('.event-article').remove();
    });

    // Aller sur la page de l évènement cliqué
    getDataId();


});



