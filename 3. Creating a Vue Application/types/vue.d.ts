declare module "vue" {
  export function createApp(...args: any[]): any;
  export function ref<T>(value: T);
  // 기타 필요한 Vue 함수 및 객체 타입 선언
}
