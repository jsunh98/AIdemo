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
            prompt: "hello, how are you today?",
            max_tokens: 7
        })
    })
    const data = await response.json()
    console.log(data)
}

fetchData()