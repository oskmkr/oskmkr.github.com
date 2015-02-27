[TOC]

## javascript essentials

### 1. Javascript
* 웹언어로 웹페이지의 일부 엘리먼트를 조작하기 위해 시작되었다.
현재 엄청난 발전이 이루어져 client-side 뿐 아니라 Server-side 코드를 작성할 수도 있다.
그 외 그 사용처는 무궁무진하다.
* 독특한 언어
* 클래스가 없으며, 함수(function)는 [일급 객체(first-class object)][1] 로 다양한 작업에 사용된다.
    1. 변수나 데이터 구조 안에 담을 수 있다.
    2. 인자로 전달할 수 있다.
    3. 반환 값(return value)으로 사용할 수 있다.
    4. 런타임에 생성할 수 있다.
    5. 할당에 사용된 이름과 관계없이 고유하게 식별할 수 있다.
    

-----
[1] : == 일급객체(first-class object) ==
* 변수에 저장할 수 있다.
* 함수의 입력 파라메터로 사용할 수 있다.
* 함수의 출력 파라메터로 사용할 수 있다.
* 자료구조에 저장 가능해야한다.

◎ 컴퓨터 과학자 Christopher Strachey가 만든 조어 
◎ 함수가 런타임에도 생성되며, 함수의 인자로 전달되고 함수의 결과로서 리턴되며, 변수에 할당되는 것 
◎ 함수도 데이터처럼 구성가능해짐(Composability) 
◎ 일급함수라 함은 프로그램 언어에서 함수를 1급(first-class)의 지위로 사용하는가의 의미, JAVA, C++ 등의 OOP 언어에서는 클래스가 일급(first-class)의 지위를 갖는다. 대체적으로 함수를 일급의 지위로 사용하는 언어를 함수형 언어라고 한다. 
◎ 함수형 언어 : Haskell, Erlang, ML, CommonLisp, Scheme, Clean, Clojure, Scala(최근 발표한 트위터에서 하루 2.5억의 타임라인을 저장, 분산 관리하는 프레임워크인 Gizzard 개발에 사용됨), Mathmatica, XSLT 그리고 javascript의 closures 
◎ C++도 C++11에서 Lambda expression과 closures를 도입한다고 한다. 자바는 8버전에서 클로저를 도입하려 하였으나 최근에 폐기되었다고 한다.

-----

java 와 비슷한 형태로 사용할 수 있으나, javascript 만의 독특한 특성을 받아들이고 사용하는 것이 더 좋다.

### 2. Patterns
모범적 관행, 쓰임새에 맞게 추상화된 원리, 어떤 문제를 해결하기 위한 템플릿 

### 3. Javascript 개념
a. 객체지향 언어

객체란? 이름을 가진 프로퍼티를 가진 실체
키-값 쌍

JSON (JavaScript Object Notation)
```JSON
{ key : value }
{ }
```

객체의 프로퍼티가 함수(객체) 라면 메소드라 부른다.
함수 또한 객체다. 프로퍼티와 메서드를 가질 수 있다.

b. 클래스가 없다

Java 객체를 만드는 과정

1. 클래스(명세)를 선언
2. 클래스를 바탕으로 객체를 생성

```javascript
Foo foo = new Foo();
```


Javascript 에서 객체를 만드는 과정

1. 빈 객체를 필요한 시점에 생성
2. 필요한 시점에 필요한 멤버를 추가하여 사용한다.

```javascript
foo = {};
```

### prototype

Javascript 에서 상속을 구현하는 하나의 방법
prototype 또한 객체이며, 모든 함수는 prototype 프로퍼티를 갖는다.

### 그 외

1. ECMAScript
core javascript 프로그래밍 언어는 ECMAScript 표준에 기반을 두고 있다.

2. JSLint
정적 분석 도구

3. console 객체
javascipt에 포함되어 있지 않으나, 대부분의 브라우저에서 지원하는 객체로,
alert() 과 달리 페이지 동작에 간섭을 주지 않고, 더 많은 정보를 쉽게 표현할  수  있다.

# Javascript syntax
## 변수 선언
```javascript
var i = 0;
```

```javascript
i = 0; // 전역 공간에 선언, anti-pattern
```

## 주석
```javascript
// 한줄 주석
/* 
여러 줄 주석
*/
```

