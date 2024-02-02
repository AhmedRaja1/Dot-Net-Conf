var map, searchManager;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        zoom: -1,
        mapTypeId: Microsoft.Maps.MapTypeId.aerial
    });

    for (i = 0; i < localEvents.length; i++) {
        var thedate = new Date(localEvents[i].TheDate).toLocaleDateString({
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });

        var city = localEvents[i].City;
        var latitude = localEvents[i].Lat;
        var longitude = localEvents[i].Lon;

        var url = localEvents[i].Url;
        if (url == "Completed") {
                url = "This event has happened.";
        } else if (url == "")  { //innerText="TBD"
                url = "More info coming soon!";
        }

        addPushpin(latitude, longitude, thedate, url, city);
    }
}

function addPushpin(latitude, longitude, thedate, url, city) {
    var loc = new Microsoft.Maps.Location(latitude, longitude);
    var pin = new Microsoft.Maps.Pushpin(loc, { title: city + ": " + thedate, enableHoverStyle: true, enableClickedStyle: true });
    map.entities.push(pin);
    
    Microsoft.Maps.Events.addHandler(pin, 'click', function () {
        if (url.search("http") != -1) {
            window.open(url);
        } else { alert(url); }
    });
}

// You must call this afterwards:
//<script type='text/javascript' src='http://www.bing.com/api/maps/mapcontrol?branch=experimental&callback=loadMapScenario' async defer></script>