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