// import {obj} from './data.js';
let tabEl = document.querySelector('.tab');
var i=0;
let append = ()=>{
    while(i<obj.length){
        let trEl = document.createElement('tr');
        let tdId = document.createElement('td');
        let tdNameEl = document.createElement('td');
        let tdBalEl = document.createElement('td');
        let tdAmountEl = document.createElement('td');
        tdNameEl.textContent = obj[i].name;
        tdId.textContent = obj[i].id;
        tdBalEl.textContent = obj[i].balance;
        tdAmountEl.textContent = obj[i].amountTransferred;
        trEl.appendChild(tdId);
        trEl.appendChild(tdNameEl);
        trEl.appendChild(tdBalEl);
        trEl.appendChild(tdAmountEl);
        tabEl.appendChild(trEl);
        i+=1;
        console.log(1);
    }
    
}
append();
let formRef = document.getElementById('myform');
let senderRef = document.getElementById('sender');
let amountRef = document.getElementById('amount');
let receiverRef = document.getElementById('reciever');
let buttonRef = document.getElementById('action');
let senderName = senderRef.value;

formRef.addEventListener('submit',(e)=>{
    e.preventDefault();
});

buttonRef.onclick = ()=>{
    for(var i=1,row; row=tabEl.rows[i];i++){
            if(senderRef.value === row.cells[1].textContent){
                row.cells[2].textContent = parseInt(row.cells[2].textContent)-parseInt(amountRef.value);
                row.cells[3].textContent = parseInt(row.cells[3].textContent)+parseInt(amountRef.value);
                let index = obj.findIndex(check);
                function check(obj){
                    if (obj.name === senderRef.value){
                        return true;
                    }
                }
                obj[index].balance = obj[index].balance-parseInt(amountRef.value);
                obj[index].amountTransferred = obj[index].amountTransferred + parseInt(amountRef.value);
                console.log(obj[index]);
            }
            
                   
            if(receiverRef.value === row.cells[1].textContent){
                row.cells[2].textContent = parseInt(row.cells[2].textContent) + parseInt(amountRef.value);
                let index1 = obj.findIndex(check);
                function check(obj){
                    if (obj.name === receiverRef.value){
                        return true;
                    }
                }
                obj[index1].balance = obj[index1].balance + parseInt(amountRef.value);
                    console.log(obj[index1].balance);
            }     
            console.log(obj[i]);
        }


}

