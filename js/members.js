// Displays members tree
function loadMembers(el,url,callback,resource) {
    $.getJSON(resource, function(data) {
        $(el).html(JSON.stringify(data))
        callback()
    })
}
