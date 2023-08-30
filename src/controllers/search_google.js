const axios = require("axios");

module.exports = {

	async getSearchGoogle(request, response) {
        try {
            const baseUrl = "https://www.google.com/search";

            const requestResponse = await axios.get(baseUrl, {
                params: {
                    q: 'teste',
                    start: 0
                }
            });

            console.log(requestResponse.data);

            return response.json({ status: 200, message: 'OK' });
        } catch (err) {
            console.log(err.stack);
            return response.json({ status: 500, message: err.stack });
        }
	}
}