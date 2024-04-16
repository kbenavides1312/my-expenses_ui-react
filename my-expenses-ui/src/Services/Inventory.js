
export const getInventory = async () => {
    try {
        const settings = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };
        console.log("INVENTORY_API_URL", process.env.REACT_APP_INVENTORY_API_URL)
        const response = await fetch(`${process.env.REACT_APP_INVENTORY_API_URL}/inventory`, settings);
        if (response.ok) {
            const data = await response.json()
            console.log("data", data)
            return data;
        } else {
            console.log("response", response)
        }
    } catch (error) {
        console.error('Error fetching files:', error);
    }
};

export const deleteInventoryItem = async (itemId, all=false) => {
    try {
        const settings = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };
        console.log("INVENTORY_API_URL", process.env.REACT_APP_INVENTORY_API_URL)
        const response = await fetch(`${process.env.REACT_APP_INVENTORY_API_URL}/inventory/${itemId}?all=${all}`, settings);
        if (response.ok) {
            const data = await response.json()
            console.log("data", data)
            return data;
        } else {
            console.log("response", response)
        }
    } catch (error) {
        console.error('Error fetching files:', error);
    }
};
