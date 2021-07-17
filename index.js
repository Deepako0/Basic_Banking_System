let viewCustomersEl = document.querySelector('.flex-item');

let displayTrans = document.querySelector('#trans');

let TransHisEl = document.querySelector('#viewtrans');


displayTrans.onclick = () =>{
    window.location = './transactions.html';
}

TransHisEl.onclick = () =>{
    window.location = './history.html';
}

viewCustomersEl.onclick = ()=>{
    window.location = './customers.html';
}