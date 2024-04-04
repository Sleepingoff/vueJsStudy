## 10. Event Handling
* 링크: https://vuejs.org/guide/essentials/event-handling.html

### 문제 1: Vue에서 DOM 이벤트를 감지하고 이벤트가 발생했을 때 JavaScript 코드를 실행하는 데 사용되는 지시문은 무엇인가요?
### 문제 2: 인라인 핸들러에서 네이티브 DOM 이벤트 객체에 접근하는 특수 변수의 이름은 무엇인가요?
### 문제 3: .prevent 이벤트 수정자의 주요 기능은 무엇인가요?
### 문제 4: Vue에서 @keyup.enter="submit"과 같이 사용되는 키 수정자는 어떤 동작을 할 때 submit 메소드를 호출하도록 지시하는가요?
### 문제 5: Vue에서 이벤트 핸들러를 정의할 때 사용할 수 있는 방법으로 올바르지 않은 것은?
```
A. Inline Handlers
B. Method Handlers
C. Event Modifiers
D. Data Binders
```
### 문제 6: 다음 중 이벤트를 한 번만 처리하고자 할 때 사용하는 이벤트 수정자는 무엇인가요?
```
A. .once
B. .stop
C. .prevent
D. .capture
```
### 문제 7: 특정 마우스 버튼에 의해 트리거된 이벤트를 감지하기 위해 사용하는 수정자들 중 올바른 것을 모두 고르세요.
```
A. .click
B. .right
C. .middle
D. .left
```
### 문제 8: 메소드를 인라인 핸들러에서 호출할 때 인자를 전달하는 올바른 방법은?
```
A. <button @click="say">Say hello</button>
B. <button @click="say('hello')">Say hello</button>
C. <button @click="say.hello">Say hello</button>
D. <button @click="say{'hello'}">Say hello</button>
```

<details>
    <summary>정답 보기</summary>

### 문제 1 답: v-on 지시문 또는 @ 기호. 해설: Vue에서는 v-on 지시문 또는 그 축약형인 @ 기호를 사용하여 DOM 이벤트를 감지하고, 해당 이벤트가 발생할 때 지정된 JavaScript 코드를 실행합니다.

### 문제 2 답: $event. 해설: $event는 Vue의 인라인 이벤트 핸들러 내에서 네이티브 DOM 이벤트 객체에 직접 접근할 수 있게 해주는 특수 변수입니다.

### 문제 3 답: 이벤트의 기본 동작을 방지한다. 해설: .prevent 수정자는 해당 이벤트의 기본 동작, 예를 들어 링크의 기본 탐색 동작이나 폼 제출을 방지하는 데 사용됩니다.

### 문제 4 답: 엔터 키를 눌렀을 때. 해설: @keyup.enter는 사용자가 엔터 키를 눌렀을 때 지정된 메소드(submit)를 호출하도록 지시합니다.

### 문제 5 답: D.Data Binders. 
* 해설: Data Binders는 데이터를 DOM 요소에 바인딩하는 데 사용되는 개념이며, 이벤트 핸들링과는 관련이 없습니다.

### 문제 6 답: A. .once. 
* 해설: .once 수정자는 이벤트를 단 한 번만 처리하고 그 후에는 더 이상 리스너를 실행하지 않는 데 사용됩니다.

### 문제 7 답: B. .right, C. .middle, D. .left. 
* 해설: .left, .right, .middle은 각각 마우스의 좌측 버튼, 우측 버튼, 중간 버튼에 의해 트리거된 이벤트를 감지하기 위해 사용됩니다.

### 문제 8 답: B. <button @click="say('hello')">Say hello</button>. 
* 해설: 인라인 핸들러에서 메소드를 호출하고 인자를 전달할 때는 메소드 이름 뒤에 괄호를 사용하고, 괄호 안에 전달할 인자를 넣습니다.

</details>

