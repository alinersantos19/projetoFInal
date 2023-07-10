var subtotal = 0
var games = [
    "Star Wars - PS3",
    "Marvel Vs Capcom - PS3",
    "Resident Evil - PS3",
    "God Of War - PS3",
    "Fifa - PS3",
    "Cris Tales - PS4",
    "Home Front - PS4",
    "Resident Evil 3 - PS4",
    "God Of War - PS4",
    "Fifa - PS4",
    "Star Wars - PS5",
    "Gran Turismo- PS5",
    "Resident Evil - PS5",
    "God Of War - PS5",
    "Fifa - PS5",
    "Star Wars - XBOX",
    "Halo - XBOX",
    "Resident Evil - XBOX",
    "Gears of Wars - XBOX",
    "Fifa - XBOX"
];

var gameValues = [
    42.5,
    59.8,
    78.3,
    95.1,
    108.7,
    127.2,
    132.6,
    145.4,
    163.9,
    176.5,
    185.2,
    158.3,
    131.7,
    114.8,
    82.6,
    67.3,
    51.9,
    85.4,
    109.1,
    193.8
  ];

function numberItemsCarrinho() {
    var div = document.getElementById('numberItems')

    div.innerHTML = ""+(localStorage.length - 3)+"";
}

function addItemCarrinho(codProduct, quantID) {
    var qtd = document.getElementById(quantID).value;
    var div = document.getElementById('numberItems');
    var value = parseInt(div.textContent);

    var newValue = value + 1;

    var elementStoraged = localStorage.getItem(codProduct);
    var qtdStoraged = parseInt(elementStoraged)
    if(qtdStoraged > 0) {
        localStorage.removeItem(codProduct);
        let newQtd = qtdStoraged + parseInt(qtd);
        localStorage.setItem(codProduct, ""+newQtd+"");
    } else {
        localStorage.setItem(codProduct, ""+qtd+"");
    }
    
    div.innerHTML = newValue;
}

function getListCarrinho() {
    var div = document.getElementById('list-item');
    for (var i = 0; i <= games.length; i++) {
        var priceUnit = gameValues[i];
        var codProduct = localStorage.getItem("product-"+i);
        var numberItems = parseInt(codProduct);

        if(numberItems > 0) {
            item = games[i];

            var descricao = "<h1>Descrição Produto</h1> <div id='item-produto'>"+item+"</div>";
           
            const li = document.createElement("li");
            li.id = "list-element";

            const divDesc = document.createElement("div");
            divDesc.id = "descrição-produto";
            divDesc.innerHTML = ""+descricao+"";

            const divQuantidade = document.createElement("div");
            divQuantidade.id = "qtd-product";
            divQuantidade.innerHTML = "<h1>Quantidade</h1> <p id='text-list'>"+numberItems+"</p>";

            const divCost = document.createElement("div");
            divCost.id = "preco-unitario";
            divCost.innerHTML = "<h1>Preço Unitário</h1> <p id='text-list'>"+priceUnit+"</p>";


            const divCostTotal = document.createElement("div");
            divCostTotal.id = "preco-unitario";
            divCostTotal.innerHTML = "<h1>Preço Total</h1> <p id='text-list'>"+(priceUnit * numberItems)+"</p>";
        

            var productCode = "'product-"+i+"'"; 
            const divRemove = document.createElement("div");
            divRemove.id = "remove-content"
            divRemove.innerHTML = "<button onclick='removeElement("+productCode+");' id='remove-item'>X</button>";

            subtotal = subtotal + (priceUnit * numberItems)

            li.appendChild(divDesc);
            li.appendChild(divQuantidade);
            li.appendChild(divCost);
            li.appendChild(divCostTotal);
            li.appendChild(divRemove);

            div.appendChild(li);
        }
    };
}

function removeElement(codElement) {
    codElement.replace(/ /g, "");
    localStorage.removeItem(codElement);
    location.reload();
}

function getSubtotal() {
    var subtotalDiv = document.getElementById('subtotal-payment');
    subtotalDiv.value = ""+subtotal+"";
};

function getTotal() {
    var totalDiv = document.getElementById('total-payment');
    totalDiv.value = ""+(subtotal + 20)+"";
};

function alertPayment() {
    alert("Pagamento em processamento!")
}