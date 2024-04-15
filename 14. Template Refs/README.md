### 문제 1
#### Vue.js에서 v-for를 사용하여 여러 항목을 렌더링하고 각 항목에 대한 참조를 얻으려고 할 때, 어떤 방식으로 ref를 사용해야 합니다? Vue 3.2.25 이상 버전에서 새로 도입된 기능을 고려하세요.

```vue
A. 각 항목에 대해 고유한 ref 이름을 수동으로 할당합니다.

<template>
  <div v-for="(item, index) in items" :ref="'itemRef' + index">
    {{ item }}
  </div>
</template>
```

```vue
B. ref를 함수로 사용하여 각 항목의 참조를 수집합니다.

<template>
  <div v-for="item in items" :ref="collectItemRef">
    {{ item }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
const itemsRefs = ref([])
const collectItemRef = el => {
  if (el) itemsRefs.value.push(el)
}
</script>
```

```vue
C. ref에 배열을 사용하여 자동으로 모든 항목의 참조를 수집합니다.

<template>
  <div v-for="item in items" ref="itemsRefs">
    {{ item }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
const itemsRefs = ref([])
</script>
```

### 문제 2
#### Vue.js에서 컴포넌트가 마운트된 후에 특정 DOM 요소에 자동으로 포커스를 맞추려고 합니다. 아래 코드 중 올바르게 이를 구현한 코드는 무엇인가요?

```vue
A.

<script setup>
import { ref, onMounted } from 'vue'
const inputRef = ref(null)
onMounted(() => {
  inputRef.value.focus()
})
</script>

<template>
  <input ref="inputRef" />
</template>
```

```vue
B.

<script setup>
import { ref, onMounted } from 'vue'
const inputRef = ref(null)
onMounted(() => {
  this.inputRef.focus()
})
</script>

<template>
  <input ref="inputRef" />
</template>
```

```vue
C.

<script setup>
import { ref, onMounted } from 'vue'
const inputRef = ref()
onMounted(() => {
  inputRef.focus()
})
</script>

<template>
  <input ref="inputRef" />
</template>
```

### 문제 3
#### Vue.js에서 v-for와 함께 ref를 사용하여 여러 항목의 참조를 얻으려고 할 때, 어떤 접근 방식이 올바른가요?

```
A. 각 항목에 대해 고유한 ref 이름을 수동으로 할당합니다.
B. ref를 함수로 사용하여 각 항목의 참조를 수집합니다.
C. ref에 배열을 사용하여 자동으로 모든 항목의 참조를 수집합니다.
```

### 문제 4
#### Vue.js에서 부모 컴포넌트가 자식 컴포넌트의 인스턴스를 참조하기 위해 ref를 사용할 때, 자식 컴포넌트가 `<script setup>`을 사용하고 있으며 아무것도 노출시키지 않는 경우, 부모 컴포넌트가 접근할 수 있는 것은 무엇인가요?

```
A. 자식 컴포넌트의 모든 데이터와 메서드
B. 자식 컴포넌트의 setup() 함수에서 반환된 모든 데이터와 메서드
C. 아무것도 접근할 수 없음
```

### 문제 5 
#### Vue.js 애플리케이션에서 v-for를 사용하여 리스트를 렌더링하고 있습니다. 각 리스트 아이템에는 입력 필드가 포함되어 있으며, 특정 조건이 충족될 때 특정 아이템의 입력 필드에 포커스를 맞추고 싶습니다. 이를 위해 ref와 함께 Composition API를 사용하는 방법을 설명하세요.

### 문제 6
#### 당신은 Vue.js로 구성된 대시보드 애플리케이션을 개발하고 있으며, 페이지 로드 시 사용자의 주의를 끌기 위해 특정 섹션으로 자동 스크롤하고자 합니다. 이 섹션은 컴포넌트로 분리되어 있으며, 이 컴포넌트의 인스턴스에 직접 접근해야 합니다. Composition API와 ref 속성을 사용하여 이를 구현하는 방법을 설명하세요.

