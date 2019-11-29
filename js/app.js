// Affiche les derniers évènements publiés
function showLastEvents(events) {
    events.forEach(event => {
        $('.last-events').append(`
            <article class="event-article" >
                <a class="event" data-id="${event.id}">
                    <img src="${event.cover_url}">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="date-description">${event.date_description}</p>
                    <p>${event.lead_text}</p>
                </a>
                <div>
                    <a><i class="far fa-heart favorite" title="Ajouter à mes favoris" data-id="${event.id}"></i></a>
                </div>
            </article>`);
        
            for ( let i = 0; i < localStorage.length; i++){
                let id = localStorage.key(i);
                if (localStorage.getItem(id) == $('.favorite').data('id')) {
                    $(this).addClass('fas');
                    console.log('test')
                }
            }

        
    });
}

// Affiche les prochains évènements
function showNextEvents(events) {
    events.forEach(event => {
        $('.next-events').append(`
            <article class="event-article" >
                <a class="event" data-id="${event.id}">
                    <img src="${event.cover_url}">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="date-description">${event.date_description}</p>
                    <p>${event.lead_text}</p>
                </a>
                <div>
                    <i class="far fa-heart favorite" title="Ajouter à mes favoris" data-id="${event.id}"></i>
                </div>
            </article>`);
    });
}

// Affiche les évènements corespondants à une recherche
function showSearchEvents(events) {

    $('.response-null').empty();
    $('.response-full').empty();

    if (events.length === 0) {

        $('.response-null').removeClass('hidden');

    } else {

        events.forEach(event => {
                $('.response-full').append(`<section class="response">
                <a class="event" data-id="${event.id}">
                    <div><img src="${event.cover_url}"></div>
                    <article class="response-article">
                    <h3 class="response-title">${event.title}</h3>
                    <p>${event.lead_text}</p>
                </a>
                <i id="search-favorite-icon" class="far fa-heart favorite" title="Ajouter à mes favoris" data-id="${event.id}"></i>
            </article>
        </section>`);       
        });

    }
}

// Affiche un évènement selon son id
function showEventById(event) {
    $('.one-event').append(`
        <section class="description">
            <h3 id="description-title" class="title">${event[0].title}</h3>
            <input name="id" type="hidden" value="${event[0].id}">
            <img src="${event[0].cover_url}">
            <p class="chapeau">${event[0].lead_text}</p>
            <p>${event[0].description}</p>
        </section>

        <section class="infos">
            <div class="favorite-div-icon">
                <button class="favorite-button">
                    <i class="far fa-heart favorite" id="favorite-icon" data-id="${event[0].id}"></i>
                    <span>Ajouter à mes favoris</span>
                </button>
            </div>
            <ul>
                <li class="date">
                    <div class="icon"><i class="fas fa-calendar-alt"></i></div>
                    <div class="content"><p>${event[0].date_description}</p></div>
                </li>
                <li class="price">
                    <div class="icon"><i class="fas fa-euro-sign"></i></div>
                    <div class="content"><p>${event[0].price_detail}</p></div>
                </li>
                <li class="phone">
                    <div class="icon"><i class="fas fa-phone-alt"></i></div>
                    <div class="content"><br><p>${event[0].access_phone}</p>
                </li>
                <li class="mail">
                    <div class="icon"><i class="far fa-envelope-open"></i></div>
                    <div class="content"><br><p>${event[0].access_mail}</p></div>
                </li>
                <li class="fb">
                    <div class="icon"><i class="fab fa-facebook-f"></i></div>
                    <div class="content"><br><p><a href="${event[0].contact_facebook}">Page Facebook</a></p></div>   
                </li>         
                <li class="address">
                    <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                    <div class="content"><span class="italic">${event[0].address_name}<br>${event[0].address_street}<br>${event[0].address_zipcode} ${event[0].address_city}</span><br>
                    <p><br><span class="bold">En transport </span>${event[0].transport}</p></div>
                </li>
            </ul>
        </section>
        </section>`);

        $(".content:contains('null')").html("Non renseigné");

}

// Affiche les évènements favoris
function showFavoriteById(event) {
    $('.favorites-section').append(`
        <article class="event-article">
            <a class="event" data-id="${event[0].id}">
                <img src="${event[0].cover_url}">
                <h3 class="event-title">${event[0].title}</h3>
                <p>${event[0].lead_text}</p>
            </a>
            <div><i class="fas fa-trash-alt delete" title="Supprimer" data-id="${event[0].id}"></i></div>
        </article>`);
}

// Récupère l id de l évènement et redirige
function getDataId() {
    $('.event').click(function() {
        const id = $(this).data("id");
        console.log(id); 
        goToDescription(id);
    });
}

// Dirige vers la page de l évènement selon son id
function goToDescription(id){
    $(location).attr('href','description.html?id='+ id);   
}

// Gère les favoris dans le localStorage
function selectFavorite(){
    $('.favorite').click(function(e) {
        e.preventDefault();

        if ($(this).hasClass('fas') == false) {
            $(this).addClass('fas');
            const id = $(this).data('id');

            (async function() {   
                const value = await Promise.resolve(getEventById(id));
                window.localStorage.setItem(id, JSON.stringify(value)); 
            })();

        } else {
            $(this).removeClass('fas');
            const id = $(this).data("id");
            window.localStorage.removeItem(id);
        }
       
    })
}


// ================================
// Page ACCUEIL
// ================================

// Lance la requête des prochains et derniers évènements
(async function() {
    const [lastEvents, nextEvents] = await Promise.all([getLastEvents(), getNextEvents()]);
    showLastEvents(lastEvents);
    showNextEvents(nextEvents);

    getDataId();

    selectFavorite();

})();

