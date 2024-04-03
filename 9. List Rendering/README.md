## 개념 확인

### 문제 1: Vue에서 v-for 지시문을 사용할 때, 어떤 구문을 사용해야 하나요?
```js
A. v-for="item in items"
B. v-for="items -> item"
C. v-for="items @ item"
D. v-for="item = items"
```

### 문제 2: v-for 지시문 내에서 인덱스를 사용하기 위한 올바른 구문은 무엇인가요?
```js
A. v-for="item, index in items"
B. v-for="(item) in (index) of items"
C. v-for="(item, index) in items"
D. v-for="index: item in items"
```

### 문제 3: v-for를 사용하여 배열의 각 요소를 리스트로 렌더링할 때, 각 요소에 고유한 key 값을 제공하는 이유는 무엇인가요?

### 문제 4: v-for 지시문에서, 배열의 각 요소에 대한 별칭만 제공하는 대신에, 요소의 속성을 직접 분해하여 사용할 수 있는 Vue의 기능은 무엇인가요?

### 문제: 5 Vue의 v-for 지시문을 사용하여 객체의 속성을 반복 처리할 때, 속성의 값만 출력하고 싶다면 어떻게 해야 하나요?
```html
A. <li v-for="value in myObject">{{ value }}</li>
B. <li v-for="key in myObject">{{ key }}</li>
C. <li v-for="(value, key) in myObject">{{ key }}</li>
D. <li v-for="(key, value) in myObject">{{ value }}</li>
```

### 문제: 6 객체의 속성 이름(키)과 값을 동시에 출력하려면 v-for 지시문에서 어떤 구문을 사용해야 하나요?
```html
A. <li v-for="key in myObject">{{ key }}</li>
B. <li v-for="value in myObject">{{ value }}</li>
C. <li v-for="(value, key) in myObject">{{ key }}: {{ value }}</li>
D. <li v-for="(key, value) in myObject">{{ key }}: {{ value }}</li>
```

### 문제: 7 v-for를 사용하여 객체의 속성을 반복할 때, 속성의 값, 이름(키), 그리고 인덱스까지 모두 출력하려면 어떻게 해야 하나요?
```html
A. <li v-for="value in myObject">{{ value }}</li>
B. <li v-for="(value, key) in myObject">{{ key }}: {{ value }}</li>
C. <li v-for="(value, key, index) in myObject">{{ index }}. {{ key }}: {{ value }}</li>
D. <li v-for="(key, value, index) in myObject">{{ index }}. {{ key }}: {{ value }}</li>
```

### 문제: 8 Vue의 v-for 지시문을 사용하여 범위 기반 반복을 수행할 때, 1부터 10까지의 숫자를 출력하려면 어떤 구문을 사용해야 하나요?
```html
A. <span v-for="n in 10">{{ n }}</span>
B. <span v-for="n from 1 to 10">{{ n }}</span>
C. <span v-for="n = 1; n <= 10; n++">{{ n }}</span>
D. <span v-for="n in [1...10]">{{ n }}</span>
```

### 문제: 9 Vue에서 `<template>` 태그와 v-for 지시문을 함께 사용하여 여러 요소를 한 번에 렌더링하려면 어떻게 해야 하나요?
```html
A. <ul v-for="item in items"><template><li>{{ item.msg }}</li><li class="divider" role="presentation"></li></template></ul>
B. <template v-for="item in items"><ul><li>{{ item.msg }}</li><li class="divider" role="presentation"></li></ul></template>
C. <ul><template v-for="item in items"><li>{{ item.msg }}</li><li class="divider" role="presentation"></li></template></ul>
D. <ul><li v-for="item in items"><template>{{ item.msg }}</template><template class="divider" role="presentation"></template></li></ul>
```

### 문제: 10 Vue에서 v-if와 v-for를 동일한 요소에 사용하는 것에 대한 설명으로 올바른 것은 무엇인가요?
```
A. v-if와 v-for를 동일한 요소에 사용하는 것은 권장되며, v-for가 v-if보다 높은 우선순위를 가진다.
B. v-if와 v-for를 동일한 요소에 사용할 때, v-if 조건은 v-for의 스코프 내 변수에 접근할 수 없어 오류가 발생한다.
C. v-if와 v-for를 동일한 요소에 사용하는 것이 권장되지 않으며, 두 지시문이 동일한 노드에 존재할 때 v-if가 더 높은 우선순위를 가진다.
D. v-if와 v-for를 동일한 요소에 사용할 때는 항상 v-if가 먼저 처리되고 그 다음에 v-for가 처리된다.
```