### 문제 7
#### Vue.js 프로젝트에서 v-for를 사용하여 생성된 여러 버튼에 대해, 각 버튼이 클릭될 때 해당 버튼의 텍스트를 콘솔에 출력하려고 합니다. 이를 위해 각 버튼에 ref를 사용하고자 합니다. 이 상황에서 ref와 이벤트 핸들러를 사용하여 이 기능을 구현하는 방법에 대해 설명하세요.

### 문제 8
#### Vue.js에서 자식 컴포넌트에 ref를 사용하여 부모 컴포넌트에서 접근하려고 할 때, 자식 컴포넌트가 `<script setup>`을 사용하고 있지만 부모 컴포넌트가 자식 컴포넌트의 특정 메서드를 호출해야 하는 경우, 어떻게 해야 합니까? 이 상황을 해결하는 방법을 설명하세요.

<details>
  <summary>정답 보기</summary>

### 문제 1
#### 정답: A
#### 해설
* `Composition API`를 사용할 때, `ref()` 함수로 생성된 참조 변수에 `.value` 속성을 통해 접근해야 합니다. 따라서 **A**가 올바르게 구현된 코드입니다.
  
### 문제 2
#### 정답: C
#### 해설
`Vue 3.2.25` 버전 이상에서는 `v-for` 내부에서 `ref`를 사용할 때 배열을 자동으로 관리하는 기능을 도입했습니다. 이 방법을 사용하면 `v-for`를 통해 렌더링된 각 항목의 참조를 자동으로 `itemsRefs` 배열에 수집할 수 있습니다. 이는 코드를 더 간결하고 관리하기 쉽게 만들어 줍니다. 옵션 A와 B는 작동할 수 있는 방법이지만, `Vue 3.2.25` 이상에서는 옵션 **C**가 가장 간결하고 효율적인 접근 방식입니다.

### 문제 3
#### 정답: C
#### 해설
`Vue 3.2.25` 버전 이상에서 `v-for` 내부에서 `ref`를 사용할 때, `ref` 속성에 배열을 사용하면 Vue가 자동으로 모든 항목의 참조를 해당 배열에 수집합니다. 따라서 C가 가장 효율적이고 간단한 방법입니다.

### 문제 4
#### 정답: C
#### 해설
`<script setup>`을 사용하는 컴포넌트는 기본적으로 비공개입니다. 따라서, 자식 컴포넌트가 `defineExpose`를 사용하여 명시적으로 무언가를 노출시키지 않는 한, 부모 컴포넌트는 자식 컴포넌트의 어떠한 데이터나 메서드에도 접근할 수 없습니다.

### 문제 5 답안 예시 및 해설
#### 답안 예시:
v-for로 렌더링된 각 아이템의 입력 필드에 직접 접근하기 위해, 우리는 ref를 함수로 사용할 수 있습니다. 이 함수는 각 아이템이 렌더링될 때 호출되며, 각 입력 필드의 참조를 배열에 저장할 수 있습니다. 특정 조건이 충족될 때, 해당 입력 필드의 참조를 사용하여 .focus() 메서드를 호출할 수 있습니다.

```vue
<script setup>
import { ref, onMounted } from 'vue'

const items = ref([...]) // 리스트 아이템들
const inputRefs = ref([])

const setInputRef = (el, index) => {
  if (el) inputRefs.value[index] = el
}

onMounted(() => {
  // 특정 조건에 따라 특정 입력 필드에 포커스를 맞춤
  if (items.value.length > 0) {
    inputRefs.value[0].focus() // 예시 조건
  }
})
</script>

<template>
  <div v-for="(item, index) in items" :key="item.id">
    <input :ref="(el) => setInputRef(el, index)" />
  </div>
</template>
```

