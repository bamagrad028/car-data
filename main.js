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



 function  createCarCard (currentCar) {
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
    vinItem.append(vinLabel, ` ${currentCar.vin}`)


    removeButton.append("Remove")
    removeButton.classList.add("remove")
    article.append(removeButton)

  return article

 }

 let mainElement = document.querySelector("main")
 for (let index = 0; index < cars.length; index += 1) {
   let currentCar = cars[index]
   
   let cardElement = createCarCard(currentCar)
   mainElement.append(cardElement)
 }
 
    
function addCar (event) {
    event.preventDefault()
    let form = event.target

    let vin = form.vin.value
    let make = form.make.value
    let model = form.model.value
    let color = form.color.value
    let price = form.price.value
    let year = form.year.value
    let doorCount = form["number-of-doors"].value

    let car = {
        vin,
        make,
        model,
        color,
        price,
        "modelYear": year,
        "numberOfDoors": doorCount,
    }
    
    cars.push(car)
    let cardCardElement = createCarCard(car)
    mainElement.prepend(cardCardElement)

    form.reset()
    
}

let addCarForm = document.querySelector("form#add-car")
addCarForm.addEventListener("submit", addCar)

