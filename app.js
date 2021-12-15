const result_p = document.querySelector(".result > p");
const reset_board_div = document.getElementById('Reset');
function Choice() {
  const Choices = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const randomNumber = Math.floor(Math.random() * 10);
  return Choices[randomNumber];
}

function game(b) {
  const c = Choice();
  switch (c) {
    case '1':
    result_p.innerHTML ="Cơm tấm ngô quyền" ;
    break;
    case '2':
    result_p.innerHTML = "Cơm gà";
    break;
    case '3':
    result_p.innerHTML = "Cơm chiên dương châu";
    break;
    case '4':
    result_p.innerHTML ="Cơm xèo";
    break;
    case '5':
    result_p.innerHTML = "Bún bò kho";
    break;
    case '6':
    result_p.innerHTML = "Phở" ;
    break;
    case '7':
    result_p.innerHTML = "Bánh canh";
    break;
    case '8':
    result_p.innerHTML = "Bánh cuốn";
    break;
    case '9':
    result_p.innerHTML = "Hủ tiếu";
    break;
    case '10':
    result_p.innerHTML = "Lẩu";
    break;
  }
}

function main() {
  reset_board_div.addEventListener('click', () => game('1'));
}

main();
