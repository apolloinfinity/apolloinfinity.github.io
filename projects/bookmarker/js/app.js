document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    // Get Values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    if(!validateForm(siteName, siteUrl)){
        return false;
    }

    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    /*
    // Local Storate Test
    localStorage.setItem('test', 'hello world');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
    */

    if (localStorage.getItem('bookmarks') === null) {
        //Init Array
        var bookmarks = [];
        bookmarks.push(bookmark);
        // Set to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from LocalStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add book to array
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));


    }

    // Clear form
    document.getElementById('myForm').reset();

    // Refetches Bookmarks
    fetchBookmarks();

    // Prevents default behavior of form from submitting
    e.preventDefault();
}

function deleteBookmark(url){
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Loop through bookmarks 
    for(var i = 0; i < bookmarks.length; i++){
        if(bookmarks[i].url == url){
            bookmarks.splice(i, 1);
        }
    }
    // Resets localStorage after deleting
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Refetches Bookmarks
    fetchBookmarks();
}

// Fetch Bookmarks
function fetchBookmarks() {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Get ouput id
    var bookmarksResults = document.getElementById('bookmarksResults');

    // Build output
    bookmarksResults.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML +=
            '<div class="well">' +
            '<h3>' + name +
            ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
            ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
            '</h3>' +
            '</div>'
    }
}

function validateForm(siteName, siteUrl) {
    if(!siteName || !siteUrl ){
        alert('Please fill in the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteUrl.match(regex) ){
        alert("Please use a valid URL");
        return false;
    }

    return true;
}