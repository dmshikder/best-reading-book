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
      searchResult.textContent='';
      phones.forEach(phone => {
          const div = document.createElement('div');
        //   console.log(phone)
          div.classList.add('col')
          div.innerHTML= `
          <div class="card">
          <img src="${phone.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text"> Brand Name:
              ${phone.brand}
            </p>
            <button onclick="loadPhoneDetails('${phone.slug}')"> Details </button>
          </div>
        </div>
          `;
          searchResult.appendChild(div);
      })
  }


  const loadPhoneDetails = phoneId =>{
  
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch (url)
    .then (Response => Response.json())
    .then (data => displayPhoneDetails (data.data))
  }
  const displayPhoneDetails = phoneDetail => {
      console.log(phoneDetail)
      const singlePhoneDetail = document.getElementById('phonedetail');
      singlePhoneDetail.textContent='';
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = `
      <div class="card-body">
      <h3 class="card-title">${phoneDetail.name}</h3>
      <p class="card-text">
        ${phoneDetail.releaseDate ? phoneDetail.releaseDate:'No release date found'}
      </p>
      <h4>main features: </h4>
      <p><b>memory:</b> ${phoneDetail.mainFeatures.memory}</p>
      <p><b>displaySize:</b> ${phoneDetail.mainFeatures.displaySize}</p>
      <p><b>chipSet:</b> ${phoneDetail.mainFeatures.chipSet}</p>
    </div>
    <h4>Sensor: </h4>
    <p>${phoneDetail.mainFeatures.sensors}</p>
    <h4>Others: </h4>
    <p>Bluetooth: ${phoneDetail.others.Bluetooth ? phoneDetail.others.Bluetooth:'No'}</p>

      `;
      singlePhoneDetail.appendChild(div)
  }