### 문제: 11 v-if 조건이 v-for의 스코프 내 변수에 접근할 수 없는 문제를 해결하기 위한 올바른 방법은 무엇인가요?
```html
A. <li v-for="todo in todos" v-if="!todo.isComplete">{{ todo.name }}</li>
B. <template v-for="todo in todos"><li v-if="!todo.isComplete">{{ todo.name }}</li></template>
C. <li v-if="!todo.isComplete" v-for="todo in todos">{{ todo.name }}</li>
D. <div v-for="todo in todos">{{ todo.name }}<span v-if="!todo.isComplete"></span></div>
```

### 문제: 12 Vue에서 v-for를 사용하여 리스트를 렌더링할 때, 각 요소의 고유성을 추적하기 위해 어떤 속성을 사용해야 하나요?
```
A. id
B. key
C. name
D. index
```

### 문제: 13 v-for와 함께 사용되는 key 속성에 대한 설명으로 올바른 것은 무엇인가요?
```
A. key는 반드시 객체여야 한다.
B. key는 반복되는 DOM 내용이 복잡하거나 컴포넌트, 상태를 가진 DOM 요소를 포함하지 않을 경우에만 필요하다.
C. key 속성을 사용하여, Vue는 각 노드의 정체성을 추적하고, 요소를 효율적으로 재사용하며, 필요에 따라 재정렬할 수 있다.
D. key 속성은 v-for와 함께 사용될 때, 기본적으로 인덱스 값을 사용한다.
```

### 문제: 14 `<template>` 태그와 v-for를 함께 사용할 때, key 속성을 어디에 배치해야 하나요?
```html
A. <template v-for="item in items" :key="item.id"><div>{{ item.content }}</div></template>
B. <template v-for="item in items"><div :key="item.id">{{ item.content }}</div></template>
C. <div v-for="item in items"><template :key="item.id">{{ item.content }}</template></div>
D. <template :key="item.id" v-for="item in items"><div>{{ item.content }}</div></template>
```

### 문제: 15 Vue에서 반응형 배열의 어떤 변화를 감지할 수 있는지 설명하는 데 적합한 방법은 무엇인가요?
```
A. 오직 배열에 새로운 요소를 추가할 때만 변화를 감지할 수 있다.
B. 배열의 길이 변경을 포함한 모든 변화를 자동으로 감지할 수 있다.
C. push(), pop(), shift(), unshift(), splice(), sort(), reverse() 같은 변이 메소드를 사용할 때 변화를 감지할 수 있다.
D. 배열 내의 객체 속성 변경을 감지할 수 있다.
```

### 문제: 16 Vue에서 배열을 변경하지 않고 새 배열을 반환하는 메소드를 사용한 후, 어떻게 Vue에게 업데이트를 알릴 수 있나요?
```
A. 배열에 직접 새 값을 할당하지 않고 메소드를 호출하기만 하면 된다.
B. Vue.set() 메소드를 사용하여 배열을 직접 업데이트해야 한다.
C. 변화를 감지하지 못하는 메소드를 사용한 후, 변경된 새 배열로 기존 배열을 대체해야 한다.
D. 배열의 각 요소에 대해 개별적으로 업데이트 메소드를 호출해야 한다.
```

### 문제: 17 Vue에서 변이 메소드를 사용하여 배열을 변경한 경우와 비변이 메소드를 사용한 후 새 배열로 기존 배열을 대체한 경우, Vue가 DOM을 어떻게 처리하는지 설명하는 것은?
```
A. 변이 메소드와 비변이 메소드 모두 사용 시, Vue는 항상 전체 DOM을 다시 렌더링한다.
B. 비변이 메소드를 사용한 후 새 배열로 기존 배열을 대체하는 경우, Vue는 기존 DOM을 버리고 전체 리스트를 다시 렌더링한다.
C. 변이 메소드를 사용하면 Vue는 필요한 업데이트만을 트리거하고, 비변이 메소드 후에 새 배열로 대체하는 경우, Vue는 돔 요소 재사용을 최대화하기 위한 스마트 휴리스틱을 구현한다.
D. 변이 메소드를 사용하는 경우, Vue는 변경 사항을 감지하지 못하고 업데이트를 트리거하지 않는다.
```

### 문제: 18 Vue에서 원본 데이터를 변경하지 않고 배열의 필터링된 버전을 표시하려면 어떤 Vue 속성을 사용해야 하나요?
```
A. methods
B. data
C. computed
D. watch
```

