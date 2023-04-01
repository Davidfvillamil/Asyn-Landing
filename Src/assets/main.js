const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC55-mxUj5Nj3niXFReG44OQ&part=snippet%2Cid&order=date&maxResults=8'

const content = null || document.querySelector('#content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bb9fb51149msh2cd3d3870043aacp1b306ajsn21e6511e2246',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(url_api){
    const response = await fetch(url_api, options)
    const data  = await response.json()
    return data
}

(async () => {
    try{
        const videos = await fetchData(API)
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>        
        `).slice(0,2).join('')}
        
        `
        content.innerHTML = view
    }catch(error){
        console.log(error)
    }
})()