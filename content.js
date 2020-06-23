
function ExtCore(){
    let domSizesLabel = document.querySelectorAll('.variacoes-tamanhos__lista li:not([class="tamanho-desabilitado"]) label');

    if( domSizesLabel.length ){
        handleElementsSizes( domSizesLabel );
    }else{
        setTimeout( ExtCore, 1000 );
    }
}


function handleElementsSizes( listElements ){
    const arrayOfElements = Array.from( listElements );
    arrayOfElements.forEach( e => e.style.backgroundColor = '#c0392b'); 

    let arrayOfSizes = Array.from( document.querySelectorAll('.variacoes-tamanhos__lista li:not([class="tamanho-desabilitado"]) input') );
    addEventInElementsList( arrayOfSizes )
}

function insertBtnStartInDom(){
    let mother = document.querySelector('div.variacoes-tamanhos');
    let reference = mother.querySelector('p');
    let child = document.createElement('button');
    child.textContent = 'Modo GettingCaptcha';
    child.style.backgroundColor = '#e74c3c';
    child.style.borderRadius = 20;
    mother.insertBefore( child, reference )
    child.onclick = ExtCore
}

function addEventInElementsList( arrayElements ){
    arrayElements.forEach( 
        (e) => {
            e.onclick = (evt) => {
                evt.preventDefault()
                let previousCode = evt.target.getAttribute('data-codigoproduto')
                changeCodeId( evt.target )
                let capchaToken = document.querySelector('[name="g-recaptcha-response"]').value
                let size = evt.target.nextElementSibling.innerText


                let pColor = evt.target.nextElementSibling.style.backgroundColor
                evt.target.nextElementSibling.style.backgroundColor = '#2ecc71'

                showDataInConsole( capchaToken, size, previousCode)

                setTimeout( ()=> {
                    evt.target.nextElementSibling.style.backgroundColor = pColor;
                } , 2000)
            }
        }
    )
}

function changeCodeId(el){
    el.setAttribute('data-codigoproduto', 'abacaxi')
}


function showDataInConsole( captchaRes, size, sizeId ){
    console.clear()
    console.log('SUA CAPTCHA KEY SERÁ MOSTRADA ABAIXO')
    console.log( captchaRes )
    console.log('COPIE O CÓDIGO ACIMA')
    console.log('***************************************')

    console.log(`O ID DO SIZE ${size} SERÁ MOSTRADO ABAIXO`)
    console.log( sizeId )
    console.log('COPIE O CÓDIGO ACIMA')
}


function start(){
    let mother = document.querySelector('div.variacoes-tamanhos')
    if(mother)insertBtnStartInDom();
    else setTimeout(start, 1000);
}

start()