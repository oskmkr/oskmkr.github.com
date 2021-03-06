[TOC]

## javascript design patterns

### 1. 메서드 빌려쓰기 패턴

- 객체의 특정 메서드만 사용하고 싶을 때, 상속까지 하는 것은 낭비다.
- 원하는 메서드만 골라서 사용하고 싶을 때 유용하다.
- call, apply 를 활용한다.

```javascript
Array.prototype.slice.call(arguments);
```

```javascript
var Do = function() {    console.log('result ', Array.prototype.slice.call(arguments)); // [1, 2, 3, 4]}new Do(1, 2, 3, 4);
```

this 를 사용하는 메소드를 빌려쓸 때는 원하는 context 를 전달하여 실행되도록 해야 하는 것에 주의하여야 한다.
call 이나 apply 호출 시 context  를 전달하여 사용하자

jindo2 $Fn 의 bind / jindo1 의 Function.prototype.bind 도 이러한 활용이다.
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

```javascript
JINDO.extend(Function.prototype, {
       /** @id Function.prototype.bind */
       bind : function(obj) {
              var f=this, a=$A(arguments);a.shift();
              return function() {
                     return f.apply(obj, a);
              }
       },
       /** @id Function.prototype.bindForEvent */
       bindForEvent : function(obj) {
              var f=this, a=$A(arguments);
              return function(e) {
                     a[0] = Event.ready(e);
                     return f.apply(obj, a);
              }
       },
       /** @id Function.prototype.owner */
       owner : function(thisobj) {
              var f=this;
              return function() {
                     return f.apply(thisobj, $A(arguments));
              }
       }
});
```

### 2. Memoization pattern

메모이제이션(memoization)은 컴퓨터 프로그램을 실행할 때 이전에 계산한 값을 메모리에 저장해서 매번 다시 계산하지 않도록 하여 전체적인 실행속도를 빠르게 하는 기술이다. 동적 계획법의 핵심이 되는 기술이다.

http://ko.wikipedia.org/wiki/%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98

* 이미 java 개발 중에 익히 사용하고 있다.
* 캐쉬

```javascript
var Foo = function() {
var cacheKey = JSON.stringify(Array.prototype.slice.call(arguments)), f = arguments.callee, result;
if(!f.cache[cacheKey]) {
result = {};
// ..비용이 많이 드는 수행..
f.cache[cacheKey] = result;
}
return f.cache[cacheKey];
}
Foo.cache = {};
var oFoo = new Foo();
```
Javascript에는 Static Member를 표기하는 문법이 존재하지 않는다. 하지만 생성자에 property를 추가함으로써 Static 변수처럼 동작하도록 구현할 수 있다.

### 3. 설정 객체 패턴
파라메터로 객체를 전달하는 것.

```javascript
var htParam = {
     clubid : 14447233,
     articleid : 1,
     commentid : 10
};

function(htParam) {
}

```

추후에 요구사항이 변경되어 파라메터가 추가되어야 할 때,
java의 경우 타입이 있어서 순서가 바뀌었을 때 컴파일러 단계에서 검출될 수 있으나 javascript 는 그렇지 못하다. 파라메터 전달 순서 실수로 인한 예상치 못한 오류 발생 가능.
많은 수의 파라메터를 전달하게 될 경우 굉장히 길어질 수 있다.
javascript 메소드 오버로딩 기능이 없다.


장점
매개변수와 순서를 기억할 필요가 없다.
선택적인 매개 변수를 안전하게 생략할 수 있다.
읽기 쉽고 유지보수하기 편하다.
매개변수를 추가하거나 제거하기 편하다.

단점
매개변수의 이름을 기억해야 한다.
프로퍼티 이름은 압축되지 않는다.


파라메터가 많아지거나 선택적 파라메터가 많은 경우에 유용하다.

### 4. Namespace 패턴
네임 스페이스는 전역 변수의 개수를 줄여준다.
과도한 접두어 없이도 이름이 겹치지 않도록 해준다.
서드 파티 js 라이브러리와의 충돌 문제 해결.


네임 스페이스의 생성
 
var window.cafe = {}; 와 같이 네임스페이스로 사용할 프로퍼티를 그냥 할당하는 것은 위험하다.!


if(typeof window != "undefined" && typeof window.cafe == 'undefined') {
       window.cafe = {};
}
 
