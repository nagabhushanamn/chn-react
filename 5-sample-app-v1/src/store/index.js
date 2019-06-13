


const store = {
    getState() {
        return {
            topics: [
                "java",
                "scala",
                "groovy",
                "js",
                "pyhton"
            ],
            comments: {
                "java": [
                    "OO language",
                    "best language",
                    "proven",
                    "...."
                ]
            }
        }
    },
    subscribe(callback) {

    }

}

export default store;