## data type
|type||description|
|-|-|-|
|String|문자열|"" 혹은 '' 를 이용하여 사용, '' 를 추천한다.|
|Number|숫자||
|Object|객체||
|boolean|불린|true, false|

## special charaters
|character|description|
|-|-|
|\n|new line|
|\b|backspace|
|\f|formfeed|
|\r|carriage return|
|\t|tab|
|\|escape character|

## coding standard
|type|description|prefix|
|-|-|
|string|문자열|```var sName = 'oskm'```|
|Number|숫자|```var nAge = 10```|
|Object|객체|```var oClass = {}```|
|Array|배열|```var aList = []```|

## 연산자(Operators)
1. 지정 연산자 : = , -=, +=, *=, /=
2. 비트(Bitwise)연산자 : <<=, >>=, >>>=, &=, ^=, |=
3. 수치 연산자 : +, - ,*, /, %, ++, --
4. 논리 연산자 : ||, &&, !
5. 비트 논리 연산자 : |, &, ^
6. 비교 연산자 : ==, !=, <=, >=, <, >
7. 스트링 연산자 : +, +=
8. 오브젝트 생성 연산자 : new

## 조건문
```javascript

if([condition]) {

} else if([condition]) {

} else {

}

```

## 반복문
```javascript
while([condition]) {
	// do something...
}

do {
	// do something...
} while([condition]);

for([executed before loop starts];[condition];[executed each time after the loop]) {
	// do something...
}

```

## 함수
```javascript

function [function_name]([arguments]) {
	// do something...
}

```

# base pattern
고급 javascript 프로그래밍을 위한 유용한 기본 패턴을 알아본다. 

## 1. 전역 변수 최소화
전역 변수 선언 시 global 객체에 이 값이 생성된다. (브라우저에서는 window) 

전역 변수는 모든 코드 내에서 공유된다. 목적이 다른 전역 변수를 같은 이름으로 사용하게 될 경우 문제가 발생할 수 있다.

여러 스크립트들 간의 충돌을 막으려면 최소화 하여야 한다.

특정 실행 context 內가 아니라면, this 는 이 global 객체를 가리킨다.


변수 선언 시 항상 var 를 사용할 것

javascript 는 변수 선언 없이 사용할 수 있고, 이러한 사용은 전역객체 프로퍼티가 된다.
(암묵적 전역(implied globals)) - 안티 패턴


단일 var 패턴

‘함수 상단에 var 선언을 한번만 쓰는 패턴

함수에서 필요로하는 모든 지역 변수를 한군데서 찾을 수 있다.
변수를 선언 전에 사용할 때 발생하는 로직상 오류를 막아준다. - hoisting 방지
변수 선언 후 사용에 대한 상기로 전역 변수 최소화에 도움
코드량 감소

## 2. 호이스팅(hoisting)


호이스팅(hoisting)

함수 내 어느 위치에서든 여러 var 선언을 사용할 수 있지만, 실제 모두 함수 상단에 변수가 선언된 것과 동일하게 동작한다.
```javascript
myname = "global";
(func() {
     console.log(myname); // "undefined"
     var myname = "local";
     console.log(myname); // "local"
})();

```

실제 동작
```javascript
myname = "global";
(func() {
     var myname;
     console.log(myname); // "undefined"
     myname = "local";
     console.log(myname); // "local"
})();
```

## 3. for-in loop

for-in loop

객체를 순회할 때 사용하라
순서가 정해져 있지 않기 때문에 배열에 사용하는 것은 바람직 하지 않다.


## 4. 내장 객체 생성자 확장

내장 객체 생성자 prototype은 확장하지 말자.
```javascript
Object.prototype.myMethod = function() {
	// do something
}
```

javascript 내장 메소드의 일관성을 기대하기 어려워진다.


## 5. 완전 항등 연산자

완전 항등 연산자를 사용하라

암묵적 타입 캐스팅을 피하고, 명시적 비교를 수행함으로 예측하지 못한 결과를 피할 수 있다.

===, !== 완전 항등 연산자 값과 타입을 모두 확인한다.
```javascript
var nValue = 0;

console.log(nValue === false);  // false
console.log(nValue == false);    // true

```

## 6. eval is evil

eval is evil

대게 eval() 없이 목표에 도달할 수 있는 더 나은 방법이 존재한다.
최근 jsonp 보안 이슈도 이 맥락이다.

## 7. parseInt()
parseInt 를 통한 숫자 변환에 정수 베이스를 지정하여 사용하자

