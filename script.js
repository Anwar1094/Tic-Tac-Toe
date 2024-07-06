let text = ["X", "O"]
let i = 1
const btns = document.querySelectorAll('button')
const line = document.getElementById('line')
let node = document.createTextNode('Player 1\'s turn: X')
let txt = null
document.querySelector('h2').appendChild(node)
btns.forEach(btn =>
    btn.onclick = function() {
        if (btn.id == "Reset") {
            btns.forEach(button => {
                if (button.id != "Reset")
                    button.disabled = false
                if (button.id != "Reset" && button.firstChild != null)
                    button.firstChild.remove()
                line.style.opacity = "0%"
                line.style.width = "0px"
                document.querySelector('h2').removeChild(node)
                node = document.createTextNode('Player 1\'s turn: X')
                document.querySelector('h2').appendChild(node)
                i = 1
            })
        }
        if (btn.id != "Reset") {
            if (i % 2 == 0) {
                txt = document.createTextNode("O")
                document.querySelector('h2').removeChild(node)
                node = document.createTextNode('Player 1\'s turn: X')
                document.querySelector('h2').appendChild(node)
            } else {
                txt = document.createTextNode("X")
                document.querySelector('h2').removeChild(node)
                node = document.createTextNode('Player 2\'s turn: O')
                document.querySelector('h2').appendChild(node)
            }
            btn.appendChild(txt)
            btn.disabled = true
            let winner = checkWinner()
            if (winner == "X") {
                document.querySelector('h2').removeChild(node)
                node = document.createTextNode('Winner is: X')
                document.querySelector('h2').appendChild(node)
            } else if (winner == "O") {
                document.querySelector('h2').removeChild(node)
                node = document.createTextNode('Winner is: O')
                document.querySelector('h2').appendChild(node)
            } else if (winner == 'Tie') {
                document.querySelector('h2').removeChild(node)
                node = document.createTextNode("It's a tie!")
                document.querySelector('h2').appendChild(node)
            }
            if (winner != null) {
                btns.forEach(button => {
                    if (button.id != "Reset")
                        button.disabled = true
                })
            }
            i++
        }
    }
)

function checkWinner() {
    if (btns[0].textContent == btns[1].textContent && btns[1].textContent == btns[2].textContent && btns[1].textContent != "") {
        line.style.opacity = '100%'
        line.style.top = '271px'
        line.style.animation = 'IncreaseWidth 3s 0s infinite'
        line.style.width = "380px"
        return btns[0].textContent
    } else if (btns[0].textContent == btns[3].textContent && btns[3].textContent == btns[6].textContent && btns[3].textContent != "") {
        line.style.width = "380px"
        line.style.opacity = '100%'
        line.style.rotate = '90deg'
        line.style.top = '420px'
        line.style.left = '-148px'
        line.style.animation = 'IncreaseWidth 3s 0s infinite'
        return btns[0].textContent
    } else if (btns[6].textContent == btns[7].textContent && btns[7].textContent == btns[8].textContent && btns[7].textContent != "") {
        line.style.opacity = '100%'
        line.style.top = '571px'
        line.style.animation = 'IncreaseWidth 3s 0s infinite'
        line.style.width = "380px"
        return btns[6].textContent
    } else if (btns[2].textContent == btns[5].textContent && btns[5].textContent == btns[8].textContent && btns[5].textContent != "") {
        line.style.width = "380px"
        line.style.opacity = '100%'
        line.style.rotate = '90deg'
        line.style.top = '420px'
        line.style.left = '150px'
        line.style.animation = 'IncreaseWidth 3s 0s infinite'
        return btns[2].textContent
    } else if (btns[0].textContent == btns[4].textContent && btns[4].textContent == btns[8].textContent && btns[4].textContent != "") {
        line.style.opacity = '100%'
        line.style.width = '500px'
        line.style.top = '419px'
        line.style.rotate = '45deg'
        line.style.animation = 'IncreaseDiagonal 3s 0s infinite'
        return btns[0].textContent
    } else if (btns[2].textContent == btns[4].textContent && btns[4].textContent == btns[6].textContent && btns[4].textContent != "") {
        line.style.opacity = '100%'
        line.style.width = '500px'
        line.style.top = '419px'
        line.style.rotate = '-45deg'
        line.style.animation = 'IncreaseDiagonal 3s 0s infinite'
        return btns[2].textContent
    } else if (btns[1].textContent == btns[4].textContent && btns[4].textContent == btns[7].textContent && btns[4].textContent != "") {
        line.style.width = "380px"
        line.style.opacity = '100%'
        line.style.rotate = '90deg'
        line.style.top = '420px'
        line.style.animation = 'IncreaseWidth 3s 0s infinite'
        return btns[1].textContent
    } else if (btns[3].textContent == btns[4].textContent && btns[4].textContent == btns[5].textContent && btns[4].textContent != "") {
        line.style.opacity = '100%'
        line.style.top = '421px'
        line.style.width = "380px"
        line.style.animation = 'IncreaseWidth 3s 0s infinite'
        return btns[3].textContent
    } else {
        let tie = true
        if (btns[0].textContent == "" || btns[1].textContent == "" || btns[2].textContent == "" || btns[3].textContent == "" || btns[4].textContent == "" ||
            btns[5].textContent == "" || btns[6].textContent == "" || btns[7].textContent == "" || btns[8].textContent == ""
        )
            tie = false
        if (tie)
            return 'Tie'
    }
    return null
}