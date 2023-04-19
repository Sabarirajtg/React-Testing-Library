const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Sabairaj",
                    last: "T G"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/59.jpg"
                },
                login: {
                    username: "Sabarysh"
                }
            }
        ]
    }
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}