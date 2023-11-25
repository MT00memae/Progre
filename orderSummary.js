var tellimus = { 
    "id": 2113, 
    "orderNumber": "E210126001", 
    "createdAt": "2021-01-26 16:04:24", 
    "clientName": "Kalle Tali", 
    "deliveryType": "Omniva smartpost", 
    "deliveryValue": 178, 
    "rows": [ 
      { 
        "article_id": 31, 
        "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W", 
        "product_code": "257549", 
        "price": 49.1666666667, 
        "amount": 1, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23420, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk", 
        "product_code": "355836", 
        "price": 5.0666666667, 
        "amount": 2, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23421, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk", 
        "product_code": "000000000501267301", 
        "price": 5.825, 
        "amount": 1, 
        "vat": 0.2 
      } 
    ] 
  }
  
  // Käivitage kogusumma :D
  var totalAmount = 0;
  
  // Lugeda tellimuse onjekti seest kõik tellimuse kaubad/ Korrake järjekorras iga üksust
  tellimus.rows.forEach(function(item) {
      var name = item.name;
      var quantity = item.amount;
      var priceWithoutVAT = item.price;
  
      // Arvutage kauba summa ilma käibemaksuta 
      var amountWithoutVAT = quantity * priceWithoutVAT;
  
      // Arvutage kauba summa käibemaksuga
      var amountWithVAT = amountWithoutVAT * (1 + item.vat);
  
      // Prindi iga kauba nimi, kogus, hind ja summa koos käibemaksuga eraldi reale
      console.log("Name: " + name + ", Quantity: " + quantity + ", Price (without VAT): " + priceWithoutVAT.toFixed(2) + ", Amount (with VAT): " + amountWithVAT.toFixed(2));
      
      // Lisa summale käibemaksuga summa
      totalAmount += amountWithVAT;
  });
  
  // Printige tellimuse kogusumma koos käibemaksuga
  console.log("Total Amount (with VAT): " + totalAmount.toFixed(2));
  