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

      div.innerHTML = `
      <img src="${mobile?.image}" class="card-img-top w-50" alt="...">
      <div class="card-body">
          <h5 class="card-title">${mobile?.name}</h5>
          <p class="card-text">Brand: ${mobile?.brand}</p>
          <h3 class="text-center">Main Features</h3>
          <p class="card-text">ChipSet: ${mobile?.mainFeatures.chipSet}</p>
          <p class="card-text">Memory: ${mobile?.mainFeatures.memory}</p>
          <p class="card-text">Sensors: ${mobile?.mainFeatures.sensors.join(", ")}</p>
          <p class="card-text">Storage: ${mobile?.mainFeatures.storage}</p>
          <h3 class="text-center">Other Features</h3>
          <p class="card-text">Bluetooth: ${mobile?.others?.Bluetooth ? mobile?.others?.Bluetooth : 'Not Found'}</p>
          <p class="card-text">GPS: ${mobile?.others?.GPS ? mobile?.others?.GPS : 'Not Found' }</p>
          <p class="card-text">NFC: ${mobile?.others?.NFC ? mobile?.others?.NFC : 'Not Found'}</p>
          <p class="card-text">Radio: ${mobile?.others?.Radio ? mobile?.others?.Radio : 'Not Found'}</p>
          <p class="card-text">USB: ${mobile?.others?.USB ? mobile?.others?.USB : 'Not Found'}</p>
          <p class="card-text">WLAN: ${mobile?.others?.WLAN ? mobile?.others?.WLAN : 'Not Found'}</p>

          <p class="card-text">Release date: ${mobile?.releaseDate ? mobile?.releaseDate : 'Not Found'}</p>
      </div>
      `;
      mobileDetails.appendChild(div);
}
// field clear 
function clear (){
  const mobileDetailsFields = document.getElementById('mobile-details');
  mobileDetailsFields.textContent = '';
}