일관성 있는 변환을 원한다면 항상 정수 베이스를 지정하여야 한다.

API spec

	parseInt("문자열", radix(정수베이스));

radix가 제공되지 않거나 수치 0이 제공되었으면, 그 정수 베이스를 알아내려는 시도를 한다. 첫 문자가 1~9 사이 수치이면 10진수로, 0X나 0x로 시작하였으면 16진수로 파싱(parse)하게 된다.0으로 시작되었으면 실제적으로 8진수가 아니더라도 8진수로 파싱한다. 


## 8. 습관

명명 규칙을 준수하자

변수와 함수 이름을 일관된 방식으로 사용한다.

생성자를 대문자로 시작하기(Pascal case)
function MyConstructor () {

}
메소드(camel case) 사용
function myFunction() {
}

상수
모든 글자를 대문자로 사용한다.
_private 규칙
private 프로퍼티나 메소드에 접두어로 _를 사용한다.

JSLint 실행 습관화
자동화 필요

실행되지 않는 코드
변수를 정의하기 전에 사용한 경우
불안전한 UTF문자
void, with, eval 을 사용한 경우
정규식 내에서 부적절하게 이스케이프한 문자

등을 찾아낸다.


# Javascript literal 과 생성자
## 1. 객체 리터럴
```javascript
{ }
```

객체? 이름-값(key-value) 해시 테이블
value 로 primitive type, 객체
, function 모두 들어갈 수 있으며, 특히 function 은?

* Code : 
```javascript
var oFoo = { };
```

1. 생성자 함수로 객체 생성
2. 내장 생성자 함수 사용 ( e.g. Object, Array )
```javascript
var oFoo = new Object(); // 안티 패턴
```

내장 생성자를 왜 사용하지 말아야 하는가.

Object() 내장 생성자는 파라메터로 값을 받을 수 있는데 파라메터 타입에 따라 다른 객체를 리턴한다.
```javascript
var o = new Object();
console.log(o.constuctor === Object); // true

var o = new Object(1);
console.log(o.constuctor === Number); // true

var o = new Object("string");
console.log(o.constuctor === String); // true

var o = new Object(true);
console.log(o.constuctor === Boolena); // true
```

런타임에 실행되는 값이 파라메터로 전달 되었을 때, 얘기치 못한 결과를얻는다.
new Object() 를 사용해 객체를 생성하지 말라 - 안티패턴

## 2. 함수 리터럴
1. 리터럴을 이용한 객체 생성 패턴
2. **function**
3. 더 짧다.
4. 클래스로 부터 생성해야 하는 것이 아님을 보여준다.


생성자 함수를 이용한 객체 생성

함수 선언.
```javascript

var Foo = function(sName) {
      this.sName = sName
      this.do = function() {
             return "I am " + this.sName; 
      }
}

var oFoo = new Foo();
```

실제 동작
```javascript
var Foo = function(sName) {
      
      var this;
      this = {};
      
      this.sName = sName
      this.do = function() {
             return "I am " + this.sName; 
      }
      
      return this;
}
```

생성자 함수를 new 를 이용해 호출하면, 항상 객체가 반환된다. (암묵적으로 this반환)

기본값은 this, 
원하는 객체를 return 하도록 정의할 수 있다. 만약 객체가 아닌 값을 반환하도록 하면 this 를 반환

만약 new 를 사용하지 않고 호출한다면??
생성자 내부의 this 가 global 객체를(window) 가리키게 된다.
전역 객체에 불필요한 프로퍼티가 생성되면서 더럽혀지게된다.
예상하지 못한 런타임 에러를 발생 시킬 수 있다.
```javascript
function Foo() {
	this.age = 1;
}
var foo = Foo(); // 실행 순간 global객체(window) 에 age 가 추가된다.
```

해결을 위한 패턴 – 스스로를 호출하는 생성자

```javascript
function Foo(sName) {
     if(!(this instanceof Foo)) {
           return new Foo();
     }
     
     this.sName = sName;
}
```

```javascript

// ES 5 strict 모드에서는 동작하지 않음.
function Foo(sName) {
     if(!(this instanceof arguments.callee)) {
           return new arguments.callee();
     }
     
     this.sName = sName;
}
```

## 3. 배열 리터럴
[] vs Array();
```javascript
var aShape = ["triangle", "rect", "circle"];
var aShape = new Array("triangle", "rect", "circle");
```

