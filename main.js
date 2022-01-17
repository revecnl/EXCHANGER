//박스 2개
//드랍다운 리스트
//환율정보
//드랍다운 리스트에서 아이템 선택시 바뀜
//금액 입력시 환전
//드랍다운 리스트에서 아이템을 선택하면 다시 그 기준이 됨
//숫자를 한국어로 정리
//반대 순서로 적어도 기능

//객체 생성
let currencyRatio= {
    USD:{
        USD:{
            KRW:1184.87,
            USD:1,
            VDN:22715.00,
            unit:"갈러"
        }
    },
    KRW:{
        KRW:1,
        USD:0.00084,
        VND:19.17 ,
        unit:"원"
    },
    VND:{
        VND:1,
        KRW:0.052,
        USD:0.000044,
        unit:"동"
    }
}

//값을 읽어오기 변수 안에서 읽기
//currencyRatio.USD.unit

console.log(currencyRatio['VND']['unit'])

//누르면 바뀌는 이벤트 만들기(usd->krw로)

document.querySelectorAll("from-currency-list a")
.forEach((menu)=>menu.addEventListener("click",function(){
    //버튼을 가져온다. 버튼 값을 바꾼다. 선택된 값을 저장한다.
    document.getElementById("from-btn")
}));