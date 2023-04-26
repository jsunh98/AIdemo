const API_KEY = "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"

async function fetchChatData() {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{
                role: "user",
                content:"Hello!"
            }]
        })
    })
    const data = await response.json()
    console.log(data)
}

fetchChatData()