리터럴 문법이 훨씬 직관적이다.

배열 생성자
```javascript
var array = new Array(3);  // [ undefined, undefined, undefined ]
```

숫자 하나를 전달할 경우 배열의 첫번째 값이 아니라 길이가 된다. 

배열 생성자
```javascript
var array = new Array(3.14); // RangeError: invalid array length
```

부동소수점 값을 전달할 경우 에러 발생

동적으로 배열을 생성할 때 얘기치 못한 오류 발생 위험이 있다.

## 4. JSON
JavaScript Object Notation

객체 리터럴과의 차이점 - 프로퍼티명을 "" 로 감싸야한다. 항상 그런것은 아니고, 프로퍼티명에 공백문자가 포함된 경우

eval is evil -> eval 을 사용하지 마라.

Jindo1 => toJSON() Object 재정의 했다... 안티패턴..ㅜ.ㅜ

Jindo1 core 발췌
```javascript
/** @id Object.toJSON */
/*
Object.prototype.toJSON = function() {
return JINDO.obj2json(this);
};
*/
/** @id Array.toJSON */
Array.prototype.toJSON = function() {
return JINDO.obj2json(this);
};
```

Jindo2 => $Json() 사용

각 프레임워크는 이러한 파싱 유틸을 기본 제공한다.

## 5. 정규 표현식 리터럴

```javascript
var regx = /\\/gm;
var regx = new RegExp("\\\\", "gm");
```
* g : 전역매칭
* m : 여러줄 매칭
* i : 대소문자 구분없이 매칭

## 6. 에러 객체
Error() 등…
name, message 프로퍼티를 갖는다. 
사용안1)

throw 는 어떤 객체든지 던질 수 있다.
```javascript
try {
    throw {
          name : "Error",
          message : "stack overflow...",
          type : "Oops",
          errorCallback : function errorHandler() {
                  // handle errors
          }
    }
} catch(e) {
    alert(e.message);
    e.errorCallback();
}
```

사용안2)

```language
throw Error("stack overflow..");
```
new 를 굳이 사용하지 않아도 new 를 사용한 것과 같이 동작하므로, 조금 더 짧게...

# 함수 I
Javascript 에서 가장 중요한 것은 함수를 완벽히 익히는 것이다. 

javascript 는 중괄호 ({ })유효범위 가 없다!!
오로지 함수 유효범위만 존재한다.

** 1. 함수는 객체다.**
** 2. 함수는 지역 유효범위를 제공한다.**

## 1. Function 생성자 함수 사용
```javascript
// 안티 패턴
var add = new Function("a, b", "return a+b");
```
이 코드로 알 수 있는것?

함수도 객체라는 것을 확인할 수 있다.

이 방식을 지양해야하는 이유

1. 코드가 문자열로 전달되어 평가됨.
2. 이스케이프를 해주어야하는 난해함.
3. 유효 범위 제공 불가

그러나 동적으로 생성할 때는 필요할 수 있다.

그러나 그런 날이 올까??

## 2. 유효 범위

**함수로 감싸 진 경우만** 지역 변수가 된다.
**함수가 유효범위를 제공한다.**

## 3. 함수 표현식과 함수 선언문
함수 표현식(함수 리터럴)
```javascript
// 기명 함수 표현식(named function expression)
var foo = function foo() {
}
```
-> 함수 객체의 name 프로퍼티에 add 랄 값이 들어간다. 그 외는 무명 함수 표현식과 동일.
-> 기명 함수 표현식을 다른 이름의 변수에 할당할 수 있으나, IE 에서는 잘 동작하지 않으므로 일치시키는 것이 좋다.

```javascript
// 무명 함수 표현식(unnamed function expression) -> 함수 표현식(function expression)
var foo = function() {
}
```

함수 선언문
```javascript
function foo() {

}
```
함수 선언문과 함수 표현식의 차이
함수 선언문은 전역 공간이나, 함수 내부에서만 사용가능하다.

즉, 함수 선언문을 사용할 수 없는 경우 함수 표현식을 사용한다. 함수 객체를 매개 변수로 전달하거나, 객체 리터럴로 매개 변수를 정의 하는 경우는 선언문을 사용할 수 없다.

함수 표현식을 사용하자.
함수 선언문보다 함수 표현식을 사용하는 것이 다른 객체들과 마찬가지로 객체의 일종이라는 것이 눈에 보인다.