// 축약
var window.cafe = window.cafe || {};
 
위와 같이 이미 존재하는 프로퍼티를 덮어씌울 위험을 방지하기 위해 존재 여부를 확인하는 코드가 필요하다.
 그러나 반복적으로 정의하여야 한다.


```javascript
// utils
var cafe = cafe || {};

cafe.package = function(globals, sPackage) {
var parts = sPackage.split('.'),
parent = globals;
for(i = 0; i < parts.length; i++) {
if(typeof parent[parts[i]] === 'undefined') {
parent[parts[i]] = {};
}
parent = parent[parts[i]];
}
return parent;
};

cafe.package(this, 'com.naver.cafe');
```



의존 관계 선언

위와 같이 패키지를 이용해 모듈을 생성하고,

사용측에서는 그 모듈을 지역 변수에 담아 사용한다. 이 것을 통해 의존관계 선언 효과를 낼 수 있다.


의존 관계 선언

```javascript
StringUtils.js
cafe.package('org.apache.commons.lang');
// 스트링 유틸
org.apache.commons.lang.StringUtils = function() {
}

CollectionUtils.js
cafe.package('org.apache.commons.collections');
// 스트링 유틸
org.apache.commons.collections.CollectionUtils = function() {
}
```

의존 관계 선언

Client 1)

```javascript
cafe.Manage = $Class({
     // 의존 관계 선언
     stringUtils : org.apache.commons.lang.StringUtils,
     collectionUtils : org.apache.commons.lang.CollectionUtils,

     $init : function() {
          
     },
     ...
});

```

Client 2)

```javascript
var myFunction = function() {
     // 의존 관계 선언
     var stringUtils = org.apache.commons.lang.StringUtils,
          collectionUtils = org.apache.commons.lang.CollectionUtils;
}

```

얻을 수 있는 것

@required 주석을 사용하여 의존 관계를 기술하는데, 이와 같은 형태로 사용하면, 사용하는 function 의 의존성을 코드 상에서 볼수 있다.

첫머리에 의존관계가 선언되기 때문에 의존 관계 파악이 쉽다.

Namespace 의 경우 탐색 작업이 발생하는데, 지역 변수에 할당하여 사용하기 때문에 최초 한번만 탐색 작업이 이루어져 네임스페이스를 통해 사용하는 것보다 성능이 향상된다.

Js 압축 도구는 지역 변수는 손쉽게 축약하지만, 전역변수의 경우 변수명 변경이 위험하기 때문에 변경하지 않는다. 따라서 이와 같이 사용할 경우 압축률이 상승한다.

### 5. Module 패턴
코드를 구조화하고 정리하는 데 도움을 준다.

* 네임스페이스패턴
* 즉시 실행 함수
* 비공개 멤버와 특권멤버
* 의존 관계 선언

을 조합한것으로 매우 유용하다!


예제 코드2) pritvate 메소드 추가
```javascript
window.modules = window.modules || {};
modules.calculator = (function() {
var nValue = 0;
var getValue = function() {
return nValue;
}
var setValue = function(nNumber) {
nValue = nNumber;
}
return {
increase : function() {
setValue(getValue() + 1);
},
decrease : function() {
setValue(getValue() - 1);
},
plus : function(nNumber) {
setValue(getValue() + nNumber);
},
minus : function(nNumber) {
setValue(getValue() - nNumber);
},
print : function() {
console.log('>> ', getValue());
}
}
})();
modules.calculator.increase();
modules.calculator.print();
modules.calculator.decrease();
modules.calculator.print();
modules.calculator.plus(10);
modules.calculator.print();

```


Template

```javascript
var myNamespace = (function() {
     var myPrviateVar = 0;
     var myPrivateMethod = function() {
          // something do...
     };

	return {
          myPublicVar : 'foo',
          myPublicMethod = function() {
               myPrivateVar++;
               myPrivateMethod();
          }
     }
})();
```

### 3. 노출 패턴

비공개 메소드를 구현하면서, 공개 메소드로도 노출하는 것

비공개 멤버(private)
```javascript
var Foo = function() {
     this.name = 'Foo';
}
```
var oFoo = new Foo();
oFoo.name 으로 직접 접근하고, 수정할 수 있다.

