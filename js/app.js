
function showLastEvents(events) {
    events.forEach(event => {
        $('.last-events').append(`
            <article class="event-article">
                <a href="description.html" data-id="${event.id}" class="event">
                    <img src="${event.cover_url}">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="date-description">${event.date_description}</p>
                    <p>${event.lead_text}</p>
                </a>
                <div>
                    <a><i class="far fa-heart" title="Ajouter à mes favoris" data-id="${event.id}"></i></a>
                </div>
            </article>`);
    });
}

function showNextEvents(events) {
    events.forEach(event => {
        $('.next-events').append(`
            <article class="event-article">
                <a href="" data-id="${event.id}" class="event">
                    <img src="${event.cover_url}">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="date-description">${event.date_description}</p>
                    <p>${event.lead_text}</p>
                </a>
                <div>
                    <a><i class="far fa-heart favorite" title="Ajouter à mes favoris" data-id="${event.id}"></i></a>
                </div>
            </article>`);
    });
}

function showSearchEvents(events) {

    if (events.length === 0) {

        $('.response-null').removeClass('hidden');

    } else {

        events.forEach(event => {
                $('.response-full').append(`<section class="response" data-id="${event.id}" class="event">
                <img src="${event.cover_url}">
                <input name="id" type="hidden" value="${event.id}">
                <article class="response-article">
                <h3 class="response-title">${event.title}</h3>
                <p>${event.lead_text}</p>
                <i id="search-favorite-icon" class="far fa-heart favorite" title="Ajouter à mes favoris" data-id="${event.id}"></i>
            </article>
        </section>`);       
        });

    }
}



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
                    <div class="content"><br><p>${event[0].price_detail}</p></div>
                </li>
                <li class="phone">
                    <div class="icon"><i class="fas fa-phone-alt"></i></div>
                    <div class="content"><p>${event[0].access_phone}</p>
                </li>
                <li class="mail">
                    <div class="icon"><i class="far fa-envelope-open"></i></div>
                    <div class="content"><p>${event[0].access_mail}</p></div>
                </li>
                <li class="fb">
                    <div class="icon"><i class="fab fa-facebook-f"></i></div>
                    <div class="content"><br><p><a href="${event[0].contact_facebook}">Page Facebook</a></p></div>   
                </li>         
                <li class="address">
                    <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                    <div class="content"><span class="italic">${event[0].address_name}<br>${event[0].address_street}<br>${event[0].address_zipcode} ${event[0].address_city}</span><br>
                    <p><span class="bold">En transport </span> ${event[0].transport}</p></div>
                </li>
            </ul>
        </section>
        </section>`);
}


// ================================
// Avec la méthode async/await
// ================================

(async function() {
    const [lastEvents, nextEvents] = await Promise.all([getLastEvents(), getNextEvents()]);
    showLastEvents(lastEvents);
    showNextEvents(nextEvents);
})();

(async function() {
    const eventById = await Promise.resolve(getEventById('79052'));
    showEventById(eventById);
})();

// (async function() {
//     const searchEvents = await Promise.resolve(getSearchEvents('violon'));
//     showSearchEvents(searchEvents);
// })();


$(document).ready(function(){

//     $(document).on("click", "a.event", function() {
//         // var id = $(this).data("id");
//         var id = $("a").data("id");
//         console.log(id);  
//         console.log('test')
//     });

    $('#submit').on('click', function() {
        // var keyword = $('#keyword').val();
        var keyword = $('input[name=keyword]').val();
        console.log(keyword)
    });

});



// $('#keyword').autocomplete({
    // source : [...], // on inscrit la liste de suggestions
    // minLength : 3 // on indique qu'il faut taper au moins 3 caractères pour afficher l'autocomplétion
// });

