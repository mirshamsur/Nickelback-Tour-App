var eventTemplateFunction = Handlebars.compile($('#page-template').html());


    //searchTerm = 'Ariana+Grande';
    var url = 'http://api.eventful.com/json/events/search?c=music&app_key=NpmnLBfV4QKQtQ2N&page_number=1&date=Future&keywords=nickelback&callback=?';
    $.getJSON(url, function(response){  //can use $ or jQuery
        //console.log(response);

        var html = '';

        for(var i = 0; i < response.events.event.length; i++){
            html += eventTemplateFunction(response.events.event[i]);
        }

        $('#results').html(html);
    });