다음과 같이 비공개 멤버를 만들고, 사용할 수 있다.
```javascript
var Foo = function() {
     var name = 'Foo';
     
     this.getName = function() {
          return name;
     }
}
```
비공개 메소드
공개 메소드를 만들 경우 이 메소드가 변경될 수 있다.

```javascript
var Foo = function() {
     var name = 'Foo';
     this.getName = function() {
          return name;
     }
}
```
이 코드에서 getName은 누군가에 의해 언제든지 변경될 수 있다.
메소드에 대한 보호가 필요하다.

```javascript
var Foo = function() {
    var name = 'Foo';
    var getName = function() {
    	return name;
    }
    return {
    	getName : getName,
    	getFullName : getName
    };
}

var oFoo = new Foo();
console.log(oFoo.getName());

oFoo.getName = function() {
	return 'hi';
}

console.log(oFoo.getName());
console.log(oFoo.getFullName());
```

공개된 getName 에 무슨일이 생겨도, 원래 정의된 비공개 메소드 getName 에는 영향이 가지 않는다.

### 1. Sandbox 패턴

namespace 패턴의 다음 단점을 해결한다.

* 애플리케이션 전역 객체가 단 하나의 전역 변수에 의존한다.
* 따라서 네임스페이스 패턴으로는 동일한 애플리케이션이나 라이브러리의 두가지 버전을 한 페이지에서 실행 시키는 것이 불가능하다.
* MYAPP.utilities.array 와 같이 점으로 연결된 긴 이름을 써야하고, 런타임에는 탐색 작업을 거쳐야한다. -> 변수에 할당해 쓰므로 이 탐색 과정을 없앨 수 있다.

YUI3 가 대표적이다
http://yuilibrary.com/yui/quick-start/

```javascript
function Sandbox() {
    var args = Array.prototype.slice.call(arguments),
    callback = args.pop(),
    modules = (args[0] && typeof args[0] === "string") ? args : args[0], i;
    if(!(this instanceof Sandbox)) {
    return new Sandbox(modules, callback);
    }
    if(!modules || modules === '*' || modules[0] === '*') {
    modules = [];
    for (i in Sandbox.modules) {
    if (Sandbox.modules.hasOwnProperty(i)) {
    modules.push(i);
    }
    }
    }
    for (i = 0; i < modules.length; i +=1) {
    Sandbox.modules[modules[i]](this);
    }
    callback(this);
    }
    Sandbox.modules = {};
    Sandbox.modules.Element = function(box) {
    box.E = jindo.$Element;
    }
    Sandbox.modules.Ajax = function(box) {
    box.Ax = jindo.$Ajax;
    }
    Sandbox(['Element', 'Ajax'], function(box) {
    var el = box.E('gnb').$value();
    console.log(el);
    });

```

```javascript
(function(global){
    var jindo = {};
    /*
     jindo source... 다른버전..
     */
    function Sandbox(){
        var args = Array.prototype.slice.call(arguments), callback = args.pop(), modules = (args[0] && typeof args[0] === "string") ? args : args[0], i;
        
        if (!(this instanceof Sandbox)) {
            return new Sandbox(modules, callback);
        }
        
        if (!modules || modules === '*' || modules[0] === '*') {
            modules = [];
            for (i in Sandbox.modules) {
                if (Sandbox.modules.hasOwnProperty(i)) {
                    modules.push(i);
                }
            }
        }
        
        for (i = 0; i < modules.length; i += 1) {
            Sandbox.modules[modules[i]](this);
        }
        
        callback(this);
    }
    
    Sandbox.modules = {};
    
    Sandbox.modules.Element = function(box){
        box.E = jindo.$Element;
    }
    
    Sandbox.modules.Ajax = function(box){
        box.Ax = jindo.$Ajax;
    }
    
    Sandbox(['Element', 'Ajax'], function(box){
        console.log(box);
        console.log(window.jindo.$Element === box.E);
        var el = box.E('gnb').$value();
        console.log(el);
    });
    
    return jindo;
})(this);


```


### 2. Chaining 패턴
메소드 체이닝 패턴이라고도 한다.
객체에 연쇄적으로 메서드를 호출할 수 있도록 하는 패턴이다.

의미있는 반환값이 없는 메서드인 경우 현재 작업 중인 객체 인스턴스인 this 를 반환하는 구현이다. (Java의 구현과 동일)

