const API_URL = 'https://www.wolters.se/david/button/index.php'

export const sendRequest = (params, callback) => {
	fetch(API_URL + '?' + new URLSearchParams(params)).
		then(response => response.json()).
		then(data => callback(data));
}

export const sendRequestAsync = async (params) => {
	const res = await fetch(API_URL + '?' + new URLSearchParams(params))
	return await res.json()
}

