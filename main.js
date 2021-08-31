/*
    A car object looks like:
    
    "id": 1,
    "make": "Chevrolet",
    "model": "Monte Carlo",
    "modelYear": 2005,
    "color": "Purple",
    "numberOfDoors": 4,
    "price": "$18066.95",
    "vin": "1G6DS5E32D0847655"     
*/

console.log(cars)

let mainElement = document.querySelector("main")
for (let index = 0; index < cars.length; index += 1) {
    let  currentCar = cars[index];
    
    let article = document.createElement("article")
    let header = document.createElement("header")
    let ul = document.createElement("ul")
    let priceItem = document.createElement("li")
    let doorCountItem = document.createElement("li")
    let colorItem = document.createElement("li")
    let vinItem = document.createElement("li")
    let removeButton = document.createElement("button")

    article.classList.add("card")

    header.append(`${currentCar.make} ${currentCar.model} (${currentCar.modelYear})`)
    article.append(header)

    article.append(ul)
    ul.append(priceItem,doorCountItem,colorItem,vinItem)

    let priceLabel = document.createElement("strong")
    priceLabel.append("Price:")
    priceItem.append(priceLabel, ` ${currentCar.price}`)

    let doorCountItemLabel = document.createElement("strong")
    doorCountItemLabel.append("Door Count:")
    doorCountItem.append(doorCountItemLabel, ` ${currentCar.numberOfDoors}`)

    let colorItemLabel = document.createElement("strong")
    colorItemLabel.append("Color:")
    colorItem.append(colorItemLabel, ` ${currentCar.color}`)

    let vinLabel = document.createElement("strong")
    vinLabel.append("Vin:")
    vinItem.append(vinLabel, ` ${currentCar.vinvin}`)


    removeButton.append("Remove")
    removeButton.classList.add("remove")
    article.append(removeButton)

    mainElement.append(article)
}