```javascript
var oCalculator = {
    nValue : 0,
    increase : function() {
        this.nValue++;
        return this;
    },
    decrease : function() {
        this.nValue--;
        return this;
    },
    print : function() {
    	console.log('>> ', this.nValue);
    }
};
oCalculator.increase().increase().increase().print();
```


장점
코드량 감소
코드가 간결해지고, 연속되는 하나의 문장처럼 읽을 수 있다.
UI 개발이 중첩된 엘리먼트에 반복적으로 작업을 수행하므로, Java 보다는 훨씬 유용하다.

단점
에러 발생 시에 어디서 에러가 발생했는 지 debuging 하기 힘들다.

### 1. Singleton 패턴
특정 클래스의 인스턴스를 하나만 유지한다.
javascript 에는 클래스가 없고, 모든 것이 객체이므로, 생성하면 그 자체가 싱글톤이다.

javascript 에서 singleton 은 굉장히 다양하게 구현할 수 있다.
최소 10개 이상의 다양한 방법들이 존재한다.

1.object 리터럴은 단 하나의 유일한 객체만 리턴한다.

```javascript
var mySingleton = {
    property1: "something",
    property2: "something else",
    method1:function(){
    	console.log('hello world');
    }
};
```

2. 확장해서 private member/method & public member/method 를 더하고 싶은 경우

```javascript
var mySingleton = (function(){
    // here are our private methods and variables
    var privateVariable = 'something private';
    function showPrivate(){
    	console.log( privateVariable );
    }
    // public variables and methods (which can access 
    // private variables and methods )
    return {
        publicMethod:function(){
            showPrivate();
        },
        publicVar:'the public can see this!'
    };
})();

var single = mySingleton();
single.publicMethod(); // logs 'something private'
console.log( single.publicVar ); // logs 'the public can see this!'

```

3. 필요할 때 초기화 하는 패턴

```javascript
var Singleton = (function(){
    var instantiated;
    function init (){
        // singleton here
        return {
            publicMethod: function(){
            	console.log( 'hello world' );
    		},
    		publicProperty: 'test'
    	};
    }
    return {
        getInstance: function(){
            if ( !instantiated ){
            	instantiated = init();
            }
            return instantiated;
        }
    };
})();
// calling public methods is then as easy as:
Singleton.getInstance().publicMethod();
```

4. 최종

```javascript
var SingletonTester = (function(){

    // args: an object containing arguments for the singleton
    function Singleton(args){
        // set args variable to args passed or empty object if none provided.
        var args = args || {};
        //set the name parameter
        this.name = 'SingletonTester';
        //set the value of pointX
        this.pointX = args.pointX || 6; //get parameter from arguments or set default
        //set the value of pointY
        this.pointY = args.pointY || 10;
        
    }
    
    // this is our instance holder
    var instance;
    
    // this is an emulation of static variables and methods
    var _static = {
        name: 'SingletonTester',
        // This is a method for getting an instance
        
        // It returns a singleton instance of a singleton object
        getInstance: function(args){
            if (instance === undefined) {
                instance = new Singleton(args);
            }
            return instance;
        }
    };
    return _static;
})();

var singletonTest = SingletonTester.getInstance({
    pointX: 5
});

console.log(singletonTest.pointX); // outputs 5 
```

### 2. Factory 패턴

객체를 생성하는 데 필요한 상세를 몰라도 생성 할 수 있게 한다.
비슷한 객체를 생성하는 반복 작업을 수행한다.
컴파일 타임에 구체적인 타입(클래스)을 모르고도 객체를 생성할 수 있게 해준다.

보통 static 메소드로 생성 메소드를 제공한다.
동적 언어인 Javascript 는 타입에 대한 제약이 없기 때문에 런타임에 객체 생성이 매우 쉽다.


```javascript
var Car = (function() {
    var Car = function ( model, year, miles ){
        this.model = model;
        this.year   = year;
        this.miles = miles;
    };

    return function ( model, year, miles ) {
        return new Car( model, year, miles );
    };
})();

var civic = Car( "Honda Civic", 2009, 20000 );
var mondeo = Car("Ford Mondeo", 2010, 5000 );
```

기본 내장 생성자 함수인 Object 도 factory 로 동작한다.
```javascript
Object().constructor === Object
Object(1).constructor === Number
Object('string').constructor === String
```

