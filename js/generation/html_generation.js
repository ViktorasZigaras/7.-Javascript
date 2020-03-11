"use strict"

const getData = ( ) => {
    //import, open file, send request, etc
}

const renderFeed = ( data ) => {
    //validate:
    if ( !Array.isArray( data ) ) {
        return console.error( `Error: not an array!` )
    }

    //generate:
    let html = ''
    for ( let i = 0; i < data.length; i++ ) {
        //
        html += renderPost ( data[i] )
    }

    document.querySelector( '.feed' ).innerHTML += html

    //return - optional
}

const renderPost = ( post ) => {
    
    console.log( post );
    
    let html = 
       `<div class="post">
            ${renderPostHeader( post.author, post.time )}
            ${renderPostContent( post.content )}
            ${renderPostFooter(  )}
        </div>`
    
    return html
}

const renderPostHeader = ( author, time ) => {
    let html = ''
    html = ''
    return html
}

const renderPostContent = ( content ) => {
    let html = ''
    html = ''
    return html
}

const renderPostFooter = (  ) => {
    return `footer`
}

getData( )
renderFeed( feed )