
export const uploadReceiptXML = async (file) => {
    try {
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/xml',
            },
            body: file,
        };
        console.log("RECEIPTS_API_URL", process.env.REACT_APP_RECEIPTS_API_URL)
        const response = await fetch(`${process.env.REACT_APP_RECEIPTS_API_URL}/receipts`, settings);
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
