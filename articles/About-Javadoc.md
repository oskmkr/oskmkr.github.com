# About Javadoc

@author : 클래스나 인터페이스의 제작자 표시
@version : 버전정보
@return : 메소드가 void형이 아닌경우 return value type을 기술
@exception : 메소드가 발생 시킬수 있는 예외를 기술
@throws : @exception Tag와 동일
@deprecated : 다음버젼에서 폐기된 메소드를 알림
@param : 매개변수에 대한 설명(@param 변수 설명의 형태)
@serial : 기본적으로 직렬화 할 수 있는 클래스의 멤버를 설명
@see class_name#member &nbsp;: 클래스 , 인터페이스, 메소드, 생성자 혹은 URL에 대한 전후참조표시
@since : Tag를 가진 객체가 언제 추가 되었는지 명시
{@link class_name#member label} : 메소드나 필드의 상호 참조에 대한 링크를 표시

* @see의 경우 Javadoc의 See Also: 문장과 링크가 만들어지나, @link의 경우 주석내에 링크를 생성합니다.


Javadoc의 주석 작성법은 다음과 같습니다.

method 상단에 /** .. */ 주석을 추가하면, Javadoc의 대상이된다.
comment 는 반드시 /** 으로 시작해야한다. /* 은 Javadoc의 대상이 아니다.
method 설명은 html 형식으로 출력된다. 즉, 줄바꿈을 하려면 <br/> 태그를 사용해야한다.
@param, @return, @throws 는 method 에서 필수속성이다.
@throws는 사용자가 처리해야할 예외이다. 따라서 이 예외가 언제 발생하는지에 대해 반드시 설명이 필요하다.
@return 에서 반환타입에 대해서 기술할 필요가 없다.
interface가 존재한다면, 구현체에서는 주석을 생성할 필요가 없다.<br>
interface에서 정의된 method의 의도대로 구현을 한 것이므로, interface에서의 주석만으로 충분하다.<br>
단, interface 에 정의되어 있지 않은 구현체의 method 는 주석을 필요로 한다.
주석 작성시, 다른 클래스를 참조할 경우에는 {@link } 를 사용한다. <br>
이 것은 Javadoc에서 하이퍼링크를 생성한다.
주석 작성시, code를 기술할 경우엔, <pre> 태그를 사용한다.





보다 자세한 내용은 <a href="http://java.sun.com/j2se/javadoc/index.jsp">http://java.sun.com/j2se/javadoc/index.jsp</font></a>에서 확인할 수 있습니다.
