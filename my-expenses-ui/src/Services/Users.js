export const createUser = async (payload) => {
    try {
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Access-Control-Allow-Origin": "http://localhost:8084",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            mode: 'no-cors',
        };
        console.log("USERS_API_URL", process.env.REACT_APP_USERS_API_URL)
        const response = await fetch(`${process.env.REACT_APP_USERS_API_URL}/users`, settings);
        if (response.ok) {
            const data = await response.json()
            console.log("data", data)
            return response
        } else {
            console.log("response", response)
        }
    } catch (error) {
        console.error('Error fetching files:', error);
    }
};
