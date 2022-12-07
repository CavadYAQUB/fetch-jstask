
function GetUsers() {
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(data=>{
        let html='';
        document.getElementById('pr_count').innerHTML=data.length

         data.forEach(item => {
            let pr_name=item.title.length > 20 ? item.title.slice(0,20)+"......":item.title
            let pr_description=item.description.length > 50 ? item.description.slice(0,50)+"......":item.description
            html+=`
            <div class="col-lg-4">
                 <div class="card" >
                          <img src=${item.image} class="card-img-top" alt="...">
                        <div class="card-body">
                             <h5 class="card-title">${pr_name}</h5>
                             <p class="card-text">${pr_description}</p>
                             <span class=${item.price>100?'text-danger':'text-success'}>${item.price}AZN</span>
                         </div>
                  </div>
             </div>
            
            `
         });
          document.getElementById('list').innerHTML=html
       
    })
    .catch(err=>console.log(err))
    
}
GetUsers()
let input=document.querySelector('#input')
input.onkeyup=function () {
    let value=this.value;
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(data=>{
        let existpro=data.filter(item=>item.title.toLowerCase().includes(value.toLowerCase()))
        let count=0;
        let html=''
        document.getElementById('pr_count').innerHTML=existpro.length
        existpro.forEach(item => {
            count++;
           
            
            let pr_name=item.title.length > 20 ? item.title.slice(0,20)+"......":item.title
            let pr_description=item.description.length > 50 ? item.description.slice(0,50)+"......":item.description
            html+=`
            <div class="col-lg-4">
                 <div class="card" >
                          <img src=${item.image} class="card-img-top" alt="...">
                        <div class="card-body">
                             <h5 class="card-title">${pr_name}</h5>
                             <p class="card-text">${pr_description}</p>
                             <span class=${item.price>100?'text-danger':'text-success'}>${item.price}AZN</span>
                         </div>
                  </div>
             </div>
            
            `
        });
        document.getElementById('list').innerHTML=html
        if (count===0) 
        {
            document.querySelector('.empty-cart').classList.remove('d-none')
            document.getElementById('pr_count').parentElement.style.display='none'
        }
        else
        {
            document.querySelector('.empty-cart').classList.add('d-none')
            
        }
        
        
    })
    .catch(err=>console.log(err))
}
function GetCategories() {
    fetch('https://fakestoreapi.com/products/categories')
    .then(response=>response.json())
    .then(data=>{
        let html=''
        data.forEach(item => {
            html+=`
              <a href="#">${item}</a>
            
            `
        });
        document.querySelector('.dropdown-content').innerHTML=html
    })
    .catch(err=>console.log(err))
}
