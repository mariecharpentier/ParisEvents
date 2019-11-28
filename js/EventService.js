async function getLastEvents() {
    const data = await $.ajax(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?rows=3`);

    // Traitement du résultat
    const events = data.records.map(record => record.record.fields);
    console.log(events)
    return events;
}

async function getNextEvents() {
    const data = await $.ajax(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?rows=3&sort=date_end`);

    // Traitement du résultat
    const events = data.records.map(record => record.record.fields);
    console.log(events)

    return events;
}

async function getSearchEvents(keyword) {
    const data = await $.ajax(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=`+ keyword + `&sort=date_end`);

    // Traitement du résultat
    const events = data.records.map(record => record.record.fields);
    console.log(events)

    return events;
}

async function getEventById(id) {
    const data = await $.ajax(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?where=id%3D`+ id);
    
    // Traitement du résultat
    const event = data.records.map(record => record.record.fields);
    console.log(event)

    return event;
}

// async function getEventsSortedById(list) {
//     const data = await $.ajax(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?where=id%3D`+ list);
    
//     // Traitement du résultat
//     const events = data.records.map(record => record.record.fields);
//     console.log(events)

//     return events;
// }
