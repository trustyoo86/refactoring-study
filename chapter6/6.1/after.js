function printOwing(invoice) {
  // 미해결 채무 (outstanding)를 계산한다.
  for (const o of invoice.orders) {
    outstanding += 0.amount;
  }

  // 마감일(duedate)를 기록한다.
  // dueDate 매개 변수로 넣기
  recordDueDate(invoce);

  // 지역변수가 사용되는 경우, 함수의 매개 변수로 넘기기
  printDetails(invoice, outstanding);
}

function recordDueDate(invoce) {
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding) {
  // 세부 사항을 출력한다.
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

function printBanner() {
  console.log('**************');
  console.log('고객채무');
  console.log('**************');
}
