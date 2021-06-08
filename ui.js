class UI {
  constructor(){
    this.profile = document.getElementById('profile')

  }
  showProfile(user){
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
      <img class="img-fluid mb-2" src ="${user.avatar_url}">
      <a href="${user.html_url}" target="_blank" class ="btn btn-primary btn-block" > View Profile</a>
    </div>
    <div class="col-md-9">
      <span class ="badged badge-primary">Public Repos:${user.public_repos}</span>
      <span class ="badged badge-secondary">Public Gists:${user.public_gists}</span>
      <span class ="badged badge-success"> Followers:${user.followers}</span>
      <span class ="badged badge-info">following :${user.following}</span>
  
      <br>
      <br>
      <ul class="list-group">
        <li class="list-group-item">Company : ${user.company}</li>
          <li class="list-group-item">Blog : ${user.blog}</li>
            <li class="list-group-item">Locaton : ${user.location}</li>
              <li class="list-group-item">Member since: ${user.created_at}</li>
  
      </ul>
    </div>
  </div>
    
    </div>
    <h3 class = "page-heading mb-3"> Latest Repos </h3>
    <div id="repos"></div>

    
    `;
  }
  
showRepos(repos){
  let output=''
  repos.forEach(function(repo){
    output+=
   `to be written 5:00
    
    
    `
  })
}



//show alert message 
showAlert(message,className){

  this.clearAlert()
  //
  const div = document.createElement('div')

  div.className = className;
  //add the text 
  div.appendChild(document.createTextNode(message));

  const container = document.querySelector('.searchContainer')

  const search = document.querySelector('.search')

  container.insertBefore(div,search);


  //timeout after 3 seconds 
  setTimeout(()=>{
    this.clearAlert()
  },3000)

}
//clear alert message 
clearAlert(){
  const currentAlert = document.querySelector('.alert');
  if(currentAlert){
    currentAlert.remove()
  }
}


//clear profile 
clearProfile(){
  this.profile.innerHTML ="";

}
}