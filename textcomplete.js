const API_KEY = "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"

async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: "Hello, how are you?",
            max_tokens: 7
        })
    })
    const data = await response.json()
    console.log(data)
}

fetchData()