* 패턴을 써야 할 때
객체 생성에 필요한 작업이 매우 높은 수준의 복잡도를 가질 때
환경에 의존적인 다른 객체를 생성해야 할 때
같은 프로퍼티를 갖는 많은 수의 작은 객체를 생성하는 작업이 필요할 때

* 패턴을 쓰지 말아야 할 때
일반적으로 팩토리 패턴을 쓰지 않는 것이 더 좋다.
불필요하게 코드 복잡도를 높힌다.
때로, 테스트 코드를 실행하기 어렵게 만들 수 있다.


### 1. Iterator 패턴

객체안에 어떠한 구조로 데이터가 저장되어 있는 지 알 필요 없이 개별 요소에 쉽게 접근할 수 있도록 한다.

next() - 개별 요소에 순차적으로 접근
hasNext() - 남은 요소가 있는 지 확인


$A().forEach() - forEach() 메서드는 내부 배열의 모든 원소를 순회하면서 콜백 함수를 실행한다.

```javascript
var oA = $A([1, 2, 3]);

oA.forEach(function(value, index, array) {
	console.log('value : ', value);
});
```

```javascript
var ArrayIterator = function() {
    var arr = Array.prototype.slice.apply(arguments),
    length = arr.length,
    index = 0;
    
    return {
        next : function() {
        	return arr[index++];
    	},
    
    	hasNext : function() {
    		return index < length;
    	}
    };
};

var oArrayIter = new ArrayIterator(1, 2, 3, 4);

while(oArrayIter.hasNext()) {
	console.log(oArrayIter.next());
}
```

### 2. Command 패턴
커맨드 패턴의 핵심은 **명령어를 처리하는 부분을 객체로 캡슐화 함으로써 실제 내부 구현을 다른 객체들로 부터 분리**하는 것에 있다.

객체의 실제 메소드 수행(UI)과 구현(business logic)을 분리할 수 있다
이를 통해 실제 구현 클래스 변경을 용이하게 한다.
다양한 상황에 유용하게 활용될 수 있다.

유저 인터페이스를 만들 때
대부분의 command 객체는 execute or run 이라는 method 를 사용한다.

```javascript
var CafeManager = (function() {
    return {
        requestInfo : function(cluburl) {
        	return 'The information for ' + cluburl + '.cafe';
    	},
    	requestUrl : function(cluburl) {
    		return 'http://cafe.naver.com/' + cluburl;
    	}
    }
})();

CafeManager.execute = function(command) {
	return CafeManager[command.request](command.cluburl);
}

CafeManager.execute({request : 'requestInfo', cluburl : 'joonggonara'}); // "The information for joonggonara.cafe
CafeManager.execute({request : 'requestUrl', cluburl : 'joonggonara'}); // http://cafe.naver.com/joonggonara
```

바로 CafeManager.requestInfo('joonggonara') 와 같이 메소드를 직접 호출할 수도 있다.
하지만, 어떤 상황에서는 직접 호출하지 않도록 하는 것이 좋을 수 있다. 즉, 객체간의 dependency 를 증가시키기 원하지 않을 때 인데, 만약 manager 와 연관된 핵심 로직이 변경되었을 때 manager 를 통해 수행되는 모든 메소드를 변경해야한다.

객체간의 연결을 느슨하게 하는 OOP 사상에 위배된다..


```javascript
var CopyCommand = function() {
	console.log('copied..');
};

var CutCommand = function() {
	console.log('cuted..');
};

var PasteCommand = function() {
	console.log('pasted..');
};

var CommandManager = function(command) {
    this.command = command;
    this.execute();
}

CommandManager.prototype.execute = function() {
	this.command();
}

new CommandManager(CopyCommand);     // copied..
new CommandManager(CutCommand);       // cuted..

```

```javascript
// filter agent
Editor.filterAgent = Class({
	_filters : [],
	__init : function() {
	},
	// register filter to filtering agent, and return index
	register : function(filter) {
		this._filters.push(filter);
	},
	// unregister filter and
	unregister : function(filter) {
		this._filters = this._filters.reject(filter);
	},
	execute : function (sHTML, sEvent) {
		for (var i=0; i < this._filters.length; i++) {
			if (typeof this._filters[i]['on'+sEvent] != 'undefined') {
				try { sHTML = this._filters[i]['on'+sEvent](sHTML); } catch(e) {};
			}
		}

		return sHTML;
	}
});
```













