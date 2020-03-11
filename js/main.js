
const skaitmenuKiekisSkaiciuje = ( num ) => {
    console.log( '-------------------------------' );
    let result = 0
    if ( typeof( num ) !== 'number' || !isFinite( num ) ) result = 'Pateikta netinkamo tipo reikšmė.'
    else {
        if (num === 0) result++
        else {
            let liekana = Math.abs( num % 1 )
            console.log( 'liek: ', liekana )
            if ( liekana > 0) result = ( liekana + '' ).length - 2
            
            let main = Math.abs( num ) - liekana 
            console.log( 'main: ', main )

            let counter = 0
            while (main > 10) {
                main /= 10
                counter++
                // console.log(counter, main)
            }
            if (main > 0) counter++
            result += counter
            //result = ( Math.abs( num ) + '' ).replace( '.', '' ).length
        }
    }
    return console.log( 'res:', result )
}

skaitmenuKiekisSkaiciuje( 564848978978978948945645648489489489489489489489848948989489489489489489489489489484 ) 
skaitmenuKiekisSkaiciuje( 5.64848978978978948945645648489489489489489489489848948989489489489489489489489489484 ) 
skaitmenuKiekisSkaiciuje( -5.64848978978978948945645648489489489489489489489848948989489489489489489489489489484 ) 
skaitmenuKiekisSkaiciuje( -3.55555 ) 
skaitmenuKiekisSkaiciuje( 0.3333333333333333333333333333 ) 
skaitmenuKiekisSkaiciuje( 1.33333333333 ) 
skaitmenuKiekisSkaiciuje( -0.33333333333 ) 
skaitmenuKiekisSkaiciuje( 5555555555555555555555555555555555555555555555555555555555555555555555.5555555555555555555555555555555555555555555555555555555555 )

//liekanos gali tureti max 16 skaiciu, daugiau informacijos nesaugo
//esant skaiciams pries kableli gali gautis anomaliju
//per daug skaiciu is abieju pusiu iskraipo paveiksla - paskutinis pavyzdys
