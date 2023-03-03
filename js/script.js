


try{
      fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res => res.json())
    .then(res => insertCategory(res?.data?.news_category));

}
catch(err){

    alert("Something went wrong");
}


// 



function insertCategory(categoryNames) {
  
   
    let categories = document.getElementById("categories");

    categoryNames.forEach((categoryName) =>{
       
        categories.innerHTML = categories.innerHTML +`
                                        <li onclick="showDetails(event)" id="${categoryName.category_id}" class="nav-item mx-1">
                                            <span style="cursor:pointer" class="nav-link active" aria-current="page" >${categoryName.category_name}</span>
                                        </li>  `;
  
    })

}


function showDetails(event){
  
    let parent = event.target.parentElement;
    let id = parent.id;

    
    try{
      fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
      .then((response) => response.json())
      .then(res =>showOnPage(res.data));
    }
    catch(err){
        // alert(err.message);
        alert("Something went wrong");
    }
 


    // fetch(``)




}

function showOnPage(infos) {
  
    let container = document.getElementById("container");
   
    container.innerText ="";
    infos.forEach((info)=>{
   
        container.innerHTML +=`  <div class="row">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-3">
              <img src="${info?.thumbnail_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <div class="card-news  mb-5">
                    <h5 class="fw-bold text-start">
                     ${info.title}

                    </h5>
                    <div class="light-text text-start mt-3 ">  
                      ${info.details}
                    </div>
                </div>
               <div class="  extra-details  d-flex justify-content-between align-items-end "> 
                  <div class="author d-flex">
                      <div class="  px-3"> 
                        <img class="author-img border-5" src="${info?.author?.img}" alt = "author picture">
                      
                      </div>
                      <div>
                        <small > ${ info?.author?.name ? info.author.name: "Staff Correspondent"} </small><br/>
                        <small class="light-text">${ info?.author?.published_date ? info.author.published_date : "Today" }</small>
                      </div>
                   
                  </div>
                  <div class="views mb-2">
                    <img src="./images/view.png" alt="">  ${info?.total_view ?info.total_view :"100+"  }


                  </div>
                  <div class="rating">

                  </div>
                  <div class="news-details mb-2">
                    <button type="button" onclick=" newsDetails('${info._id}' )"  data-toggle="modal" data-target=".${info._id}"  >
                      <img src="./images/arrow-right.svg" alt=""> 
                    
                    </button>
                    <div class="modal fade ${info._id}" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                        <div  id="${info._id}" class="modal-content">
                        ${info._id}
                         
                        </div>
                      </div>
                    </div>
                     
                    
                  </div>


               </div>
              </div>
            </div>
          </div>
        </div>
      </div>`


    })

}


function newsDetails(id){
   
    try{
      fetch(`https://openapi.programming-hero.com/api/news/${id}`)
      .then(res => res.json())
      .then(res =>openModal(res?.data[0]));

    }
    catch(err){
      
      alert("Something went wrong");
    }

}


function openModal(data) {


  
  

    let container = document.getElementById(data?._id);
    var date;
    if(data.published_date){
      let year = parseInt(data?.author?.published_date.substr(0,4));
      let month = parseInt(data?.author?.published_date.substr(5,2));
      let day = parseInt(data?.author?.published_date.substr(8,2));
      var date = new Date(year, month,day);
    }
    container.innerHTML="";
   
    container.innerHTML = `
              <div class="modal-header">
                  <h2   class="modal-title fw-900" id="exampleModalLongTitle">${data.title}</h2>
                 
          

              </div>
              <div class="modal-body d-flex flex-column ">
              <div class=" m-2 author d-flex">
              <div class="  px-3"> 
                <img class="author-img border-5" src="${data?.author?.img}" alt = "author picture">
              
             </div>
            <div>
                <small >  ${ data?.author?.name ? data.author.name: "Staff Correspondent"}</small><br>
                <small class="light-text"> ${ date? moment(date).format('dddd MMMM D Y') : "Today"}</small>
               </div>
          
          </div>
                  <div class="detail-img" >
                      <img class="w-75" src="${data.image_url}" alt=""/>
                  

                  </div>
                  <div class="detail-content">
                      ${data.details ? data.details:"Coming Soon"}
                  </div>


              </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

          </div>
              
  `
  
}













