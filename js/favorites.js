$(document).ready(function(){

        $('.favorite-title').on('click',function(){
            var id = $(this).data("id");
            console.log(id);  
            window.localStorage.setItem(id, id);
        })

        $('.delete').on("click", function() {
            var id = $(this).data("id");
            console.log(id);  
            window.localStorage.removeItem(id);
        });

});


