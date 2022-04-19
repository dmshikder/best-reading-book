const loadPhone= (searchText)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(Response =>Response.json())
    .then (data => displayPhone (data.data))
}
// loadPhone()

const displayPhone = phones =>{
    const container = document.getElementById('phones');
    container.textContent = '';
    phones.forEach(phone =>{
        const div= document.createElement('div');
        div.innerHTML=`
        <h1>${phone.phone_name} </h1>
        <button onclick= "loadPhoneDetails('${phone.phone_name}')" > Details </button>
        `;
        container.appendChild(div);
    })
    
}

// phone db
const searchPhone = () =>{
  const searchPhoneText = document.getElementById('search-field').value;
  loadPhone(searchPhoneText);
  document.getElementById('search-field').value ='';

}

const loadPhoneDetails = phoneName =>{
    console.log(phoneName)
}