### 문제: 19 필터링된 결과를 표시하기 위해 계산된 속성을 사용할 수 없는 경우 (예: 중첩된 v-for 루프 내부), Vue에서 어떤 대안을 사용할 수 있나요?
```
A. 직접적인 DOM 조작
B. methods
C. data 속성 재할당
D. watch 속성
```

### 문제: 20 계산된 속성 내에서 배열을 정렬하거나 뒤집을 때 주의해야 할 점은 무엇인가요?
```
A. 원본 배열을 직접 변경하는 reverse()와 sort() 메소드를 사용하면 안 된다.
B. 계산된 속성에서는 배열 메소드를 사용할 수 없다.
C. 모든 배열 메소드는 계산된 속성에서 안전하게 사용될 수 있다.
D. reverse()와 sort() 메소드만 계산된 속성에서 사용할 수 있다.
```

<details>
  <summary> 정답 확인 </summary>
  
### 문제 1 답: A.
* `v-for="item in items"`

### 문제 2 답:C.
* v-for="(item, index) in items"

### 문제 3 답
* `v-for`를 사용하여 리스트를 렌더링할 때, 각 요소에 고유한 key 값을 제공하는 것은 Vue가 DOM 요소를 효율적으로 재사용하고, 요소의 순서가 변경되었을 때 기존 요소를 정확하게 재정렬할 수 있도록 하기 위함입니다. 이를 통해 성능이 향상되고, 컴포넌트 상태 또는 임시 DOM 상태의 유지 관리가 용이해집니다.

### 문제 4 답
* `v-for` 지시문에서 배열의 각 요소에 대한 별칭을 제공하는 대신에, Vue에서는 객체 분해(destructuring) 문법을 사용하여 요소의 속성에 직접 접근할 수 있습니다. 이를 통해 코드의 가독성을 높이고, 필요한 속성만을 선택적으로 사용할 수 있습니다.

### 문제 5 답: A.
* `<li v-for="value in myObject">{{ value }}</li>`

### 문제 6 답: C.
* `<li v-for="(value, key) in myObject">{{ key }}: {{ value }}</li>`

### 문제 7 답: C.
* `<li v-for="(value, key, index) in myObject">{{ index }}. {{ key }}: {{ value }}</li>`

### 문제 8 답: A.
* `<span v-for="n in 10">{{ n }}</span>`

### 문제 9 답: C.
`<ul><template v-for="item in items"><li>{{ item.msg }}</li><li class="divider" role="presentation"></li></template></ul>`

### 문제 10 답: C
* `v-if`와 `v-for`를 동일한 요소에 사용하는 것이 권장되지 않으며, 두 지시문이 동일한 노드에 존재할 때 `v-if`가 더 높은 우선순위를 가진다.

### 문제 11 답: B.
* `<template v-for="todo in todos"><li v-if="!todo.isComplete">{{ todo.name }}</li></template>`

### 문제 12 답:B.
* `key`

### 문제 13 답:C.
* `key` 속성을 사용하여, Vue는 각 노드의 정체성을 추적하고, 요소를 효율적으로 재사용하며, 필요에 따라 재정렬할 수 있다.

### 문제 14 답: A.
* `<template v-for="item in items" :key="item.id"><div>{{ item.content }}</div></template>`

### 문제 15 답: C.
* push(), pop(), shift(), unshift(), splice(), sort(), reverse() 같은 변이 메소드를 사용할 때 변화를 감지할 수 있다.

### 문제 16 답: C.
* 변화를 감지하지 못하는 메소드를 사용한 후, 변경된 새 배열로 기존 배열을 대체해야 한다.

* 참조
  * 배열의 경우, Vue는 배열의 변경을 감지하기 위해 일부 내장 메서드(예: push, pop, shift, unshift, splice, sort, reverse)를 감싸서 사용
  * 배열에 대한 변경사항을 감지하지 못하는 메서드(예: filter, concat, slice)를 사용할 때는 다른 접근 방법이 필요

### 문제 17 답: C.
* 변이 메소드를 사용하면 Vue는 필요한 업데이트만을 트리거하고, 비변이 메소드 후에 새 배열로 대체하는 경우, Vue는 돔 요소 재사용을 최대화하기 위한 스마트 휴리스틱을 구현한다.

### 문제 18 답: C.
* `computed`

### 문제 19 답: B.
* `methods`

### 문제 20 답: A.
* 원본 배열을 직접 변경하는 `reverse()`와 `sort()` 메소드를 사용하면 안 된다.
</details>
