// Displays members tree
function loadMembers(el,url,resource) {
    $.get(resource, function(data) {
        $(el).html(data)
    })
}
