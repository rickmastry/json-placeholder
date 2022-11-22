const jsonUsersEl = document.getElementById('json-user-area');
const searchArea = document.getElementById('search-modal');

var post;

// Call the API
fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {
     console.log(data)
	// Store the post data to a variable
	post = data;
    let getUsers = '';
    post.map((user,index) => {
        
       
        getUsers += `
       
        <div class="json-user-area-item">
         <div class="user">${user.name}</div>
         <div class="info">username - ${user.username} </div>
         <div class="info">email - ${user.email} </div>
         <div class="info">phone - ${user.phone}</div>
         <div class="info">user id - ${user.id}</div>
         
         <button class="buttonModal" data-identify="${user.id}">User Posts</button>
         
        
        </div>
         `
      
         
       
 })

 jsonUsersEl.innerHTML = getUsers;

 
 let modalBtn = document.querySelectorAll('.buttonModal');
 
    modalBtn.forEach(function(button) {
    button.addEventListener('click', openModal);

    function openModal(){
       
        document.querySelector('.bg-modal').style.display = "flex";
        document.querySelector('.bg-modal').style.position = "absolute";
        document.querySelector('.bg-modal').style.zIndex = "2";
        document.querySelector('.modal-content-one').style.display = "block";
    }
    
    document.querySelector('.close').addEventListener('click', closeModal);
    
    function closeModal(){
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('.bg-modal').style.zIndex = "-1";
    
    }

    
    });

    let userBtn = document.querySelectorAll('.buttonModal');
    userBtn.forEach(function(button) {
        button.addEventListener('click', getIdentify);
       

        function getIdentify(){
            
            identify = this.getAttribute("data-identify")

            const apiPlaceHolder = (`https://jsonplaceholder.typicode.com/users/${identify}/posts`);
            fetch(apiPlaceHolder)

            .then(response =>{
                return response.json();
            })
            .then(data => {
                console.log(data)
                let users = data;
                let  getUsersPosts = '';
                users.forEach((user, index) => {
                       
                   
                     getUsersPosts += `
                 
                     
                     <div class="search-modal-item">
                      <div class="user" >User Id - ${user.userId}</div>
                      <div class="info" >Title - ${user.title} </div>
                      <div class="info">Post - ${user.body} </div>
                      
                     </div>
                        `
                })
                searchArea.innerHTML = getUsersPosts;

            })
           
        }
      
   
    })

  

})



 


 

    


   

   


   