## 4. 함수 name 프로퍼티
```javascript
// 함수 선언문
function foo() {}
// 기명 함수 표현식
var foo = function foo() {};
// 무명 함수 표현식
var foou = function () {};

console.log(foo.name); // foo
console.log(foo.name); // foo
console.log(foo.name); // FF, webkit 에서는 빈문자열(""), IE 는 undefined

```

## 5. 함수 호이스팅(hoisting)
```javascript
function foo() {
	console.log('global foo()');
}
function bar() {
	console.log('global bar()');
}

(function() {
	console.log(typeof foo);     // function
	console.log(typeof bar);     // function
})();
```

```javascript
function foo() {
	console.log('global foo()');
}

function bar() {
	console.log('global bar()');
}

(function() {
	console.log(typeof foo);     // function
	console.log(typeof bar);     // undefined

    // 함수 선언, 정의된 함수가 hoisting 된다.
    function foo() {
    	console.log('local foo()');
    }
    // 함수 표현, 변수 bar 만 hoisting 된다.
    var bar = function() {
	    console.log('local bar()');
    }
})();
```

```javascript
function foo() {
	console.log('global foo()');
}

function bar() {
	console.log('global bar()');
}

(function() {
    function foo() {
    	console.log('local foo()');
    }
    
    var bar;

    console.log(typeof foo);
    console.log(typeof bar);
    
    bar = function() {
    	console.log('local bar()');
    }
})();
```

함수 선언문, 정의된 함수가 hoisting 된다
함수 표현식, 변수만 hoisting 된다.

# 함수 II

Javascript 에서 가장 중요한 것은 함수를 완벽히 익히는 것이다. 

javascript 는 중괄호 ({ })유효범위 가 없다!!
오로지 함수 유효범위만 존재한다.

** 1. 함수는 객체다. **
** 2. 함수는 지역 유효범위를 제공한다.**

## 1. Callback 패턴

함수는 객체이므로 인자로 functon 을 전달할 수 있다.
API 작성 시 매우 유용하다.
함수 자신의 역할(핵심)에만 집중하고, 그 외의 처리에 대해서는 콜백 함수에 맞겨 자유롭게 동작할 수 있도록 한다.
범용성, 확장성 확보

사용 예)
```javascript
$Ajax(
	// 생략
	{
	// 생략
		onLoad : function() {
		}
	}

$Fn(this._onEvent, this).attach(document.body, "click");
```

특정 이벤트가 발생하면, 어떠한 행위를 수행하는, 대부분 클라이언트 개발은 event-driven 방식이다. 
콜백 패턴으로 인해 이러한 event-driven 개발 방식에 적합하다.

```javascript
var doSomething = function(fCallback) {
     // 뭔가 핵심적인 비지니스 로직
     if(typeof fCallback == "function") {
          fCallback();
     }
}
```

유효범위 문제
```javascript
var myapp = {};
myapp.name = 'myApp1.0';

myapp.postProcessing = function() {
	console.log('This is ' + this.name);
}

var doSomething = function(fCallback) {
    // 뭔가 핵심적인 비지니스 로직
    if(typeof fCallback == "function") {
    	fCallback();
	}
}
myapp.postProcessing(); // This is myApp1.0 
doSomething(myapp.postProcessing); // This is
```

개선
```javascript
var myapp = {};
myapp.name = 'myApp1.0';

myapp.postProcessing = function() {
	console.log('This is ' + this.name);
}
var doSomething = function(fCallback, oContext) {
    // 뭔가 핵심적인 비지니스 로직
    if(typeof fCallback == "function") {
    	fCallback.call(oContext);
    }
}
myapp.postProcessing(); // This is myApp1.0 
doSomething(myapp.postProcessing, myapp); // This is myApp1.0 
```

## 2. 함수 반환

함수는 객체이므로 반환할 수 있다.

```javascript
var counter = function() {
    var i = 0;
    return function() {
        console.log('count : ' + i++);
    }
}
var myCounter = counter();
myCounter(); // count : 0
myCounter(); // count : 1
myCounter(); // count : 2
```

클로저(Closure)

함수를 실행하는데 필요한 지역변수와 결합된 Function 인스턴스
콜백함수를 선언할 때 지역 변수를 유지하면서 참조할 수 있는 능력

