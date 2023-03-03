try{
    fetch(`https://openapi.programming-hero.com/api/news/category/03`)
    .then((response) => response.json())
    .then(res =>showOnHome(res.data));
  }
  catch(err){
      // alert(err.message);
      alert("Something went wrong");
  }


  function showOnHome(infos){
    let container = document.getElementById("container");
    // console.log(container);
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
                    <button type="button" onclick=" newsDetails('${info._id}' )"  data-toggle="modal" data-target=".bd-example-modal-lg"  >
                      <img src="./images/arrow-right.svg" alt=""> 
                    
                    </button>
                    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                        <div  id="${info._id}" class="modal-content">
                         
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