export let getLatAndLng = (address) =>
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBey-Jk8GDEo92I0MCHSdmMUQ0Jja0foYo`, {
        method: 'GET'
    })
    .then(res => {
        try {
            if (res.ok) return res.json();
            if (res.status >= 400 && res.status < 500) return Promise.reject({ body: res, status: res.status, type: 'Application Error' });
            if (res.status >= 500) return Promise.reject({ body: res, status: res.status, type: 'Server Error' });
        } catch (e) {
            console.log(e);
            Promise.reject({ body: res, status: res.status, type: 'Invalid JSON' })
        }
    })

export let getAllTargets = () =>
    fetch("http://localhost:3001/targets", {
        method: "GET",
        mode: "cors"
    })

export let postNewTarget = (target) => {
    console.log('post', target);
    return fetch("http://localhost:3001/targets", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(target)
    })
}