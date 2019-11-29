// Récupérer l id de l URL et afficher les informations de l evenement correspondant
function getIdfromUrl(){
    const id = parseQueryString(window.location.search);

    console.log(id['id']);
    const eventId = id['id'];
    function parseQueryString(querystring = querystring.trim()) {
        if (!querystring || !querystring.startsWith('?'))
            return {};

        return querystring.slice(1).split('&').reduce((acc, parameter) => {
            let [name, value] = parameter.split('=');
            acc[decodeURIComponent(name)] = decodeURIComponent(value || '');
            return acc;
        }, {});
    }

    (async function() {   
        const eventById = await Promise.resolve(getEventById(eventId));
        showEventById(eventById);
    })();
}


$(function () {
    getIdfromUrl();
    selectFavorite();
});

