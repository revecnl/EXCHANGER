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
    USD: {
        KRW: 1182.35,
        USD: 1,
        VND: 23235.5,
        unit: "달러",
    },
    KRW: {
        KRW: 1,
        USD: 0.00085,
        VND: 19.47,
        unit: "원"
    },
    VND: {
        KRW: 0.051,
        USD: 0.000043,
        VND: 1,
        unit: "동"
    }
}

//console.log(currencyRatio["VND"].unit);

//값을 읽어오기 변수 안에서 읽기
//currencyRatio.USD.unit

//누르면 바뀌는 이벤트 만들기(usd -> krw로)

//저장용 변수 생성
let fromCurrency = "USD"
let toCurrency = "USD"

document.querySelectorAll("#from-currency-list a")
    .forEach((menu) => menu.addEventListener("click", function () {
        //1.버튼을 가져온다. 2.버튼 값을 바꾼다. textContent
        document.getElementById("from-btn").textContent = this.textContent;
        //3.선택된 값을 저장한다. 변수에 저장
        fromCurrency = this.textContent;
        convert()
    }));

document.querySelectorAll("#to-currency-list a")
    .forEach(menu => menu.addEventListener("click", function () {
        document.getElementById("to-btn").textContent = this.textContent;
        toCurrency = this.textContent;
        convert()
    }));


//환전 값이 보인다.
//키를 입력하는 순간
function convert() {
    //환전
    //얼마를? 무슨돈을 어디로?
    // 돈 * 환율 = 바꿀금액
    let amount = document.getElementById("from-input").value
    //value = input창에 있는 걸 들고 올 수 있다.

    //환전 로직
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]
    //따라 바뀌는 로직
    document.getElementById("to-input").value = convertedAmount
}


//1. 드랍다운 리스트 값이 바뀔 때 -> click 이벤트
//2. 환전을 다시한다.->convert 함수


//숙제
//각 돈의 단위 변경 로직
