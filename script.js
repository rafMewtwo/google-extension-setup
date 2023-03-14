function replaceImages() {
    const images = document.querySelectorAll('img')
    images.forEach((image) => {
        image.src = 'https://nv99.com.br/itomeme.png'
    })
}

const button = document.querySelector('button');

button.addEventListener('click', async (event) => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: { tabId: tab.id},
        function: replaceImages
    })
})