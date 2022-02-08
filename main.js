//박스 2개
//드랍다운 리스트
//환율정보
//드랍다운 리스트에서 아이템 선택시 바뀜
//금액 입력시 환전
//드랍다운 리스트에서 아이템을 선택하면 다시 그 기준이 됨
//숫자를 한국어로 정리
//반대 순서로 적어도 기능

//객체 생성 객체 내부에 여러 객체 생성가능
let currencyRatio = {
    VND: {
        USD: 0.000043,
        KRW: 0.051,
        VND: 1,
        unit: "동",
      },
      USD: {
        USD: 1,
        KRW: 1182.35,
        VND: 23235.5,
        unit: "달러",
      },
      KRW: {
        USD: 0.00085,
        KRW: 1,
        VND: 19.47,
        unit: "원",
      },
    };

//console.log(currencyRatio["VND"].unit);

//값을 읽어오기 변수 안에서 읽기
//currencyRatio.USD.unit

//누르면 바뀌는 이벤트 만들기(usd -> krw로)

//저장용 변수 생성
let fromCurrency = "USD"
let toCurrency = "USD"
let toButton = document.getElementById("to-btn");
let fromButton = document.getElementById("from-btn");
var unitWords = ["", "만", "억", "조", "경"];
var splitUnit = 10000;

document.querySelectorAll("#from-currency-list a")
    .forEach((menu) => menu.addEventListener("click", function () {
        //1.버튼을 가져온다. 2.버튼 값을 바꾼다. textContent
        document.getElementById("from-btn").textContent = this.textContent;
        //3.선택된 값을 저장한다. 변수에 저장
        fromCurrency = this.textContent;
        convert("form")
    }));

document.querySelectorAll("#to-currency-list a")
    .forEach(menu => menu.addEventListener("click", function () {
        document.getElementById("to-btn").textContent = this.textContent;
        toCurrency = this.textContent;
        convert("form")
    }));


//환전 값이 보인다.
//키를 입력하는 순간
function convert(type) {
   console.log("here");
    let amount = 0;
    if(type == "from"){ 
    amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]
    document.getElementById("to-input").value = convertedAmount
    transkor(amount, convertedAmount);
    } else {
    amount = document.getElementById("to-input").value;
    let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency]
    document.getElementById("from-input").value = convertedAmount;
    transkor(convertedAmount, amount);   
        }
    }
function transkor(from, to) {
    document.getElementById("fromunitkor").textContent = 
    readkor(from) + currencyRatio[fromCurrency].unit;
    document.getElementById("tounitkor").textContent = 
    readkor(to) + currencyRatio[toCurrency].unit;
}

function readkor(num) {
    let resultString = "";
    let resultArray = [];
    for (let i = 0; i < unitWords.length; i++) {
      let unitResult =
        (num % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
      unitResult = Math.floor(unitResult);
      if (unitResult > 0) {
        resultArray[i] = unitResult;
      }
    }
    for (let i = 0; i < resultArray.length; i++) {
      if (!resultArray[i]) continue;
      resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }
    return resultString;
  }


//1. 드랍다운 리스트 값이 바뀔 때 -> click 이벤트
//2. 환전을 다시한다.->convert 함수


//숙제
//각 돈의 단위 변경 로직

//document.querySelectorAll("#from-currency-list").forEach(function(item){
//    item.addEventListener("click", function (){
//        fromCurrency = this.id;
//        fromButton.innerHTML = `<a class=class="dropdown-content-inner" src="${currencyRatio[toCurrency].a}"/>${toCurrency}`;
//        convert("from");
//    });
//});

