const container = document.querySelector(".container");

function addUser() {
    fetch('https://randomuser.me/api')
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            const json = response.results[0];
            const user = {
                picture: json.picture,
                name: json.name,
                country: json.location.country,
                postcode: json.location.postcode,
                phone: json.phone
            };
            createUserData(user);
        });
}

function createUserData(obj) {
    const userDiv = document.createElement('div');
    userDiv.className = 'user-data';
    const userInfo = document.createElement('span');
    userInfo.innerHTML = `
        <img src="${obj.picture.medium}" alt="user image">
        <div>
        <h5>${obj.name.first}  ${obj.name.last}</h5>
        <p>Phone: ${obj.phone}</p>
        <p>Country: ${obj.country}</p>
        <p>Postcode: ${obj.postcode}</p>
        </div>
        `;

    userDiv.appendChild(userInfo);
    container.appendChild(userDiv);
}

function clearAllUsers() {
    while (container.firstChild)
    container.removeChild(container.firstChild);
}