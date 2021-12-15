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
    result_p.src.innerHTML ="Cơm tấm ngô quyền" ;
    document.images['Anh'].src ='https://cdn.daynauan.info.vn/wp-content/uploads/2019/05/com-tam-la-mon-an-binh-dan.jpg';
    break;
    case '2':
    result_p.innerHTML = "Cơm gà";
        document.images['Anh'].src ='https://images.foody.vn/res/g22/211995/prof/s576x330/foody-upload-api-foody-mobile-15-jpg-181026103225.jpg';
    break;
    case '3':
    result_p.innerHTML = "Cơm chiên dương châu";
        document.images['Anh'].src ='https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg';
    break;
    case '4':
    result_p.innerHTML ="Cơm xèo";
        document.images['Anh'].src ='https://bizweb.dktcdn.net/thumb/1024x1024/100/021/974/products/354793-he-thong-09-cn-papaxot-xeo-xeo-chao-nong-thom-lung-vi-sot.jpg?v=1585225193300';
    break;
    case '5':
    result_p.innerHTML = "Bún bò kho";
        document.images['Anh'].src ='https://cdn.tgdd.vn/2020/07/CookProduct/dzgbd-1200x676.jpg';
    break;
    case '6':
    result_p.innerHTML = "Phở" ;
        document.images['Anh'].src ='https://phohuynhtram.com/wp-content/uploads/2018/07/phat-am-dung-tu-pho1.jpg';
    break;
    case '7':
    result_p.innerHTML = "Bánh canh";
        document.images['Anh'].src ='https://images.foody.vn/res/g13/124760/prof/s576x330/foody-mobile-t-2-jpg-278-635615825447522380.jpg';
    break;
    case '8':
    result_p.innerHTML = "Bánh cuốn";
        document.images['Anh'].src ='https://meta.vn/Data/image/2020/11/17/banh-cuon-1.jpg';
    break;
    case '9':
    result_p.innerHTML = "Hủ tiếu";
        document.images['Anh'].src ='https://znews-photo.zadn.vn/w660/Uploaded/jaroin/2017_08_03/1_3.jpg';
    break;
    case '10':
    result_p.innerHTML = "Lẩu";
        document.images['Anh'].src ='https://cdn.cet.edu.vn/wp-content/uploads/2018/03/hinh-anh-lau-thai-chua-cay.jpg';
    break;
  }
}

function main() {
  reset_board_div.addEventListener('click', () => game('1'));
}

main();
