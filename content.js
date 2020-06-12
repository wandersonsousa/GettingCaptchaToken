
function ExtCore(){
    let domSizesLabel = document.querySelectorAll('.variacoes-tamanhos__lista li:not([class="tamanho-desabilitado"]) label');
    
    '03AGdBq27FI34FOsbpXM2BRP4mjhxZbhEE_B8lOBkb4LGZlCoeoz880WEPT_H1oAyc_wbLHBMRCaedt-gkDh2zP86tMfG0154UAr_dOGz9AdOR0jrlknGEcjCWbebkn3bt7ti2aUPKkN2q32auaJj7xBgyZR0aGTkTFd6MP4pU0m-MiRnE2umlLvG4mdBQooJxi4vk0QTRJQnC3Up8K79QDpPI5NQrkc6dQ7R9FNtTNjbf-RE0D6Bc_MDWAuiGyAhnoocyYBoQW9dph3_wRrKUBvvhiGknABvtjWxQMSMgsqtA-o8jg6NHjc7Z9e8dCwXMFB19aYXcB7pqUHMFbLjvKIr1zv2jtueJ2sa8FtoDVrlb8_csLyj39dgxQISPb2sVZh8yhirGqe99dKuhq94RzPh6s0sESETQZQ'


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
                const previousCode = evt.target.getAttribute('data-codigoproduto')
                const capchaToken = document.querySelector('[name="g-recaptcha-response"]').value
                const size = evt.target.nextElementSibling.innerText

                changeCodeId()
                let pColor = evt.target.nextElementSibling.style.backgroundColor
                evt.target.nextElementSibling.style.backgroundColor = '#2ecc71'

                showDataInConsole( capchaToken, size, previousCode )

                setTimeout( ()=> {
                    evt.target.nextElementSibling.style.backgroundColor = pColor;
                } , 2000)
                
                showDataInConsole(  )
            }
        }
    )
}

function changeCodeId(){
    evt.target.setAttribute('data-codigoproduto', 'abacaxi')
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