함수가 선언되면, 해당 함수는 선언 시점에 범위안에 있는 변수를 참조할 수 있다. 함수가 참조할 수 있는 변수들은 선언한 후에 범위를 벗어나더라도 함수와 함께 수행된다.

```javascript
(function() {
     var local = 1; // 1) 함수 내 변수
     window.setInterval(function() {
          console.log('local=' + local);
          local++; // 내부 함수가 1) 을 참조
     }, 300);
})();
```

함수내의 변수를 내부함수가 참조하고 있기 때문에 유지되어 접근할수 있는 함수를 클로저라고 합니다.


콜백 함수가 실행되는 동안 local은 존재하지 않는다고 생각되어진다.
함수의 선언으로 생성된 클로저는 local을 포함한다. 즉 함수의 생명주기 동안 변수가 해제되지 않고 범위에 있도록 유지된다.

특별히 주의할 점
context 는 클로저의 일부로 포함되지 않는다.
각 함수 호출은 자신의 함수 context 를 소유한다는 점.

## 3. this의 모든 것

클래스 중심의 객체지향 언어에서는 메서드가 선언된 클래스의 인스턴스를 this 포인터가 참조한다.

javascript에서는 함수가 어딘가에 속해서 선언되지 않는다. 함수의 선언이 아니라, 함수가 어떻게 호출되었는 지에 따라 결정된다.
동일한 함수라도 어떻게 호출되었느지에 따라 다른 콘텍스트를 가짐을 의미한다.

```javascript
window.name = 'window';

function whoAmI() {
	console.log(this.name);
}

var itsMe = {
	name : 'itsMe'
};

whoAmI(); // window
itsMe.whoAmI = whoAmI;
itsMe.whoAmI(); // itsMe
whoAmI.call(itsMe); // itsMe
whoAmI.apply(itsMe); // itsMe
```

실행 context 를 마음대로 지정할 수 있다.
call 은 추가 매개 변수로 , 구분자를 이용해 받고,
apply 는 추가 매개 변수로 객체의 배열을 받는다.

Jindo2 는 $Fn 에 bind 추가

```javascript
jindo.$Fn.prototype.bind = function() {
    var a = jindo.$A(arguments).$value();
    var f = this._func;
    var t = this._this;
    var b = function() {
          var args = jindo.$A(arguments).$value();
          // fix opera concat bug
          if (a.length) args = a.concat(args);
          return f.apply(t, args);
    };
    return b;
};
```

jindo1 은 Function 에 bind 추가

```javascript
bind : function(obj) {
    var f=this, a=$A(arguments);
    a.shift();
    return function() {
         return f.apply(obj, a);
    }
},
```

## 4. Lazy function definition

여러 번 호출될 수 있는 어떤 함수가 초기화 준비 작업을 단 한번만 수행할 때 유용하다.
재정의 하면서 수행부의 양이 줄어들기 때문에 어플리케이션 성능향상에 도움

```javascript
var myapp = {};

myapp.name = 'MyApp';
myapp.running = function() {
    
    myapp.bStarted = true;
    console.log('ready...');
    
    this.running = function() {
    	console.log('run...');
    }
}
myapp.running();
myapp.running();
myapp.running();
```

## 5. 즉시 실행 함수
함수가 선언되자마자 실행되도록 하는 문법이다. (스크립트가 로딩됨과 함께 수행된다.)

함수를 함수 표현식으로 선언한다.
함수가 즉시 실행될 수 있도록 마지막에 괄호쌍을 추가한다.
전체 함수를 괄호로 감싼다.

1. 초기화 등 한번만 실행해야할 때
2. 따라서 이름이 지정된 함수를 생성할 필요가 없을 때
3. 초기화에만 사용할 지역 유효범위 변수를 사용할 때 

사용한다.

```javascript
(function() {
     // 구현부
})();
```

```javascript
(function(global, when) {
     // 구현부
})(this, new Date());
```

와 같이 파라메터를 전달할 수도 있다.

즉시 실행함수는 전역 네임스페이스를 더럽히지 않고, Sandbox 를 제공하여 주기 때문에 모듈화에 유용하다.

즉 단위 테스트(점진적 개선 작업)에도 적합하다.

## 6. 즉시 객체 초기화 패턴

즉시 실행 함수와 동일한  장점을 제공한다.

```javascript
({
// 설정 값 정의
    name : 'myApp',
    init : function() {
         //초기화작업
    }
}).init();
```

# 상속

