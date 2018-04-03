var HTTPClient = {
    get: function(url, callback) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() { 
            if (request.readyState == 4) {
                if(callback) callback(request.responseText);
            }
        }

        request.open("GET", url, true);            
        request.send(null);
    }
}

export default HTTPClient;
