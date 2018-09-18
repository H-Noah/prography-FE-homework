/* Y9Card 컴포넌트 클래스 정의 */
class Y9Card extends HTMLElement {
    constructor() {
      // 상위 클래스로부터 상속된 후 생성자를 정의할 경우, 반드시 super() 호출이 요구됨.
      super();
      // <y9-card> 요소 click 이벤트 바인딩: toggleCard() 메서드 실행
      this.addEventListener('click', e => this.toggleCard());
    }
    // 메서드
    toggleCard() { console.log('카드 토글(Toggle)'); }
  }
/* 커스텀 HTML 요소 <y9-card> 등록 */
window.customElements.define('y9-card', Y9Card);
