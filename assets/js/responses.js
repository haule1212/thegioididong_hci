
function getBotResponse(input) {
    //rock paper scissors
    if(input =="Bắt đầu"){
        return "Đây là danh sách các địa điểm du lịch đang được công ty ưu đãi giảm giá. <br>1. Quy Nhơn Tour <br> 2. Phú Yên Tour <br> 3. Resort nghỉ dưỡng";                                                                                                                                     
    } else if (input == "1") {
        return "Quy Nhơn tour chuyến du lịch 3 ngày 2 đêm, đang được giảm giá tất cả các loại dịch vụ có mức giá vô cùng ưu đãi 1 triệu 500 nghìn/1 người. <br>(Đặt phòng ngay)<br>(Tour khác)";
    } else if (input == "2") {
        return "Phú Yên tour chuyến du lịch 3 ngày 2 đêm, đang được giảm giá tất cả các loại dịch vụ có mức giá vô cùng ưu đãi 1 triệu 800 nghìn/1 người. <br>(Đặt phòng ngay)<br>(Tour khác)";
    } else if (input == "3") {
        return "Resort nghỉ dưỡng chuyến du lịch 3 ngày 2 đêm, Resort gồm 4 tầng, thích hợp cho các bạn trẻ muốn tận hưởng các giác thư giãn và thoải mái với gia đình và bạn bè. Giá 1 triệu đồng 1 ngày, bao gồm ăn uống và sử dụng các dịch vụ .<br>(Đặt phòng ngay)<br>(Tour khác)";
    } else if (input == "Đặt phòng ngay") {
        return "Chúng tôi cần bạn cung cấp các thông tin sau: Họ và tên, Số điện thoại, Số lượng người tham gia";
    }else if (input == "Tour khác"){
        return "Đây là danh sách các địa điểm du lịch đang được công ty ưu đãi giảm giá. <br>1. Quy Nhơn Tour <br> 2. Phú Yên Tour <br> 3. Resort nghỉ dưỡng";                                                                                                                                  
    }
   

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Chúng tôi đã ghi nhận thông tin của bạn!<br>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi <br> Xin chúc bạn có những giây phút thư giãn với những người yêu thương";
    }
}