#### 해설:
이 접근 방식에서는 v-for를 사용하여 렌더링된 각 입력 필드에 고유한 참조를 설정하기 위해 함수를 ref 속성에 바인딩합니다. 이 함수는 해당 입력 필드의 DOM 요소와 그 인덱스를 인자로 받아, 전역 inputRefs 배열에 저장합니다. 마운트 후에는 이 배열을 사용하여 특정 입력 필드에 포커스를 맞출 수 있습니다.

### 문제 6 답안 예시 및 해설
#### 답안 예시:
특정 섹션으로 자동 스크롤하기 위해서는 해당 섹션의 컴포넌트 인스턴스에 ref를 설정하고, onMounted 라이프사이클 훅에서 해당 섹션으로 스크롤하는 로직을 구현합니다.

```vue
<script setup>
import { ref, onMounted } from 'vue'
import MySection from './MySection.vue'

const sectionRef = ref(null)

onMounted(() => {
  sectionRef.value.scrollIntoView({ behavior: 'smooth' })
})
</script>

<template>
  <MySection ref="sectionRef" />
</template>
```

#### 해설:
이 예시에서는 `MySection` 컴포넌트에 `ref="sectionRef"`를 사용하여 참조를 설정합니다. 컴포넌트가 마운트된 후`onMounted`, `scrollIntoView` 메서드를 사용하여 해당 섹션으로 스크롤합니다. 이 방법은 페이지 로드 시 사용자의 주의를 특정 섹션으로 유도하고자 할 때 유용합니다.

### 문제 7 답안 예시 및 해설
#### 답안 예시:

`v-for`와 함께 버튼을 렌더링할 때, 각 버튼의 클릭 이벤트 핸들러 내에서 클릭된 버튼의 텍스트를 콘솔에 출력할 수 있습니다. 이 경우, `ref`는 필요하지 않을 수 있습니다.

```vue
<script setup>
import { ref } from 'vue'

const buttons = ref(['Button 1', 'Button 2', 'Button 3'])

const handleClick = (buttonText) => {
  console.log(buttonText)
}
</script>

<template>
  <div v-for="buttonText in buttons" :key="buttonText">
    <button @click="() => handleClick(buttonText)">{{ buttonText }}</button>
  </div>
</template>
```

#### 해설:
이 접근 방식에서는 각 버튼의 텍스트를 직접 이벤트 핸들러로 전달하여, 클릭 이벤트 발생 시 해당 텍스트를 콘솔에 출력합니다. 따라서, 각 버튼에 대한 참조를 저장할 필요가 없으므로 ref를 사용할 필요가 없습니다.

### 문제 8 답안 예시 및 해설
#### 답안 예시:
자식 컴포넌트가 `<script setup>`을 사용하고 있고, 특정 메서드를 부모 컴포넌트에서 호출하고자 한다면, 자식 컴포넌트에서 `defineExpose`를 사용하여 해당 메서드를 노출시켜야 합니다.
* 자식 컴포넌트:
```vue
<script setup>
import { defineExpose } from 'vue'

const someMethod = () => {
  console.log('Doing something important...')
}

defineExpose({ someMethod })
</script>
```
* 부모 컴포넌트:

```vue
<script setup>
import { ref, onMounted } from 'vue'
import ChildComponent from './ChildComponent.vue'

const childRef = ref(null)

onMounted(() => {
  childRef.value.someMethod()
})
</script>

<template>
  <ChildComponent ref="childRef" />
</template>
```
#### 해설:
이 방법을 사용하면, 자식 컴포넌트가 `<script setup>`을 사용하더라도, `defineExpose`를 통해 부모 컴포넌트에 특정 프로퍼티나 메서드를 노출시킬 수 있습니다. 그 결과, 부모 컴포넌트는 ref를 통해 자식 컴포넌트의 인스턴스에 접근하고, 노출된 메서드를 호출할 수 있습니다.

</details>
