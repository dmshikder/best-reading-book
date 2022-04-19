const loadPhone= (searchText)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(Response =>Response.json())
    .then (data => displaySearchResult (data.data))
}

// phone db
const searchPhone = () =>{
    const searchPhoneText = document.getElementById('search-field').value;
    loadPhone(searchPhoneText);
    document.getElementById('search-field').value ='';
  
  }

  const displaySearchResult = phones => {
      const searchResult = document.getElementById ('search-result');
      phones.forEach(phone => {
          const div = document.createElement('div');
          console.log(phone)
          div.classList.add('col')
          div.innerHTML= `
          <div class="card">
          <img src="${phone.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text"> Brand Name:
              ${phone.brand}
            </p>
            <button> Details </button>
          </div>
        </div>
          `;
          searchResult.appendChild(div);
      })
  }
