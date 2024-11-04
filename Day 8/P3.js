async function FetchData() {
    try {
        let response = await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();
        data.forEach((element) => {
            console.log(`Login ${element.login} ID ${element.id} Avatar ${element.avatar_url}`);
        })
    }catch(error) {
        console.log(error);
    }
}
// noinspection JSIgnoredPromiseFromCall
FetchData();