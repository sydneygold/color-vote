const $container = document.querySelector('#card-container')

fetch('http://localhost:3000/colors')
    .then(parseResponse)
    .then(colors => showCardInfo(colors))


function showCardInfo(colors){
    colors.forEach(color => {
        createCards(color)
    })
}


function createCards(color){
        const $card = document.createElement('div')
        $card.className = 'color-card'
        $card.style.backgroundColor = color.hex

        const $name = document.createElement('h2')
        $name.textContent = color.name

        let $votes = document.createElement('p')
        $votes.textContent = color.votes 

        const $voteHere = document.createElement('button')
        $voteHere.textContent = "1+ Vote!"

        $voteHere.addEventListener('click', () => {
            $votes.textContent = color.votes++
        })

        const $deleteButton = document.createElement('button')
        $deleteButton.className = 'delete-button'
        $deleteButton.textContent = 'Delete'

        $card.append($name, $votes, $voteHere, $deleteButton)
        $container.appendChild($card)
}

function addingColors()

function parseResponse(response){
    return response.json()
}