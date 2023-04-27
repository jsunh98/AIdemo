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