## 1. 객체 지향 프로그래밍
프로토 타입 기반 프로그래밍은 
객체지향 프로그래밍의 한 형태입니다.

클래스가 없고, 클래스 기반 언어에서 상속을 사용하는 것과는 다르게 객체를 원형(프로토타입)으로 하여 복제의 과정을 통하여 객체의 동작 방식을 다시 사용할 수 있습니다.

프로토 타입기반 프로그래밍은 클래스리스(class-less), 프로토타입지향 혹은 인스턴스기반 프로그래밍이라고도 합니다.
* 사내 javascript 개발 가이드 발췌


클래스 기반
클래스 사이의 분류와 관계에 초점

프로토타입 기반
동작 방식에 초점

## 2. 클래스 모방
대부분의 자바 스크립트 프레임웍들은 클래스를 흉내내어 비슷하게 작성할 수 있도록 하는 기법(function) 을 제공한다.

공통점

1. 클래스의 생성자에 해당하는 메소드의 몀명 규칙이 있으며, 자동으로 호출된다.
2. 클래스는 다른 클래스로부터 상속될 수 있다.
3. 자식 클래스 내부에서 부모 클래스에 접근할 수 있는 경로가 존재한다.


Jindo1
1. __init : function() {}
2. extend
3. 없음.

```javascript
var Parent = Class({
    __init : function() {
        console.log('Parent()');
        this.name = 'Parent';
    },
    say : function() {
    	console.log(this.name + ' saying');
    }
});
var Child = Class.extend(Parent, {
    __init : function() {
        console.log('Child()');
        this.name = 'Child';
    },
    say : function() { // method overriding
    	console.log(this.name + ' saying ' + 'lalala~');
    }
});
var oC = new Child();
oC.say();
```

Jindo2
1. $init : function() {}
2. extend
3. $super

```javascript
var Parent = $Class({
    $init : function() {
        console.log('Parent()');
        this.name = 'Parent';
    },
    say : function() {
    	console.log(this.name + ' saying');
    }
});

var Child = $Class({
    $init : function() {
        console.log('Child()');
        this.name = 'Child';
    },
    say : function() {  // method overriding
        this.$super.say();
        console.log(this.name + ' saying ' + 'lalala~');
	}
}).extend(Parent);
var oC = new Child();
oC.say();

```

클래스 모방 패턴 구현은 피하는 것이 좋다.
언어에는 존재하지 않는 추가적인 개념과 규칙을 만들어내고, 
또한 사용법을 기억하고 익혀야한다.
그러나, 프로토타입 개념이 낯설고, 클래스 개념에 익숙할 경우 유용할 수 있다.


ECMAScript 5 추가사항

Object.create() 가 이 클래스 모방 패턴을 구현하고 있다.
https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/create
API Specification
Object.create(proto [, propertiesObject ])



```javascript
function Parent() {
    this.name = 'Parent';
    this.age = 18;
    console.log('initialize Parent...');
}
function Child() {
    this.name = 'Child';
    console.log('initialize Child...');
}

Parent.prototype.getName = function() {
	return 'my name is ' + this.name;
};
Parent.prototype.getAge = function() {
	return 'I am ' + this.age + ' years old';
};
var oC = Object.create(Parent.prototype);
//var oC = Object.create(new Parent());

```

## 3. 프로토타입을 활용한 상속

객체는 함수로부터 생성되고, 함수는 객체(or 프로토타입)를 프로토타입으로 가집니다.
o
객체에는 자신을 생성한 생성자를 가리키는 constructor 존재

prototype은 this.constructor.prototype 으로 확인 가능 (FF에서는 __proto__ 로 더 간단히 접근 가능)


#### additional
##### 1. hasOwnProperty
result = object.hasOwnProperty(propertyName);

##### 2. in 연산자
result = propertyName in object

```javascript
var Terminal = function() {
	this.name = 'Foo';
    this.ls = function() {
    	console.log('ls');
    }
}

Terminal.prototype.tail = function() {
	console.log('tail');
}

var oTerminal = new Terminal();

oTerminal.hasOwnProperty('ls');							// true
oTerminal.hasOwnProperty('tail');						// false
oTerminal.constructor.prototype.hasOwnProperty('ls');	// false
oTerminal.constructor.prototype.hasOwnProperty('tail');	// true
'ls' in oTerminal	// true
'tail' in oTerminal	// true

```











