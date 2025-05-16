export const apiConfig = {
	baseUrl: 'https://norma.nomoreparties.space/api',
	ingredients: '/ingredients',
	order: 'orders',
};

const getResponse = (res) => {
	if (res.ok) {
		return res.json();
	}

	return Promise.reject(`Ошибка ${res.status}`);
};

export const getIngredientsApi = () => {
	return fetch(`${apiConfig.baseUrl}${apiConfig.ingredients}`).then(
		getResponse
	);
};

export const addOrder = (ingredients) => {
	return fetch(`${apiConfig.baseUrl}${apiConfig.order}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ ingredients }),
	}).then(getResponse);
};
