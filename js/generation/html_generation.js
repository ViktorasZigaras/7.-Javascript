"use strict"

// import './data'

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

    // return 
    document.querySelector( '.feed' ).innerHTML = html

    //return - optional
}

const renderPost = ( post ) => {
    
    console.log( post );
    
    let html = 
       `<div class="post">
            ${ renderPostHeader( post.author, post.time ) }
            ${ renderPostContent( post.content ) }
            ${ renderPostFooter(  ) }
        </div>`
    
    return html
}

const renderPostHeader = ( author, time ) => {
    let html = ''
    html = `
        <div class="header"> 
            <img src="./img/${ author.img }">
            <div class="texts"> 
                <div class="title">
                    <a href="${ author.link }">${ author.name } ${ author.surname }</a>
                </div>
                <div class="time">${time}</div>
            </div>
            <i class="fa fa-ellipsis-h"> </i>
        </div>
    `
    return html
}

const renderPostContent = ( content ) => {
    let html = ''
    html = `
        <div class="content"> 
            ${ renderPostContentText( content.text, content.background ) }
            ${ renderPostContentGallery( content.images ) }
        </div>
    `
    return html
}

const renderPostContentText = ( text, background ) => {
    let html = ''
    //if ( text && background )
    if ( text ) {
        html = `
            <p> ${ text } </p>
        `
    }
    return html
}

const renderPostContentGallery = ( images ) => {
    let html = ''
    let result = ''
    let moreHtml = ''
    let goodPhotoCount = 0
    
    if ( 
        !images ||
        !Array.isArray( images ) || 
        images.length === 0 
    ) return ''

    console.log(images)

    for ( let i = 0; i < images.length; i++ ) {
        //
        if ( images[i].length >= 5 && typeof( images[i] ) === 'string' ) {
            goodPhotoCount++
            if ( goodPhotoCount <= 4 ) {
                html += `
                    <img src="./img/${ images[i] }">
                `
            }
        }
    }

    if ( goodPhotoCount == 0 ) return ''
    let galleryClass = goodPhotoCount
    if ( goodPhotoCount > 4 ) {
        galleryClass = 4
        moreHtml = `<div class="more">+${goodPhotoCount - 3}</div>`
    } 

    result = `
        <div class="gallery gallery-${ galleryClass }">
            ${ html }
            ${ moreHtml }
        </div>
    `

    return result
}

const renderPostFooter = (  ) => {
    return `
        <div class="footer"> 
            <div class="row">
                <div class="action">
                    <i class="fa fa-thumbs-up"> </i>
                    <div class="text">Like</div>
                </div>
                <div class="action">
                    <i class="fa fa-comment-o"> </i>
                    <div class="text">Comment</div> 
                </div>
            </div>
            <div class="row">
                <img src="./img/user.png">
                <div class="comment-form">
                    <textarea></textarea>
                    <div class="interactions">
                        <i class="fa fa-smile-o"> </i>
                        <i class="fa fa-camera"> </i>
                        <i class="fa fa-file-image-o"> </i>
                        <i class="fa fa-user"> </i>
                    </div> 
                </div>
            </div>
        </div>
    `
}

getData( )
renderFeed( feed )

