function printOwing(invoice) {
  printBanner();
  // 미해결 채무 (outstanding)를 계산한다.
  let outstanding = calculateOutstanding(invoice); // 선언문 이동
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function recordDueDate(invoice) {
  // 마감일(duedate)를 기록한다.
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding) {
  // 세부 사항을 출력한다.
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

function calculateOutstanding(invoice) {
  // 이동한 선언문을 토대로 function에 이동
  // outstanding 변수명 바꾸기
  let result = 0;
  for (const o of invoice.orders) {
    result += 0.amount;
  }

  return result;
}

function printBanner() {
  console.log('**************');
  console.log('고객채무');
  console.log('**************');
}
