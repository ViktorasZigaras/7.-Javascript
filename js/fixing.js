
// 
console.log( '-- Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai: --' )
// 0 - 11
// 8 - 31
// -18 - 18
// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalinančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalinančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalinančių be liekanos iš 7 yra 2 vienetai.

const divsCycle = ( min, max ) => {

    // let div3 = div5 = div7 = 0
    let div3 = genericDiv ( min, max, 3 )
    let div5 = genericDiv ( min, max, 5 )
    let div7 = genericDiv ( min, max, 7 )

    /*if ( min === 0 && max === 0 ) {
        console.log( 'nuliai' )
        div7 = div5 = div3 = 1
    }
    else {
        if ( min === 0 || max === 0 ) div7 = div5 = div3 = 1
        let interval = Math.abs( max - min )
        if ( ( min > 0 && max > 0 ) || ( min < 0 && max < 0 ) ) interval++
        console.log( interval, ':', min, '-', max )

        div3 += Math.floor( interval / 3 )
        div5 += Math.floor( interval / 5 )
        div7 += Math.floor( interval / 7 )
    }*/

    console.log( min, ' --> ', max )

    if ( min === 0 && max === 0 ) console.log( 'nuliai' )
    if ( min === 0 && max > 0 ) console.log( 'teigiami ir nuliai' ) 
    if ( min > 0 && max > 0 ) console.log( 'tik teigiami' ) 
    if ( min < 0 && max === 0 ) console.log( 'neigiami ir nuliai' )
    if ( min < 0 && max < 0 ) console.log( 'tik neigiami' )
    if ( min < 0 && max > 0 ) console.log( 'ir neigiami ir teigiami' )
    

    console.log( div3, div5, div7 )
    // console.log( 'Skaičių intervale tarp ' + min + ' ir ' + max + ', besidalinančių be liekanos iš 3 yra ' + div3 + ' vienetai' )
    // console.log( 'Skaičių intervale tarp ' + min + ' ir ' + max + ', besidalinančių be liekanos iš 5 yra ' + div5 + ' vienetai' )
    // console.log( 'Skaičių intervale tarp ' + min + ' ir ' + max + ', besidalinančių be liekanos iš 7 yra ' + div7 + ' vienetai' )
}

const genericDiv = ( from , to, divider ) => {
    let count = 0
    if (from !== to) {
        const maxCount = Math.floor(to / divider) + 1
        const minCount = Math.floor(from / divider) + 1
        count = maxCount - minCount
        if ( from % divider === 0 ) count++
    }
    return count
}

// 4 - 3 - 2 //+
// 8 - 5 - 3
// 13 - 7 - 5

// 12 - 12, +++
// 24
// 37, +++

// 5 - 3 - 2
// 8 - 4 - 3
// 13 - 8 - 6

divsCycle( 0, 11 )
divsCycle( 8, 31 )
divsCycle( -18, 0 )
divsCycle( -18, -1 )
divsCycle( -18, 18 )
divsCycle( 0, 0 )


// for ( let i = min; i <= max; i++ ) {
//     if ( i % 3 === 0 ) div3++
//     if ( i % 5 === 0 ) div5++
//     if ( i % 7 === 0 ) div7++
// }
