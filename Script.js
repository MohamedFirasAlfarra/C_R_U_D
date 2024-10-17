let title = document.getElementById('title');
let price = document.getElementById('price');
let taxas = document.getElementById('taxas');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let Category = document.getElementById('Category');
let submit = document.getElementById('submit');
 

 let mood = 'create' ; 
 let tmp ;

function gettotale(){
    if(price.value !=''){
        let result = (+price.value + +taxas.value + +ads.value)
        - +discount.value;
        total.innerHTML = result;
        total.style.backgroundColor ='#040';
    }else{
        total.style.backgroundColor ='#ba0d0d';

    }
}


let datapro=[];

if(localStorage.pro != null){
    datapro =JSON.parse(localStorage.pro)
}else{
    let datapro =[]
}

submit.onclick = function(){  
let newpro = {
    title:title.value,
    price:price.value,
    taxas:taxas.value,
    ads:ads.value,
    discount:discount.value,
    total:total.value,
    count:count.value,
    Category :Category.value,
}

   if(mood === 'create'){
    if(newpro.count  > 1){
        for(let i =0 ; i < newpro.count ; i++){
            datapro.push(newpro);
        }
        }else{datapro.push(newpro);}
   }
   else
   { datapro[tmp] = newpro;
     mood = 'create' ;
     submit.innerHTML = 'Create' ;

   }
    

localStorage.setItem('pro',JSON.stringify(datapro));


cleardata();
showdata();
}

function cleardata(){
            title.value = "";
            price.value = "";
            taxas.value = "";
            ads.value = "";
            discount.value = "";
            total.value = "";
            count.value = "";
            Category.value = "";
}



function showdata(){
    let table = '';
    for(i=0;i<datapro.length;i++){
        table +=`<tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxas}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
            <td>${datapro[i].Category}</td>
            <td><button onclick=" updatedata(${i})" id="Update">Update</button></td>
            <td><button onclick=" deletedata(${i})" id="Delete">Delete</button></td>
        </tr>`;
        }

        document.getElementById('tbody').innerHTML = table;
        
    } 
    showdata();
    






    function deletedata(i){
        datapro.splice(i,1)
        localStorage.pro = JSON.stringify(datapro);
        showdata()
    } 


     function updatedata(i){
        title.value = datapro[i].title;
        price.value = datapro[i].price;
        taxas.value = datapro[i].taxas;
        ads.value = datapro[i].ads;
        discount.value = datapro[i].discount;
        gettotale()
        count.style.display = 'none';
        Category.value = datapro[i].Category;
        submit.innerHTML = 'Update';


        mood = 'update' ;
        tmp = i ;
     }
