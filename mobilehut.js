// search Mobile
const searchMobile = async () =>{
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  searchField.value = '';
  clear();


  // load data 
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displaySearchResult(data.data);
  
}
// display Search Result

const displaySearchResult = data => {
  const searchResult = document.getElementById('search-result');
  searchResult.textContent = '';
  // empty search and no phone found error handle 
  if(data == 0){
      const searchResult = document.getElementById('not-found');
      searchResult.textContent = '';

      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
      <div">
          <div>
          <h5 class=" m-4 text-center text-danger">No Phone Found!</h5>
          </div>
        </div>
      `;
      searchResult.appendChild(div);
  }

  data.forEach(mobile => {

     const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
      <div class="card h-100 m-2 align-content-center">
          <img src="${mobile.image}" class="card-img-top w-50 " alt="...">
          <div class="card-body">
            <h5 class="card-title">${mobile.phone_name}</h5>
            <p class="card-text">Brand: ${mobile.brand}</p>
            <button onclick="loadMobileDetail('${mobile.slug}')" class="btn btn-outline-secondary mx-auto">View Details</button>
          </div>
        </div>
      `;
      searchResult.appendChild(div);
  })
}
// load Mobile Detail
const loadMobileDetail = async Id => {
  // dynamic id 
  const url = `https://openapi.programming-hero.com/api/phone/${Id}`;

  const res = await fetch(url);
  const data = await res.json();
  displayMobileDetail(data.data);   
  

}
// display Mobile Detail
const displayMobileDetail = mobile => {

  console.log(mobile);
  
  const mobileDetails = document.getElementById('mobile-details');
  mobileDetails.textContent = '';
  
  const div = document.createElement('div');
  div.classList.add('card');


}
}