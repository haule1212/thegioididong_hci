
function getBotResponse(input) {
    //Chatbot kịch bản // Lấy dữ liệu nhập vào của người dùng(input), hệ thống hiểu và phản hồi lại dựa trên từ khóa Key-word đó.
    if(input =="Xem thông tin"){
        return "Vui lòng chọn sản phẩm muốn xem thông tin: <br>1. iphone 12 <br> 2. iphone 13 <br> 3. iphone 14";                                                                                                                                     
    } else if (input == "1") {
        return "Tên sản phẩm: iphone 12<br>Giá: 16.490.000₫<br> Màn hình: OLED, 6.1', Super Retina XDR <br> Hệ điều hành: iOS 15 <br> Camera sau: 2 camera 12 MP <br> Camera trước:12 MP <br> Chip: Apple A14 Bionic <br>RAM: 4GB <br>Dung lượng lưu trữ:64 GB<br>SIM: 1 Nano SIM & 1 eSIM,Hỗ trợ 5G<br>Pin, Sạc:2815 mAh, 20 W ";
    } else if (input == "2") {
        return "Tên sản phẩm: iphone 13<br>Giá : 20.090.000₫<br>Màn hình: OLED, 6.1', Super Retina XDR <br> Hệ điều hành: iOS 15 <br> Camera sau: 2 camera 12 MP <br> Camera trước:12 MP <br> Chip: Apple A15 Bionic <br>RAM: 4GB <br>Dung lượng lưu trữ:128 GB<br>SIM: 1 Nano SIM & 1 eSIM,Hỗ trợ 5G<br>Pin, Sạc:3240 mAh, 20 W ";
    } else if (input == "3") {
        return "Tên sản phẩm: iphone 14<br>Giá : 23.490.000₫<br>Màn hình: OLED, 6.1', Super Retina XDR <br> Hệ điều hành: iOS 16 <br> Camera sau: 2 camera 12 MP <br> Camera trước:12 MP <br> Chip: Apple A14 Bionic <br>RAM: 6GB <br>Dung lượng lưu trữ:128 GB<br>SIM: 1 Nano SIM & 1 eSIM,Hỗ trợ 5G<br>Pin, Sạc:3279 mAh, 20 W ";
    } 
   
    if(input =="Đặt hàng"){
        return "Vui lòng chọn sản phẩm muốn muốn đặt : <br>(iphone 12) <br> (iphone 13) <br> (iphone 14)";                                                                                                                                     
    } else if (input == "iphone 12") {
        return "Iphone 12 có giá là: 16.490.000₫ Chúng tôi cần bạn cung cấp các thông tin sau: Họ và tên, Số điện thoại, Địa chỉ.";
    } else if (input == "iphone 13") {
        return "Iphone 13 có giá là: 20.090.000₫ Chúng tôi cần bạn cung cấp các thông tin sau: Họ và tên, Số điện thoại, Địa chỉ.";
    } else if (input == "iphone 14") {
        return "Iphone 14 có giá là: 23.490.000₫ Chúng tôi cần bạn cung cấp các thông tin sau: Họ và tên, Số điện thoại, Địa chỉ.";
    }

    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Cảm ơn bạn đã mua hàng của chúng tôi<br>Đơn hàng của bạn sẽ được giao trong 1-2 ngày tới. ";
    }
}