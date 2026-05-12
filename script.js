function buttonClick() {
    let name = document.getElementById("userInput").value
    let lastname = document.getElementById("userInput2").value
    let fullname = name + " " + lastname
    console.log(name)
    document.getElementById("heading").innerHTML = fullname
    let x = 12
    x = x + 2
    x++
    console.log(x)
}