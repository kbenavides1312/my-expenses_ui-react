export const createUser = async (payload) => {
    try {
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        };
        console.log("USERS_API_URL", process.env.REACT_APP_USERS_API_URL)
        const response = await fetch(`${process.env.REACT_APP_USERS_API_URL}/users`, settings);
        if (response.ok) {
            const data = await response.json()
            console.log("data", data)
        } else {
            console.log("response", response)
        }
    } catch (error) {
        console.error('Error fetching files:', error);
    }
};

export const login = async (payload) => {
    try {
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        };
        console.log("USERS_API_URL", process.env.REACT_APP_USERS_API_URL)
        console.log("payload", payload)
        const response = await fetch(`${process.env.REACT_APP_USERS_API_URL}/users/login`, settings);
        if (response.ok) {
            const data = await response.json()
            console.log("data", data)
        } else {
            console.log("response", response)
        }
    } catch (error) {
        console.error('Error fetching files:', error);
    }
};
