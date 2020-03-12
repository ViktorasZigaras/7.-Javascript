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
    html = `
        <div class="header"> 
            <img src="./img/${author.img}">
            <div class="texts"> 
                <div class="title">
                    <a href="${author.link}">${author.name} ${author.surname}</a>
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
    html = '<div class="content"> content </div>'
    return html
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
                <img src="./img/logo.png">
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






































const feed = [
    // {
    //     author: {
    //         name: 'aaa',
    //         surname: 'AAA',
    //         img: '111.jpg',
    //         link: '#',
    //     },
    //     time: 1583832448675, //timestamp
    //     // postTime: '2020-03-10 11:24:56'
    //     content: {
    //         text: 'text 1',
    //         background: 'red',
    //         images: [
    //             'pic1.jpg',
    //             'pic2.jpg',
    //             'pic3.jpg',
    //         ],
    //     },
    // },
    {
        author: {
            name: 'aaa',
            surname: 'AAA',
            img: 'logo.png',
            link: '#',
        },
        time: 1583832448675, 
        content: {
            text: 'text-avg',
        },
    },
    {
        author: {
            name: 'aaa',
            surname: 'AAA',
            img: 'logo.png',
            link: '#',
        },
        time: 1583832448675, 
        content: {
            text: 'text-lrg',
            images: [
                'pic1.jpg',
            ],
        },
    },
    {
        author: {
            name: 'aaa',
            surname: 'AAA',
            img: 'logo.png',
            link: '#',
        },
        time: 1583832448675, 
        content: {
            text: 'text-sml',
            images: [
                'pic1.jpg',
            ],
        },
    },
    {
        author: {
            name: 'aaa',
            surname: 'AAA',
            img: 'logo.png',
            link: '#',
        },
        time: 1583832448675, 
        content: {
            text: 'text-sml',
            images: [
                'pic1.jpg',
                'pic2.jpg',
            ],
        },
    },
    {
        author: {
            name: 'aaa',
            surname: 'AAA',
            img: 'logo.png',
            link: '#',
        },
        time: 1583832448675, 
        content: {
            text: 'text-sml',
            images: [
                'pic1.jpg',
                'pic2.jpg',
                'pic3.jpg',
            ],
        },
    },
    {
        author: {
            name: 'aaa',
            surname: 'AAA',
            img: 'logo.png',
            link: '#',
        },
        time: 1583832448675, 
        content: {
            text: 'text-sml',
            images: [
                'pic1.jpg',
                'pic2.jpg',
                'pic3.jpg',
                'pic4.jpg',
                'pic5.jpg',
                'pic6.jpg',
                'pic7.jpg',
                'pic8.jpg',
            ],
        },
    },
    {
        author: {
            name: 'aaa',
            surname: 'AAA',
            img: 'logo.png',
            link: '#',
        },
        time: 1583832448675,
        content: {
            text: 'text-mini',
            background: 'red',
        },
    },
    
]










renderFeed( feed )