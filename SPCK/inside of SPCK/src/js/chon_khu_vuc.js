// render khu vực
const khu_vuc = [
    // hà nội có 30 quận, huyện
    {
        id : 1,
        anh_khu_vuc : "img/quận ba đình.jpg",
        ten_khu_vuc : "Quận Ba Đình",
            nha_hang : [
                {
                    ten_nha_hang: "Mì Hưng Phát",
                    dia_chi_nha_hang: " 7 Điện Biên Phủ, Điện Biên, Ba Đình, Hà Nội",
                    anh_nha_hang:":))",
                },
                {
                    ten_nha_hang: "Bún cá Văn",
                    dia_chi_nha_hang: "174 Quán Thánh, Quán Thánh, Ba Đình, Hà Nội",
                    anh_nha_hang:":))",
                },
                {
                    ten_nha_hang: "Bánh cuốn bà Xuân",
                    dia_chi_nha_hang: "Dốc Hoè Nhai, Nguyễn Trung Trực, Ba Đình, Hà Nội",
                    anh_nha_hang:" ",
                },
                {
                    ten_nha_hang: "Nhà hàng Nhật Bản Taki Taki",
                    dia_chi_nha_hang: "20 Đào Tấn, Cống Vị, Ba Đình, Hà Nội",
                    anh_nha_hang:" ",
                },
                {
                    ten_nha_hang: "Lẩu nấm Gia Bách",
                    dia_chi_nha_hang: "14 Thành Công, Thành Công, Ba Đình, Hà Nội",
                    anh_nha_hang:" ",
                },
                {
                    ten_nha_hang: "Quán lươn bà Liêm",
                    dia_chi_nha_hang: "319 Đội Cấn, Liễu Giai, Ba Đình, Hà Nội",
                    anh_nha_hang:" ",
                },
                {
                    ten_nha_hang: "Yến Béo - Cháo & Súp Gà",
                    dia_chi_nha_hang: "Số 19 dốc Hoè Nhai, Nguyễn Trung Trực, Ba Đình, Hà Nội",
                    anh_nha_hang:" ",
                },
                {
                    ten_nha_hang: "Nộm Bố Già",
                    dia_chi_nha_hang: "1 Nguyễn Trung Trực, Nguyễn Trung Trực, Ba Đình, Hà Nội",
                    anh_nha_hang:" ",
                },
                {
                    ten_nha_hang: "Aummee - Ẩm Thực Chay",
                    dia_chi_nha_hang: "26 phường Châu Long, Trúc Bạch, Ba Đình, Hà Nội",
                    anh_nha_hang:" ",
                },
                {
                    ten_nha_hang: "Phở cuốn Hương Mai",
                    dia_chi_nha_hang: "25 Ngũ Xã, Trúc Bạch, Ba Đình, Hà Nội",
                    anh_nha_hang:" ",
                },
                {
                    ten_nha_hang: "Nem nướng Xuân Dần",
                    dia_chi_nha_hang: "95 Giang Văn Minh, Đội Cấn, Ba Đình, Hà Nội",
                    anh_nha_hang:" ",
                },
                {
                    ten_nha_hang: "Bục quán",
                    dia_chi_nha_hang: "52 Đào Tấn, Cống Vị, Ba Đình, Hà Nội",
                    anh_nha_hang:" ",
                },
                {
                    ten_nha_hang: "Chè xoài Minci",
                    dia_chi_nha_hang: "Số 5 Nguyễn Trường Tộ, Nguyễn Trung Trực, Ba Đình, Hà Nội",
                    anh_nha_hang:" ",
                },
                {
                    ten_nha_hang: "Bánh rán Hoàn",
                    dia_chi_nha_hang: "103c6 Trần Huy Liệu, Giảng Võ, Ba Đình, Hà Nội",
                    anh_nha_hang:" ",
                },
                {
                    ten_nha_hang: "Quán ốc dì Tú",
                    dia_chi_nha_hang: "144C Quán Thánh, Quán Thánh, Ba Đình, Hà Nội",
                    anh_nha_hang:" ",
                },
            ]
    },
    {
        id : 2,
        anh_khu_vuc : "img/quận hoàn kiếm.jpg",
        ten_khu_vuc : "Quận Hoàn Kiếm",
            nha_hang : [
                {
                    ten_nha_hang: "Quán ăn Ngon",
                    dia_chi_nha_hang: "18 Phan Bội Châu, Cửa Nam, Hoàn Kiếm",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Ầu Ơ",
                    dia_chi_nha_hang: "15 Lý Thường Kiệt, Phan Chu Trinh, Hoàn Kiếm",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Sứ Bia",
                    dia_chi_nha_hang: "23 Nguyễn Đình Chiểu, Quận Hai Bà Trưng, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Jacksons Steakhouse",
                    dia_chi_nha_hang: "23J Hai Bà Trưng, Hàng Bài, Hoàn Kiếm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Pizza 4P",
                    dia_chi_nha_hang: "11B Bảo Khánh, Hoàn Kiếm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Au Lac Do Brazil",
                    dia_chi_nha_hang: "43 Tràng Tiền, Hoàn Kiếm",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Daebak - Korea Restaurant",
                    dia_chi_nha_hang: "25 Trần Bình Trọng, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bếp Thái Koh Yam",
                    dia_chi_nha_hang: "34A Quang Trung, Q. Hoàn Kiếm",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Gu- i92 BBQ",
                    dia_chi_nha_hang: "9 Trần Hưng Đạo, Phan Chu Trinh, Hoàn Kiếm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng buffet Maison Sen",
                    dia_chi_nha_hang: "61 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Thế giới hải sản ",
                    dia_chi_nha_hang: "75A Trần Hưng Đạo, Hoàn Kiếm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Vựa Hải Sản Biển Đông",
                    dia_chi_nha_hang: "3 Trần Quốc Toản, Quận Hoàn Kiếm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hải Sản Phố",
                    dia_chi_nha_hang: "15C Trần Khánh Dư, P. Bạch Đằng, Q. Hoàn Kiếm",
                    anh_nha_hang:" ",   
                },
            ]
    },
    {
        anh_khu_vuc : "img/Quận Tây Hồ.jpg",
        ten_khu_vuc : "	Quận Tây Hồ",
        id : 3,
            nha_hang : [
                {
                    ten_nha_hang: "Nhạc Đình Chinese",
                    dia_chi_nha_hang: "197 Âu Cơ, Quảng An, Tây Hồ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Flamant Bistro",
                    dia_chi_nha_hang: "100A Xuân Diệu, Tứ Liên, Tây Hồ",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "El Vino Wine & Restaurant",
                    dia_chi_nha_hang: "16 Quảng An, Quận Tây Hồ",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Parosand Sky Bar Restaurant",
                    dia_chi_nha_hang: "537 Đ. Lạc Long Quân, Xuân La, Tây Hồ",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Soft Water",
                    dia_chi_nha_hang: "Số 42 Đường 9 (F361), An Dương, Quận Tây Hồ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bay Seafood Buffet",
                    dia_chi_nha_hang: "Số 28 Phố Yên Hoa, quận Tây Hồ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "6 Degrees",
                    dia_chi_nha_hang: "Số 189 Nghi Tàm, quận Tây Hồ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Tivoli Restaurant",
                    dia_chi_nha_hang: "Số 76 Yên Phụ, Quận Tây Hồ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Maison de Tet Decor",
                    dia_chi_nha_hang: "Số 26 Quảng Bá, Quận Tây Hồ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "DragonCELLO",
                    dia_chi_nha_hang: "Số 201 Phố Vệ Hồ, Xuân La, Quận Tây Hồ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "SunKat's",
                    dia_chi_nha_hang: "Số 172 Yên Phụ, Quận Tây Hồ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Buffet Sen Tây Hồ",
                    dia_chi_nha_hang: "Số 614 Lạc Long Quân, Quận Tây Hồ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Phúc Thành",
                    dia_chi_nha_hang: "Số 685 Lạc Long Quân, Phường Phú Thượng, Quận Tây Hồ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Sen Đầm Trị",
                    dia_chi_nha_hang: "Số 38 Đặng Thai Mai, Quảng An, Tây Hồ, Hà Nội",
                    anh_nha_hang:" ",   
                }, 
            ],
    },
    {
        anh_khu_vuc : "img/Quận Long Biên.jpg",
        ten_khu_vuc : "Quận Long Biên",
        id : 4,
            nha_hang : [
                {
                    ten_nha_hang: "Chả cá Đế Đô",
                    dia_chi_nha_hang: "Tầng 4, Vincom Plaza Long Biên, khu đô thị sinh thái Vinhomes Riverside, quận Long Biên, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Al Fresco's",
                    dia_chi_nha_hang: "L4-02B, tầng 4, Vincom Plaza Long Biên, khu đô thị sinh thái Vinhomes Riverside, quận Long Biên, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Hương Quê Long Biên",
                    dia_chi_nha_hang: "12, Tổ 6, Nguyễn Văn Hưởng, quận Long Biên, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Biển Đông Long Biên",
                    dia_chi_nha_hang: "Biệt thự Phong Lan 01-01, Khu đô thị Vinhomes Riverside, Phúc Đồng, quận Long Biên, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "The Safari - Hotpot & Grilled House",
                    dia_chi_nha_hang: "256 Nguyễn Văn Cừ, Ngọc Lâm, quận Long Biên, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "King BBQ",
                    dia_chi_nha_hang: "460 - 462 Nguyễn Văn Cừ, Gia Thụy, quận Long Biên, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Buk Buk",
                    dia_chi_nha_hang: "07-09 đường Nguyễn Văn Linh, quận Long Biên, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Gyu-Kaku",
                    dia_chi_nha_hang: "Số 27 Cổ Linh, quận Long Biên, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Yoogane Chicken Galbi",
                    dia_chi_nha_hang: "27 Cổ Linh, Quận Long Biên, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu dê Tuấn Hằng",
                    dia_chi_nha_hang: "69 Phố Tân Thụy, Phúc Đồng, quận Long Biên Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nghé Phú viên",
                    dia_chi_nha_hang: "Cửa Khẩu Bồ Đề, 126 Ngõ 1 Phú Viên, Bồ Đề, Long Biên",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lưu Gia Trang",
                    dia_chi_nha_hang: "Ngõ 53, Đường Ngọc Thụy, Long Biên, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán Bắc",
                    dia_chi_nha_hang: "Tầng 4 Trung tâm thương mại Vincom Center Long Biên, Long Biên, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Kumbo",
                    dia_chi_nha_hang: "234 Ngô Gia Tự, Đức Giang, Long Biên, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà sàn Bốn Mùa",
                    dia_chi_nha_hang: "29 Sài Đồng, Long Biên, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Olio Food Sector",
                    dia_chi_nha_hang: "Tầng 5 – Mipec Long Biên, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Mập Kòi Quán",
                    dia_chi_nha_hang: "684 Nguyễn Văn Cừ, Đức Giang, Long Biên, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Him Lam",
                    dia_chi_nha_hang: "Khu Trung Đoàn 918, Phúc Đồng, Long Biên, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lok Heen",
                    dia_chi_nha_hang: "Đường Hoa Lan, Khu đô thị Vinhomes Reverside, Phúc Lợi, Long Biên",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Jlegu Korean BBQ",
                    dia_chi_nha_hang: "240 Ngô Gia Tự, Đức Giang, Long Biên, Hà Nội",
                    anh_nha_hang:" ",   
                },
            ],
    },
    {
        anh_khu_vuc : "img/quận cầu giấy.jpg",
        ten_khu_vuc : "Quận Cầu Giấy",
        id : 5,
            nha_hang : [
                {
                    ten_nha_hang: "Pao Quán",
                    dia_chi_nha_hang: "1 Ngõ 62 Trần Thái Tông, P. Dịch Vọng Hậu,  Quận Cầu Giấy, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "1915Y Restaurant",
                    dia_chi_nha_hang: "54 Trung Hòa,  Quận Cầu Giấy, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Dê Ré Song Dương",
                    dia_chi_nha_hang: "Số 39, Trần Kim Xuyến, quận Cầu Giấy, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Thế Giới Hải Sản",
                    dia_chi_nha_hang: "18 Dương Đình Nghệ, P. Yên Hòa,  Quận Cầu Giấy, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu Nấm Gia Khánh",
                    dia_chi_nha_hang: "67 Vũ Phạm Hàm, quận Cầu Giấy, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Vườn Bia Hà Nội",
                    dia_chi_nha_hang: "2A Nguyễn Thị Thập,  Quận Cầu Giấy, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Huế Ngon",
                    dia_chi_nha_hang: "Số nhà 12 Ngõ 76 Ngách 2 Phố Duy Tân, Cầu Giấy, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Yakimono",
                    dia_chi_nha_hang: "A109 D5 Trần Thái Tông, Cầu Giấy, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Kichi Kichi",
                    dia_chi_nha_hang: "105D5C Trần Thái Tông, P. Dịch Vọng,  Quận Cầu Giấy, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "King BBQ",
                    dia_chi_nha_hang: "302 Đường Cầu Giấy, Dịch Vọng, Cầu Giấy, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Gogi House",
                    dia_chi_nha_hang: "103D5A Trần Thái Tông,  Quận Cầu Giấy, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu & Nướng Gật Gù",
                    dia_chi_nha_hang: "72 khúc Thừa Dụ – phường Dịch Vọng – Quận Cầu Giấy, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán Sơn Khê",
                    dia_chi_nha_hang: "71 Trần Quốc Vượng, quận Cầu Giấy, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Phương Nam",
                    dia_chi_nha_hang: "35 Dịch Vọng, quận Cầu Giấy, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Moo Beef Steak",
                    dia_chi_nha_hang: "Số 2F Nguyễn Khánh Toàn, P. Quan Hoa, Q. Cầu Giấy",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Moon BBQ",
                    dia_chi_nha_hang: "ngõ 92 Nguyễn Khánh Toàn, số 32, quận Cầu Giấy",
                    anh_nha_hang:" ",   
                },

            ],
    },
    {
        anh_khu_vuc : "img/Quận Đống Đa.jpg",
        ten_khu_vuc : "Quận Đống Đa",
        id : 6,
            nha_hang : [
                {
                    ten_nha_hang: "Bò tơ Quán Mộc",
                    dia_chi_nha_hang: "47 Nguyên Hồng, Đống Đa",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Sumo BBQ",
                    dia_chi_nha_hang: "số 10 Ngõ 82, Phố Chùa Láng- Quận Đống Đa – Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Phương Nam",
                    dia_chi_nha_hang: "Ngõ 69 Chùa Láng, quận Đống Đa, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Cowboy Jack’s American Dining",
                    dia_chi_nha_hang: "229 Tây Sơn, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Grille6 Steakhouse",
                    dia_chi_nha_hang: "106 Hào Nam Kéo dài, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Món ngon Sài Thành",
                    dia_chi_nha_hang: "58A Huỳnh Thúc Kháng, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Gogi House",
                    dia_chi_nha_hang: "B4 Phạm Ngọc Thạch, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Food house",
                    dia_chi_nha_hang: "85 Thái Hà, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Chai Talay",
                    dia_chi_nha_hang: "474 Xã Đàn, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hotpot Story",
                    dia_chi_nha_hang: "Tầng 5, Vincom Center Nguyễn Chí Thanh, 54A Nguyễn Chí Thanh, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Sushi Key",
                    dia_chi_nha_hang: "Tòa nhà M3-M4, số 91 Nguyễn Chí Thanh, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Daruma Giảng Võ",
                    dia_chi_nha_hang: "số 118 K1 Giảng Võ, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Le Monde Steak",
                    dia_chi_nha_hang: "số 25 Hoàng Cầu, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Vịt quay Tô Thị",
                    dia_chi_nha_hang: "310 Thái Hà, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Khao Lao",
                    dia_chi_nha_hang: "Vincom Center 2B Phạm Ngọc Thạch,phường Trung Tự, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Vua chả cá Giảng Võ",
                    dia_chi_nha_hang: "269 Giảng Võ,phường Cát Linh, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Shogun",
                    dia_chi_nha_hang: "Tầng 5 Vincom Center 2B Phạm Ngọc Thạch,phường Trung Tự, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Mr Big Beef",
                    dia_chi_nha_hang: "70 Nguyên Hồng, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "King Mushroom",
                    dia_chi_nha_hang: "43 Huỳnh Thúc Kháng, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu nấm Gia Khánh",
                    dia_chi_nha_hang: "28 Tây Sơn, quận Đống Đa, Hà Nội",
                    anh_nha_hang:" ",   
                },

            ],
    },
    {
        anh_khu_vuc : "img/Quận Hai Bà Trưng.jpg",
        ten_khu_vuc : "Quận Hai Bà Trưng",
        id : 7,
        nha_hang : [
                {
                    ten_nha_hang: "Long Wang",
                    dia_chi_nha_hang: "539 Minh Khai – Vĩnh Tuy- Hai Bà Trưng",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bò Tơ Quán Mộc",
                    dia_chi_nha_hang: "Số 2 Hoa Lư, Hai Bà Trưng",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Lẩu hơi Caribe",
                    dia_chi_nha_hang: "Số 63 phố Hai Bà Trưng, quận Hai Bà Trưng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Đông Phương",
                    dia_chi_nha_hang: "13 Lê Văn Hưu, quận Hai Bà Trưng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Wild Rice",
                    dia_chi_nha_hang: "Số 6 Ngô Thì Nhậm, quận Hai Bà Trưng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bia Sứ",
                    dia_chi_nha_hang: "Số 23 Nguyễn Đình Chiểu, quận Hai Bà Trưng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Món Huế",
                    dia_chi_nha_hang: "684 Minh Khai, tầng 18 Sahul Hotel, quận Hai Bà Trưng, Hà Nội ",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Wabi Sabi Vườn Nhật",
                    dia_chi_nha_hang: "15 Tô Hiến Thành, quận Hai Bà Trưng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Mr.YAKI",
                    dia_chi_nha_hang: "TTTM Times City, tầng B1, số 8 đường 9, 458 Minh Khai, quận Hai Bà Trưng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Botanica",
                    dia_chi_nha_hang: "21 P. Lê Văn Hưu, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội, Việt Nam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Gia Viên",
                    dia_chi_nha_hang: "228 Bà Triệu, quận Hai Bà Trưng, Hà Nội ",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Asahi Sushi",
                    dia_chi_nha_hang: "228 Bà Triệu, quận Hai Bà Trưng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Chả cá An Nam",
                    dia_chi_nha_hang: " 324 Bà Triệu, quận Hai Bà Trưng, Hà Nội ",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Hải Sản 3 Yêu Tinh",
                    dia_chi_nha_hang: "Số 23 Lò Đúc, phường Phạm Đình Hổ, quận Hai Bà Trưng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hải Sản Tomato",
                    dia_chi_nha_hang: "82 Lê Văn Hưu, quận Hai Bà Trưng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Seoul Garden",
                    dia_chi_nha_hang: "Tầng 5 Vincom Bà Triệu, 191 Bà Triệu, quận Hai Bà Trưng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "GoGi House",
                    dia_chi_nha_hang: "151 Bùi Thị Xuân, quận Hai Bà Trưng, Hà Nội ",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "1915Y Restaurant",
                    dia_chi_nha_hang: "21 Lê Văn Hưu, quận Hai Bà Trưng, Hà Nội ",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Sumo BBQ",
                    dia_chi_nha_hang: "67 Tô Hiến Thành, quận Hai Bà Trưng, Hà Nội ",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bếp Xuka",
                    dia_chi_nha_hang: "SH6 Hòa Bình Green City, 505 Minh Khai, quận Hai Bà Trưng, Hà Nội ",
                    anh_nha_hang:" ",   
                },

        ],
    },
    {
        anh_khu_vuc : "img/Quận Hoàng Mai.jpg",
        ten_khu_vuc : "	Quận Hoàng Mai",
        id : 8,
            nha_hang : [
                {
                    ten_nha_hang: "Nhà hàng Nam Sơn",
                    dia_chi_nha_hang: "số 809 Giải Phóng, Hoàng Mai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Nét Việt",
                    dia_chi_nha_hang: "TT2 – 40, KĐT Kim Văn Kim Lũ, Hoàng Mai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "A1 Restaurant",
                    dia_chi_nha_hang: "Số 63 Kim Đồng, Quận Hoàng Mai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Khói Bếp 2",
                    dia_chi_nha_hang: "Số 11 TD3D Tây Nam Linh Đàm, Hoàng Mai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Ẩm thực Hồng Hạc",
                    dia_chi_nha_hang: "số 38 Linh Đường, Quận Hoàng Mai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Mường Hoa Quán",
                    dia_chi_nha_hang: "Số 9, TT3C, Khu đô thị Tây Nam Linh Đàm, Hoàng Mai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bánh Tráng Thịt Heo Hoàng Bèo",
                    dia_chi_nha_hang: "số 47 Kim Đồng, Hoàng Mai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Cơm niêu Singapore Kombo",
                    dia_chi_nha_hang: "Số 26 Kim Đồng, Phường Giáp Bát, Quận Hoàng Mai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bò Ngon 555",
                    dia_chi_nha_hang: "7TT3B Khu biệt thự Tây Nam Linh Đàm, Linh Đường, quận Hoàng Mai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "FengHuang",
                    dia_chi_nha_hang: "Lô CX14 - KĐT Linh Đàm, Hoàng Liệt, Hoàng Mai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lổu Quán",
                    dia_chi_nha_hang: "Số 1187 Giải Phóng, Quận Hoàng Mai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Kumo BBQ & Bar",
                    dia_chi_nha_hang: "Số 14 Thịnh Liệt (ngõ 1141 Giải Phóng), Hoàng Mai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bún bò Huế Huyền Anh",
                    dia_chi_nha_hang: "169 Trương Định, Quận Hoàng Mai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Gà 142",
                    dia_chi_nha_hang: "số 142 Định Công, Hoàng Mai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Pizza Xtrum",
                    dia_chi_nha_hang: "số 72-73 lô 5 Đền Lừ 2, Hoàng Mai, Hà Hội",
                    anh_nha_hang:" ",   
                },
                                                                     
            ],
    },
    {
        anh_khu_vuc : "img/Thanh Xuân.jpg",
        ten_khu_vuc : "Quận Thanh Xuân",
        id : 9,
            nha_hang : [
                {
                    ten_nha_hang: "Bò Tơ Quán Mộc",
                    dia_chi_nha_hang: "B52 Nguyễn Thị Định, Thanh Xuân",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hải Sản Biển Đông",
                    dia_chi_nha_hang: "Tầng B2-R6-30 TTTM Royal City, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "KOMBO",
                    dia_chi_nha_hang: "60 Lê Văn Thiêm, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Octobar",
                    dia_chi_nha_hang: "Tầng 1, R4, Royal City, Nguyễn Trãi, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hotpot Story",
                    dia_chi_nha_hang: "TTTM The Artemis, Tầng 4, Số 3 Lê Trọng Tấn, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Buffet The One",
                    dia_chi_nha_hang: "Số 01 Nguyễn Quý Đức, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Sapasa",
                    dia_chi_nha_hang: "Số 96 Nguyễn Huy Tưởng, Thanh Xuân Trung, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "HongKong New Buffet BBQ and Hotpot",
                    dia_chi_nha_hang: "TTTM Artemis, Tầng 4, Số 3 Lê Trọng Tấn, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu Phan",
                    dia_chi_nha_hang: "Số 53 Triều Khúc, B10 Khu biệt thự Pandora, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Trúc Quán",
                    dia_chi_nha_hang: "5 ngõ 583 Nguyễn Trãi, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhất Lẩu",
                    dia_chi_nha_hang: "188 Thượng Đình, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "GoGi House",
                    dia_chi_nha_hang: "B2 R2, Royal City, 72A Nguyễn Trãi, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Gyu-Kaku Japanese BBQ",
                    dia_chi_nha_hang: "TTTM Artemis, Tầng 5, Số 3 Lê Trọng Tấn, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "K’ Street",
                    dia_chi_nha_hang: "186 Thượng Đình, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Sumo BBQ",
                    dia_chi_nha_hang: "B2 R6 Royal City, 72A Nguyễn Trãi, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Sườn Cây Nướng & Beer",
                    dia_chi_nha_hang: "146 Phố Vọng, phường Phương Liệt, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Dolpan Sam",
                    dia_chi_nha_hang: "TTTM Artemis, Tầng 4, Số 3 Lê Trọng Tấn,Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Shabu Shabu On – Yasai",
                    dia_chi_nha_hang: "Tầng B2 Vincom Royal City, số 72A Nguyễn Trãi, Quận Thanh Xuân, Hà Nội",
                    anh_nha_hang:" ",   
                },

            ],
    },
    {
        anh_khu_vuc : "img/Hà đông.jpg",
        ten_khu_vuc : "	Quận Hà Đông",
        id : 10,
            nha_hang : [
                {
                    ten_nha_hang: "Bò Tơ quán Mộc",
                    dia_chi_nha_hang: "14 BT7 KĐT Văn Quán, Hà Đông",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Hoàng Bèo",
                    dia_chi_nha_hang: "45LK6A Nguyễn Văn Lộc, P. Mộ Lao, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Mâm Việt",
                    dia_chi_nha_hang: "số 58,đường 19/5, P.Văn Quán, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Hải Sơn",
                    dia_chi_nha_hang: "Khu Đô thị Văn Quán, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Đỉnh Nướng",
                    dia_chi_nha_hang: "36 Nguyễn Khuyến, P. Văn Quán, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng gà 36",
                    dia_chi_nha_hang: "97 Trần Phú, P.Văn Quán, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng ẩm thực Mộc Ngỗng Cỏ 6 món",
                    dia_chi_nha_hang: "khu đô thị Văn Quán, P. Phúc La, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Bắc Việt",
                    dia_chi_nha_hang: "Tầng 4 siêu thị Hiway số 8 Quang Trung, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Sumo BBQ",
                    dia_chi_nha_hang: "LK3C 10 Nguyễn Văn Lộc, P. Mộ Lao, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "King BBQ Buffet",
                    dia_chi_nha_hang: "TTTM Hồ Gươm Plaza, 110 Trần Phú,Tầng 1, shop 07, P. Mộ Lao, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Thành Nam",
                    dia_chi_nha_hang: "Tầng 2CT1 The Pride,Đường Tố Hữu, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hải sản Mỹ Hạnh",
                    dia_chi_nha_hang: "102 Phố Tố Hữu, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Food center",
                    dia_chi_nha_hang: "85 Trần Phú, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Pepperonis",
                    dia_chi_nha_hang: "14 Trần Phú, Phường Mộ Lao, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "BBQ chicken",
                    dia_chi_nha_hang: "Tầng 5 TTTM Mê Linh, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Gogi House",
                    dia_chi_nha_hang: "146 Trần Phú, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu Thái Xơi",
                    dia_chi_nha_hang: "151 Triều Khúc, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bánh cuốn Cao Bằng",
                    dia_chi_nha_hang: "Liền kề 2B,ô số 4, Mỗ Lao, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lucky Hotpot",
                    dia_chi_nha_hang: "Tầng 4 TTTM Mê Linh Plaza, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng ẩm thực Mộc",
                    dia_chi_nha_hang: "Lô 3 khu Yên Phúc khu đô thị Văn Quán, Hà Đông, Hà Nội",
                    anh_nha_hang:" ",   
                },

            ],
    },
    {
        anh_khu_vuc : "img/Bắc từ liêm.jpg",
        ten_khu_vuc : "Quận Bắc Từ Liêm",
        id : 11,
            nha_hang : [
                {
                    ten_nha_hang: "Bún Chả Bà Mầu",
                    dia_chi_nha_hang: "34 Phố Văn Hội,phường Đức Thắng, quận Bắc Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bánh Mì Bami Bread",
                    dia_chi_nha_hang: "208 Hoàng Quốc Việt, phường Cổ Nhuế, quận Bắc Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bún Thái Hải Sản An Nhiên",
                    dia_chi_nha_hang: "56/20 Lê Văn Hiến, phường Đức Thắng, quận Bắc Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Thanh Nga",
                    dia_chi_nha_hang: "56/18 Lê Văn Hiến, phường Đức Thắng, quận Bắc Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Della Seta",
                    dia_chi_nha_hang: "Khu dân cư Nam Cường, Ngõ 234 Hoàng Quốc Việt, phường Cổ Nhuế, quận Bắc Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bò Tơ Quán Mộc",
                    dia_chi_nha_hang: "Tầng 1 CT2A Khu dân cư Nam Cường, Ngõ 234 Hoàng Quốc Việt, phường Cổ Nhuế, quận Bắc Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Sariwon Restaurant",
                    dia_chi_nha_hang: "Khu chung cư Green Stars, 234 Phạm Văn Đồng, phường Cổ Nhuế, quận Bắc Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Nấm Tràng An",
                    dia_chi_nha_hang: "54 Đường số 2, Khu đô thị Thành phố Giao Lưu, quận Bắc Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Gyu–Kaku",
                    dia_chi_nha_hang: "Vincom Bắc, 234 Phạm Văn Đồng, phường Cổ Nhuế, quận Bắc Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Cơm Ngon Mẹ Nấu",
                    dia_chi_nha_hang: "195/27 Cầu Diễn, phường Phúc Diễn, quận Bắc Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hotdog Station",
                    dia_chi_nha_hang: "Chung cư Tổng cục V, Tôn Quang Phiệt, phường Cổ Nhuế, quận Bắc Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nem Nướng Nha Trang Anh Tư",
                    dia_chi_nha_hang: "31/25 Văn Hội, phường Đức Thắng, quận Bắc Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Chingu Eat",
                    dia_chi_nha_hang: "359/8 Trần Cung, phường Cổ Nhuế, quận Bắc Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Trà Sữa Nướng Yi He Kao Nai",
                    dia_chi_nha_hang: "85/9/21 Trung Kiên, phường Tây Tựu, quận Bắc Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Vela - Hoa Quả Dầm & Set Trái Cây Cắt Sẵn",
                    dia_chi_nha_hang: "68/415 Phú Diễn, phường Phú Diễn, quận Bắc Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bún đậu chị Vân",
                    dia_chi_nha_hang: "8 Ngách 599/16/1 Phạm Văn Đồng",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán chè 3 Ngon",
                    dia_chi_nha_hang: "đối diện hẻm 232 Xuân Đỉnh",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bánh mì One One",
                    dia_chi_nha_hang: "36 Xuân La",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Phở 10 Hà Nội Xưa",
                    dia_chi_nha_hang: "số 157 Cổ Nhuế",
                    anh_nha_hang:" ",   
                },

            ],
    },
    {
        anh_khu_vuc : "img/Nam từ liêm.jpg",
        ten_khu_vuc : "Quận Nam Từ Liêm",
        id : 12,
            nha_hang : [
                {
                    ten_nha_hang: "Bánh cuốn Gia An",
                    dia_chi_nha_hang: "B5 - Mỹ Đình 1, số 3, phố Nguyễn Cơ Thạch, phường Mỹ Đình, quận Nam Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bánh mì Zốp Bami",
                    dia_chi_nha_hang: "Số 6 ngõ 65, ngách 28 Nguyễn Đổng Chi, phường Cầu Diễn, quận Nam Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bún bò Huế Hưng Còi",
                    dia_chi_nha_hang: "194 Mỹ Đình, phường Mỹ Đình, quận Nam Từ Liêm, Hà Nộ",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bún đậu mắm tôm Hải Anh",
                    dia_chi_nha_hang: "172 Phùng Khoang, quận Nam Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bún chả Hàng Mành Thu Hà",
                    dia_chi_nha_hang: "Số 4 Vườn Cam, phường Mễ Trì, quận Nam Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Chả cá ngon Mỹ Đình",
                    dia_chi_nha_hang: "Tòa Nhà A2, tầng 1, phố Nguyễn Cơ Thạch, phường Mỹ Đình, quận Nam Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu hấp Fresh",
                    dia_chi_nha_hang: "B2 – 05A Vinhomes Gardenia, phố Hàm Nghi, phường Cầu Diễn, quận Nam Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Hoa An Viên",
                    dia_chi_nha_hang: "95 Lê Đức Thọ, phường Mỹ Đình, quận Nam Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bò 36",
                    dia_chi_nha_hang: "36 phố Nguyễn Hoàng, phường Mỹ Đình, quận Nam Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Alo Sushi",
                    dia_chi_nha_hang: "Ngõ 4, phố Hàm Nghi, phường Mỹ Đình, quận Nam Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Năm Dê Ninh Bình 1",
                    dia_chi_nha_hang: "Số 1 Đồng Me, phường Mễ Trì, quận Nam Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "An Nam Cháo",
                    dia_chi_nha_hang: "Ngõ 4, phố Hàm Nghi, phường Mỹ Đình, quận Nam Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bánh tráng trộn Linh Chi",
                    dia_chi_nha_hang: "66 Mễ Trì Thượng, phường Mễ Trì, quận Nam Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Chè miền Tây An Giang",
                    dia_chi_nha_hang: "79 Thiên Hiền, phường Mỹ Đình, quận Nam Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Dovado Pizza",
                    dia_chi_nha_hang: "70 D1 - TT4, phố Đỗ Đình Thiện, khu đô thị Mỹ Đình Sông Đà, quận Nam Từ Liêm, Hà Nội",
                    anh_nha_hang:" ",   
                },,
  
            ],
    },
    {
        anh_khu_vuc : "img/Thị xã sơn tây.jpg",
        ten_khu_vuc : "Thị xã Sơn Tây",
        id : 13,
            nha_hang : [
                {
                    ten_nha_hang: "Baly Convention Center",
                    dia_chi_nha_hang: "Số 35 Phố Chùa Thông, Sơn Lộc, Sơn Tây, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quảng Tây Resort",
                    dia_chi_nha_hang: "Trung Sơn Trầm, Sơn Tây, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Lá Cọ Minh Hoa",
                    dia_chi_nha_hang: "Ngã ba chợ Xuân Khanh, Sơn Tây, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Trung tâm hội nghị Baly",
                    dia_chi_nha_hang: "Số 35 Phố Chùa Thông, Sơn Lộc, Sơn Tây, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Sơn Tây Hồng Giang",
                    dia_chi_nha_hang: "Đường tránh 32, Vân Gia, Sơn Tây, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng cá gà Tam Trang",
                    dia_chi_nha_hang: "Làng Thiên Mã, xã Đông Đông, Sơn Tây, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Đông Thành",
                    dia_chi_nha_hang: "số 10 Hoàng Diệu, thị xã Sơn Tây, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Phở Thìn Lục Quân Cổ Đông",
                    dia_chi_nha_hang: "Cổ Đông, thị xã Sơn Tây, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Long Tường Quan",
                    dia_chi_nha_hang: "Văn Gia, Trung Hưng, Sơn Tây, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Phương Kha",
                    dia_chi_nha_hang: "Đường Đôi, Đồng Mô, Sơ Đông, thị xã Sơn Tây",
                    anh_nha_hang:" ",   
                },

            ]
    },
    {
        anh_khu_vuc : "img/Huyện Ba vì.jpg",
        ten_khu_vuc : "Huyện Ba Vì",
        id : 14,
            nha_hang : [
                {
                    ten_nha_hang: "Nhà hàng Lá Cọ",
                    dia_chi_nha_hang: "Cầu Và, xã Tản Lĩnh, Ba Vì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "559 Restaurant Ba Vì",
                    dia_chi_nha_hang: "Vân Hòa, Ba Vì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Gà Đồi Ba Vì Restaurant",
                    dia_chi_nha_hang: "TL87A, Tân Lĩnh, Ba Vì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lá Cọ Minh Hoa Restaurant",
                    dia_chi_nha_hang: "Ngã ba chợ Xuân Khanh, Sơn Tây, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Tam Hương Restaurant",
                    dia_chi_nha_hang: "Yên Bài, Ba Vì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Ba Vì Restaurant",
                    dia_chi_nha_hang: "Quốc lộ 32, Đồng Quang, Ba Vì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Đồi Cò Ngọc Nhị",
                    dia_chi_nha_hang: "Cẩm Lĩnh, Ba Vì, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Tám Lý",
                    dia_chi_nha_hang: "Cầu Chằm Mè, Xã Ba Trại, H.Ba Vì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán Tư Lùn",
                    dia_chi_nha_hang: "Thôn Hưng Đạt, Tây Đằng, Ba Vì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Tản Viên",
                    dia_chi_nha_hang: "Tản Đà Spa Resort, Vân Hòa, Ba Vì, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Long Sữa",
                    dia_chi_nha_hang: "Xã Đồng Thái, Huyện Ba Vì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Vườn ẩm thực Ba Vì",
                    dia_chi_nha_hang: "Xã Yên Bài, Ba Vì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Xạ Hương",
                    dia_chi_nha_hang: "400 Bà Vì, Tân Lĩnh, Ba Vì, Hà Nội.",
                    anh_nha_hang:" ",   
                },
 
            ],
    },
    {
        anh_khu_vuc : "img/Huyện Chương Mỹ.jpg",
        ten_khu_vuc : "Huyện Chương Mỹ",
        id : 15,
            nha_hang : [
                {
                    ten_nha_hang: "Nhà hàng Linh Châu",
                    dia_chi_nha_hang: "Đội 7 – Thôn 2 – Xã Quảng Bị – Huyện Chương Mỹ – Thành phố Thành Phố Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Phạm Xá Mạnh Hoạch",
                    dia_chi_nha_hang: "Đường Hồ Chí Minh, Xuân Thủy, Thủy Xuân Tiên, Chương Mỹ, Thành Phố Hà Nội .",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán ăn ngon XM",
                    dia_chi_nha_hang: "Số 40, tổ 2, Khu Tân Xuân, Thị Trấn Xuân Mai, Huyện Chương Mỹ, TP. Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Cá Sông Phương Nguyên",
                    dia_chi_nha_hang: "Tổ 6 khu Tân Bình, Đường Quốc lộ 6, Huyện Chương Mỹ, TP. Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hương Việt",
                    dia_chi_nha_hang: "Hòa Sơn, Tt. Chúc Sơn, H. Chương Mỹ, Tp. TP.HN",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Phương Nguyên",
                    dia_chi_nha_hang: "Tổ 6, Khu Tân Bình, Xuân mai, Chương Mỹ, Thành Phố Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Lẩu Cua Đồng",
                    dia_chi_nha_hang: "Đối Diện Trường TC Nghề 10 – BQP, Thị Trấn Xuân Mai, Huyện Chương Mỹ, Thành Phố Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bê tông Xuân Mai",
                    dia_chi_nha_hang: "Thuỷ Xuân Tiên, Xuân Mai, Huyện Chương Mỹ, TP. Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Ăn Uống Hai Lúa",
                    dia_chi_nha_hang: "Số 88, khu Bắc Sơn, Thị trấn Chúc Sơn, Huyện Chương Mỹ, TP.HN",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán ăn Ngon Xuân Mai",
                    dia_chi_nha_hang: "QL21A, TT.Xuân Mai, Chương Mỹ, Thành Phố Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Minh Voi BBQ",
                    dia_chi_nha_hang: "Km30, quốc lộ 6, thôn Yên Kiện, xã Đông Sơn, huyện Chương Mỹ, Thành Phố Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Thành Râu",
                    dia_chi_nha_hang: "Số 7, tổ 3, khu Xuân Hà, thị xã Xuân Mai, huyện Chương Mỹ, TP.HN",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Tân Hằng",
                    dia_chi_nha_hang: "Tổ 4, Tân Bình, thị xã Xuân Mai, huyện Chương Mỹ, TP. Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Trâu Vàng",
                    dia_chi_nha_hang: "khu Ngọc Hoà, huyện Chương Mỹ, Thành Phố Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "hà hàng Thịt trâu Chín Huyền",
                    dia_chi_nha_hang: "Số nhà 37, tổ 4 khu Tân Bình, thị xã Xuân Mai, huyện Chương Mỹ, TP.HN",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Thanh Vũ 79",
                    dia_chi_nha_hang: "Quốc Lộ 21, Thị Trấn Xuân Mai, Chương Mỹ, TP. Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Đồi Thông",
                    dia_chi_nha_hang: "QL21A, thị xã Xuân Mai, huyện Chương Mỹ, TP.HN",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Thung lũng xanh",
                    dia_chi_nha_hang: "QL21A, thị xã Xuân Mai, huyện Chương Mỹ, Thành Phố Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Lộc vừng",
                    dia_chi_nha_hang: "số 68, QL6, Ngọc Hoà, huyện Chương Mỹ, TP. Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hancook",
                    dia_chi_nha_hang: "39 Tổ 3 Xuân Hà, thị xã Xuân Mai, huyện Chương Mỹ, TP. Hà Nội",
                    anh_nha_hang:" ",   
                },

            ],
    },
    {
        anh_khu_vuc : "img/Huyện Đan Phượng.jpg",
        ten_khu_vuc : "Huyện Đan Phượng",
        id : 16,
            nha_hang : [
                {
                    ten_nha_hang: "KoKi Buffet Lẩu Nướng",
                    dia_chi_nha_hang: "Số 10 Ngõ 107 Tây Sơn, Thị trấn Phùng, Đan Phượng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Gác Bếp",
                    dia_chi_nha_hang: "SN A1-02 Khu Cổng Chung, Tân Hội, Đan Phượng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu chay Liên Hương ",
                    dia_chi_nha_hang: "Khu Cây Sung, Song Phượng, Đan Phượng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hoa Trúc",
                    dia_chi_nha_hang: "Hoa Trúc, Đồng Sậy, Đan Phượng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Mã Cương Quán",
                    dia_chi_nha_hang: "56 Khu Gò Mèo, Thị trấn Phùng, Đan Phượng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Hưởng Thụ",
                    dia_chi_nha_hang: "Quốc Lộ 32, TT. Phùng, Đan Phượng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Cửa Hàng Gà Rán Chicky",
                    dia_chi_nha_hang: "186 Tây Sơn, TT. Phùng, Đan Phượng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bún Bò Huế Vang Vang",
                    dia_chi_nha_hang: "Khu Vệ Lăng, Cây Sung, TT. Phùng, Đan Phượng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Âu Cơ Restaurant",
                    dia_chi_nha_hang: "Song Phượng, Đan Phượng, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán Nướng Anh Nam",
                    dia_chi_nha_hang: "135 Tây Sơn, TT. Phùng, Đan Phượng, Hà Nội",
                    anh_nha_hang:" ",   
                },

            ]
    },
    {
        anh_khu_vuc : "img/Huyện Đông Anh.jpg",
        ten_khu_vuc : "Huyện Đông Anh",
        id : 17,
            nha_hang : [
                {
                    ten_nha_hang: "Khao Lao",
                    dia_chi_nha_hang: "NH3- Du Ngoai Lam, Đông Anh, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu băng tải Kichi Kichi",
                    dia_chi_nha_hang: "cửa hàng A1, Tầng 1, Trung tâm mua sắm Diệp Linh, Thị trấn Đông Anh, Quận Đông Anh",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Đông Anh Mộc Thảo Viên",
                    dia_chi_nha_hang: "Số 25 – Đường Đào Duy Tùng – Huyện Đông Anh – TP Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Bảy Hồng",
                    dia_chi_nha_hang: "Tổ 3- Khu Cầu Đôi, Thị Trấn Đông Anh, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng X8",
                    dia_chi_nha_hang: "Ngõ 257 Cao Lỗ – Đông Anh – Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Sinh Thái Nam Hồng",
                    dia_chi_nha_hang: "Đường Kênh Giữa – Nam Hồng – Đông Anh – Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hùng Beo Nướng Lụi",
                    dia_chi_nha_hang: "Tầng 3 Tòa Nhà tỉnh Bình Dương, Tiên Dương, Lương Nỗ, Uy Nỗ, Đông Anh, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhất Nướng Đông Anh",
                    dia_chi_nha_hang: "3HA Chợ Đông Anh (sau chợ trung tâm Đông Anh), huyện Đông Anh, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hana BBQ",
                    dia_chi_nha_hang: "Cầu Lớn, Nam Hông, Đông Anh, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu cua sông H2T ",
                    dia_chi_nha_hang: "Cổng C, Khu công nghiệp Bắc Thăng Long, Đông Anh, hà nội",
                    anh_nha_hang:" ",   
                },

            ],
    },
    {
        anh_khu_vuc : "img/Huyện Gia lâm.jpg",
        ten_khu_vuc : "Huyện Gia Lâm",
        id : 18,
            nha_hang : [
                {
                    ten_nha_hang: "Lẩu Ếch Dũng Thuận",
                    dia_chi_nha_hang: "Kiên Thành, Trâu Qùy, Gia Lâm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "KFC ",
                    dia_chi_nha_hang: "Tầng 4 TTTM Vincom Mega Mall Ocean Park, Gia Lâm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "GoGi House",
                    dia_chi_nha_hang: "Tầng 4 TTTM Vinhomes Ocean Park, Gia Lâm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu Nấm Gia Khánh",
                    dia_chi_nha_hang: "269 - Phố Hải Âu 2, Vinhome Ocean Park, Gia Lâm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Texas Chicken",
                    dia_chi_nha_hang: "Tầng 4 TTTM Vincom Mega Mall Ocean Park, Gia Lâm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Haidilao",
                    dia_chi_nha_hang: "Tầng 1 TTTM Vincom Mega Mall Ocean Park, Gia Lâm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Chicken BBQ Nông Nghiệp",
                    dia_chi_nha_hang: "Kiot 17 Trâu Quỳ, Gia Lâm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu Nướng Mỹ Anh",
                    dia_chi_nha_hang: "3 Ngõ 149, đường Trâu Qùy, Gia Lâm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Trâu Tươi Kiến Minh",
                    dia_chi_nha_hang: "Tầng 4 TTTM Vincom Ocean Park Kiêu Kỵ, Gia Lâm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bún Cá Làng An",
                    dia_chi_nha_hang: "75 Hà Huy Tập, Gia Lâm, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu 334 Yên Viên",
                    dia_chi_nha_hang: "334 Hà Huy Tập, Gia Lâm, Hà Nội",
                    anh_nha_hang:" ",   
                },

            ],
    },
    {
        anh_khu_vuc : "img/Huyện Hoài đức.jpg",
        ten_khu_vuc : "Huyện Hoài Đức",
        id : 19,
            nha_hang : [
                {
                    ten_nha_hang: "Nhà hàng Dê núi 9",
                    dia_chi_nha_hang: "Lê Trọng Tấn, Hoài Đức, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hưng Phấn Quán",
                    dia_chi_nha_hang: "Lai Xá, xã Kim Trung, huyên Hoài Đức, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Koishi BBQ",
                    dia_chi_nha_hang: "Khu 6, thị trấn Trạm Trôi, Hoài Đức, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Bà học",
                    dia_chi_nha_hang: "Khu 7- thị trấn Trạm Trôi- Hoài Đức-Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Dink Tea",
                    dia_chi_nha_hang: "Ngãi Cầu, An Khánh, Hoài Đức,Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Giang Sơn Quán",
                    dia_chi_nha_hang: "Khu liền kề Thiên Đường Bảo Sơn, Lê Trọng Tấn, xã An Khánh, huyện Hoài Đức, Hà Nội.",
                    anh_nha_hang:"",   
                },
                {
                    ten_nha_hang: "Nhà hàng Gà Tươi Mạnh Hoạch",
                    dia_chi_nha_hang: "Khu 6, Thị trấn Trạm Trôi, huyện Hoài Đức, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Bồ Câu Chiến Sĩ",
                    dia_chi_nha_hang: "Lai Xá, xã Kim Trung, Hoài Đức, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Trọng Khách",
                    dia_chi_nha_hang: "Khu 7, thị trấn Trạm Trôi, Hoài Đức, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Sinh Giấy",
                    dia_chi_nha_hang: "Khu 7, thị trấn Trạm Trôi, huyện Hoài Đức, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Ẩm Thực Hà Nội Phố",
                    dia_chi_nha_hang: "Km19, QL 32, xã Đức Thượng, Hoài Đức, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Gà 86",
                    dia_chi_nha_hang: "14 Lô A38 KĐT Keleximco, Hoài Đức, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Pizza Home",
                    dia_chi_nha_hang: "xóm Mới, Ngãi Cầu, An Khánh, Hoài Đức, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Góc Phố Cafe",
                    dia_chi_nha_hang: "Lai Xá, xã Kim Trung, huyện Hoài Đức, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Susini",
                    dia_chi_nha_hang: "Ngã 3 Ngãi Cầu- Xí Nghiệp 300, Hoài Đức, Hà Nội.",
                    anh_nha_hang:" ",   
                },

            ],
    },
    {
        anh_khu_vuc : "img/Huyện Mê Linh.jpg",
        ten_khu_vuc : "Huyện Mê Linh",
        id : 20,
            nha_hang : [
                {
                    ten_nha_hang: "Lẩu Thế Lùn’s",
                    dia_chi_nha_hang: "KĐT Hà Phong, xã Tiền Phong, huyện Mê Linh, TP. Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Mạnh Độ",
                    dia_chi_nha_hang: "làng Đông Cao, xã Tráng Việt, huyện Mê Linh, TP. Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "The FIRST RESTAURANT",
                    dia_chi_nha_hang: "Khu Đất Mới, Phú Nhi, Thanh Lâm, Mê Linh, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Chanh Hà",
                    dia_chi_nha_hang: "khu sinh thái Đông Cao, Tráng Việt, Mê Linh, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Mạnh Dung",
                    dia_chi_nha_hang: "Quốc Lộ 23B, Tiền Phong, Mê Linh, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu Thái 79k",
                    dia_chi_nha_hang: "Đối diện ecomart Thường Lệ",
                    anh_nha_hang:" ",   
                },

            ],
    },
    {
        anh_khu_vuc : "img/Huyện Mỹ Đức.jpg",
        ten_khu_vuc : "Huyện Mỹ Đức",
        id : 21,
            nha_hang : [
                {
                    ten_nha_hang: "Nhà Hàng Triệu Trâu",
                    dia_chi_nha_hang: "gần cầu trắng, Tuy Lai, Mỹ Đức, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu nướng 429",
                    dia_chi_nha_hang: "Xóm 6, Phúc Lâm Hạ, Mỹ Đức, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Gỏi cá Bà Mây",
                    dia_chi_nha_hang: "Cầu Dậm, Hợp Tiến, Mỹ Đức, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu ếch Tâm Béo",
                    dia_chi_nha_hang: "Đội 1 Xóm Soi, Thôn Thượng, Phùng Xã, Mỹ Đức, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng An Uyên",
                    dia_chi_nha_hang: "Hợp Tiến, Mỹ Đức, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Mai Lâm",
                    dia_chi_nha_hang: "Hương Sơn, Mỹ Đức, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Tuyến Thủy",
                    dia_chi_nha_hang: "An Phú, Mỹ Đức, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Xuân Hinh - Bến Đò Suối Yến",
                    dia_chi_nha_hang: "Hương Sơn, Mỹ Đức, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Cổng Đồng Quán",
                    dia_chi_nha_hang: "Đục Khê, Mỹ Đức, Hà Nội",
                    anh_nha_hang:" ",   
                },
 
            ],
    },
    {
        anh_khu_vuc : "img/Huyện Phú Xuyên.jpg",
        ten_khu_vuc : "Huyện Phú Xuyên",
        id : 22,
            nha_hang : [
                {
                    ten_nha_hang: "Nhà Hàng Thọ Gù",
                    dia_chi_nha_hang: "Châu Can,Phú Xuyên,Hà Nội, Việt Nam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Trà sữa Royaltea",
                    dia_chi_nha_hang: "TT. Phú Xuyên,Phú Xuyên,Hà Nội, Việt Nam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Ga Phú xuyên",
                    dia_chi_nha_hang: "Tt Phú xuyên Huyện Phú Xuyên,TT. Phú Xuyên,Phú Xuyên,Hà Nội, Việt Nam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Buffet Sogogi Phú Xuyên",
                    dia_chi_nha_hang: "TT. Phú Xuyên,Phú Xuyên,Hà Nội, Việt Nam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "TocoToco",
                    dia_chi_nha_hang: "Phú Mỹ,Phú Xuyên,Hà Nội, Việt Nam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán Phở Cồ Phú Xuyên",
                    dia_chi_nha_hang: "Đại Xuyên,Phú Xuyên,Hà Nội, Việt Nam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Huy Yến",
                    dia_chi_nha_hang: "Sân vận động,Phú Xuyên,Hà Nội ,Việt Nam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Vua Lẩu Nướng",
                    dia_chi_nha_hang: "Phúc Tiến, H,Phú Xuyên,Hà Nội ,Việt Nam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Anh Đào",
                    dia_chi_nha_hang: " Đại Nghiệp,Tân Dân,Phú Xuyên,Hà Nội, Việt Nam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bún hến Ga Phú Xuyên",
                    dia_chi_nha_hang: "TT. Phú Xuyên,Phú Xuyên,Hà Nội, Việt Nam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Hùng Nhàn",
                    dia_chi_nha_hang: "TT. Phú Xuyên,Phú Xuyên,Hà Nội ,Việt Nam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Trâu Ngon Phú Xuyên",
                    dia_chi_nha_hang: "TT. Phú Xuyên,Phú Xuyên,Hà Nội, Việt Nam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bún hến",
                    dia_chi_nha_hang: "QL1,TT. Phú Xuyên,Phú Xuyên,Hà Nội, Việt Nam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Kem Mây Chiều",
                    dia_chi_nha_hang: "TT. Phú Xuyên,Phú Xuyên,Hà Nội, Việt Nam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bánh Đúc Gia Truyền Hà Miện",
                    dia_chi_nha_hang: "56 tiểu khu thao chính,TT. Phú Xuyên,Phú Xuyên,Hà Nội, Việt Nam",
                    anh_nha_hang:" ",   
                },

            ],
    },
    {
        anh_khu_vuc : "img/Huyện Phúc Thọ.jpg",
        ten_khu_vuc : "Huyện Phúc Thọ",
        id : 23,
            nha_hang : [
                {
                    ten_nha_hang: "Ẩm thực gà ngon",
                    dia_chi_nha_hang: "Cổng chào Thị Trấn Phúc Thọ, huyện Phúc Thọ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán nhậu Phúc Thọ Vườn Xoài",
                    dia_chi_nha_hang: "213, Đường Thúy Lai, Xã Dị Nậu, Huyện Thạch Thất, Liên Hiệp, Phúc Thọ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán nhậu Phúc Thọ Sóng Vân",
                    dia_chi_nha_hang: "Cụm 1, Thị Trấn Phúc Thọ, huyện Phúc Thọ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Ẩm thực đồng quê Đệ Nhất Lẩu",
                    dia_chi_nha_hang: "Cụm 6, Thị trấn Phúc Thọ, Huyện Phúc Thọ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán Quê Quán nhậu Phúc Thọ",
                    dia_chi_nha_hang: "TT Phúc Thọ, huyện Phúc Thọ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán ăn Đông Hoa",
                    dia_chi_nha_hang: "Tam Hiệp, huyện Phúc Thọ, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán nhậu Hải Hương Sen",
                    dia_chi_nha_hang: "Dốc Khánh, huyện Phúc Thọ, Hà Nội",
                    anh_nha_hang:" ",   
                },

            ]
    },
    {
        anh_khu_vuc : "img/Huyện Quốc Oai.jpg",
        ten_khu_vuc : "Huyện Quốc Oai",
        id : 24,
            nha_hang : [
                {
                    ten_nha_hang: "HTT Restaurant",
                    dia_chi_nha_hang: "Bắc Nam, TT Quốc Oai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Phủ Quốc",
                    dia_chi_nha_hang: "Tỉnh lộ 80, TT. Quốc Oai, Quốc Oai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Minh Râu",
                    dia_chi_nha_hang: "Khu đô thị Sunny Garden City, Xã Sài Sơn, Quốc Oai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Lã Vọng",
                    dia_chi_nha_hang: "QL21 Cầu Vai Réo, Xã Phú Cát, Huyện Quốc Oai, Tp. Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Cẩn Ngân",
                    dia_chi_nha_hang: "Thôn Bái Ngoại, xã Liệp Tuyết, H. Quốc Oai, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hải Sản – Lẩu Nướng Sài Sơn",
                    dia_chi_nha_hang: "Thôn 3, Chợ Thụy Khuê, Sài Sơn, Quốc Oai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Hùng Còi",
                    dia_chi_nha_hang: "Chân Cầu Vượt Hoàng Xá, TT. Quốc Oai, Huyện Quốc Oai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Dạ Viên Quán",
                    dia_chi_nha_hang: "Tổ dân phố Du Nghệ, Thị trấn Quốc Oai, huyện Quốc Oai.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "K – BBQ",
                    dia_chi_nha_hang: "Khu đường đôi bắc nam, Thạch Thán, Quốc Oai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "BBQ ADAM Quốc Oai",
                    dia_chi_nha_hang: "26 Hoàng Xá, thị trấn Quốc Oai, Hà Nội",
                    anh_nha_hang:" ",   
                },

            ],
    },
    {
        id : 25,
        anh_khu_vuc : "img/Huyện Sóc Sơn.jpg",
        ten_khu_vuc : "	Huyện Sóc Sơn",
            nha_hang : [
                {
                    ten_nha_hang: "Nhà hàng Five Star Vietnam",
                    dia_chi_nha_hang: "khu đô thị thị trấn Sóc Sơn, Sóc Sơn Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Burger King",
                    dia_chi_nha_hang: "tầng 3, sân bay Nội Bài, Sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Minh Phượng Restaurant",
                    dia_chi_nha_hang: "Hiền Ninh, sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Vũ Nghĩa",
                    dia_chi_nha_hang: "Miếu Thờ, Tiên Dược, Sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Sắc Trâu Quán",
                    dia_chi_nha_hang: "Nam Cường, Sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Lương Sơn Quán",
                    dia_chi_nha_hang: "ĐT 131, Tiên Dược, Sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Sam BBQ",
                    dia_chi_nha_hang: "22 QL 2A, Phủ Lỗ, sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng chè cung đình Huế",
                    dia_chi_nha_hang: "Núi Đôi, Sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng ATS",
                    dia_chi_nha_hang: "sân bay Nội Bài, Võ Văn Kiệt, Sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Phù Đổng",
                    dia_chi_nha_hang: "mặt đường đôi Đền Sóc, xã Phù Linh, huyện Sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lầu 333 cafe",
                    dia_chi_nha_hang: "3 Núi Đôi, Tổ 7, Sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Bá Ái Núi Đôi",
                    dia_chi_nha_hang: "Núi Đôi, ĐT 131, Sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Cat Pizza",
                    dia_chi_nha_hang: "43 tổ 7 khu đô thị Sóc Sơn, thị trấn Sóc Sơn, Sóc Sơn, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bún chả, bún đậu",
                    dia_chi_nha_hang: "9 Tổ 7, thị trấn Sóc Sơn, Sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Lâm Viên",
                    dia_chi_nha_hang: "km25 quốc lộ 3, Trung tâm thị trấn Sóc Sơn, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Phố Núi",
                    dia_chi_nha_hang: "QL2A, Phú Minh, Sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Sóc Sơn",
                    dia_chi_nha_hang: "sân bay Nội Bài, Sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Anh em",
                    dia_chi_nha_hang: "Phú Minh, Sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Canh cá rô đồng Hưng Yên",
                    dia_chi_nha_hang: "tổ 1, Miếu Thờ, Tiên Dược, Sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Vườn sinh thái Hương Tràm",
                    dia_chi_nha_hang: "khu E, hồ Đồng Quang, Quang Tiến, sóc Sơn, Hà Nội.",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Khánh Phương",
                    dia_chi_nha_hang: "Phú Cường, Sóc Sơn, Hà Nội",
                    anh_nha_hang:" ",   
                },

            ],
    },
    {
        anh_khu_vuc : "img/Huyện Thạch Thất.jpg",
        ten_khu_vuc : "Huyện Thạch Thất",
        id : 26,
            nha_hang : [
                {
                    ten_nha_hang: "Nhà hàng Birdy",
                    dia_chi_nha_hang: "ĐCT08, Thạch Hòa, Thạch Thất, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hòa Thuận",
                    dia_chi_nha_hang: "Km7 bình yên, Thạch Thất, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng sinh thái Duy Minh",
                    dia_chi_nha_hang: "Ấp 8, Thạch Hòa, Thạch Thất – Huyện Thạch Thất– Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Châu Anh",
                    dia_chi_nha_hang: "đường 21A, thôn 8, xã Thạch Hòa, Huyện Thạch Thất, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Phúc Sinh",
                    dia_chi_nha_hang: "Đường UBND xã Hữu Bằng – Thạch Thất – Hà Nội Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "nhà hàng Mường Nhé",
                    dia_chi_nha_hang: "yên bình, Thạch Thất, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "nhà hàng Trâu Tám Hương",
                    dia_chi_nha_hang: "446, Tiến Xuân, Thạch Thất, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng năm cửa ô",
                    dia_chi_nha_hang: "Đường không tên, Tiên Xuân, Thạch Thất, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Như Y",
                    dia_chi_nha_hang: "Xã Lai Thượng, Thạch Thất, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Phú Bình 1",
                    dia_chi_nha_hang: "Quốc lộ 21A, Thạch Hòa, Thạch Thất, Hà Nội",
                    anh_nha_hang:" ",   
                },

            ],
    },
    {
        anh_khu_vuc : "img/Huyện Thanh oai.jpg",
        ten_khu_vuc : "Huyện Thanh Oai",
        id : 27,
            nha_hang : [
                {
                    ten_nha_hang: "Nhà Hàng Seoul Korea",
                    dia_chi_nha_hang: "24, Tổ 1, Thị Trấn Kim Bài, Huyện Thanh Oai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Sông Đáy",
                    dia_chi_nha_hang: "Vân Đồng, Xuân Dương, Thanh Oai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Hải Thiết ",
                    dia_chi_nha_hang: "Tổ 1, Thị Trấn Kim Bài, Huyện Thanh Oai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Đệ Nhất Lẩu",
                    dia_chi_nha_hang: "1 LK2, Khu Đô Thị Đại Thanh, Thanh Oai, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Sơn Hiến ",
                    dia_chi_nha_hang: "1, Kim Bài, Xóm 1, Thị Trấn Kim Bài, Huyện Thanh Oai, Hà Nội",
                    anh_nha_hang:" ",   
                },
 
            ],
    },
    {
        anh_khu_vuc : "img/Huyện Thanh Trì.jpg",
        ten_khu_vuc : "Huyện Thanh Trì",
        id : 28,
            nha_hang : [
                {
                    ten_nha_hang: "Nhà hàng dê núi Tú Chảnh",
                    dia_chi_nha_hang: "Liên Ninh, Thanh Trì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Chim Quê Ba Miền",
                    dia_chi_nha_hang: "Lô G5, Yên Xá – Tân Triều, Huyện Thanh Trì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Gà Tươi Kinh Bắc",
                    dia_chi_nha_hang: "42 Cầu Bươu, Huyện Thanh Trì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Victory Ngọc Hồi",
                    dia_chi_nha_hang: "GD2 14, 15 Khu Công nghiệp Ngọc Hồi, Huyện Thanh Trì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng lẩu nướng BBQ Anh Tuấn",
                    dia_chi_nha_hang: "Số 17 ngõ Nhị Vị, thôn 1, xã Đông Mỹ, huyện Thanh Trì, TP. Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu Nướng Tuấn Voi",
                    dia_chi_nha_hang: "Đường mới tự khoát, Ngũ Hiệp, Thanh Trì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nướng Cung Đình",
                    dia_chi_nha_hang: "TT8-25 đường Quang Lai, Thanh Trì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhị quán",
                    dia_chi_nha_hang: "TT6D Khu Đấu Giá Tứ Hiệp – Thanh Trì – Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Anh Quân",
                    dia_chi_nha_hang: "Số 9, Cầu Hữu Hòa, Huyện Thanh Trì, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà hàng Ngày mới",
                    dia_chi_nha_hang: "Tứ Hiệp, Văn Điển, Thanh Trì, Hà Nội",
                    anh_nha_hang:" ",   
                },

            ],
    },
    {
        anh_khu_vuc : "img/Huyện Thường tín.jpg",
        ten_khu_vuc : "Huyện Thường Tín",
        id : 29,
            nha_hang : [
                {
                    ten_nha_hang: "Madam Yến",
                    dia_chi_nha_hang: "Khu tập thể Cấp 3, Huyện Thường Tín, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "1977",
                    dia_chi_nha_hang: "Nhị Khê, Huyện Thường Tín, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quà vặt Tom & Mit",
                    dia_chi_nha_hang: "145 Trần Phú, Huyện Thường Tín, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Sắc Huế",
                    dia_chi_nha_hang: "156 Trần Phú, Huyện Thường Tín, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Gà Rán Mr. Jiliu",
                    dia_chi_nha_hang: "Khu đấu giá, Đường Nguyễn Du, Huyện Thường Tín, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Chè Bưởi An Giang Minh Tâm",
                    dia_chi_nha_hang: "Số 116 Nguyễn Phi Khanh, Huyện Thường Tín, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Buffet Lẩu Nướng Sogogi",
                    dia_chi_nha_hang: "101 Trần Phú, Huyện Thường Tín, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Chay Sen Việt",
                    dia_chi_nha_hang: "Hà Hồi, Huyện Thường Tín, Hà Nội",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Bánh Xèo Cô Hưởng",
                    dia_chi_nha_hang: "Số 10, Lô 1, KĐDV Cầu Dừa, Huyện Thường Tín, Hà Nội",
                    anh_nha_hang:" ",   
                },

            ]
    },
    {
        anh_khu_vuc : "img/Huyện ứng hòa.jpg",
        ten_khu_vuc : "Huyện Ứng Hòa",
        id : 30,
            nha_hang : [
                {
                    ten_nha_hang: "Nhà Hàng Vịt Nghiêm Huyền",
                    dia_chi_nha_hang: "QL21B, Liên Bạt, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Cửa Hàng Beer Hn",
                    dia_chi_nha_hang: "thôn Cầu, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Hà Hiền",
                    dia_chi_nha_hang: "Họa Vũ, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Lẩu Nướng Manha",
                    dia_chi_nha_hang: "Đồng Tiến, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Phở Vương Hồng",
                    dia_chi_nha_hang: "DT 426, Trầm Lộng, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Baby Shop Minh Hiệp",
                    dia_chi_nha_hang: "Đoàn Xá, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán Ăn Tư Xuyến",
                    dia_chi_nha_hang: "QL21B, Hoà Nam, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Cây Đa Quán",
                    dia_chi_nha_hang: "Cống Khê, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán Cơm Hồng Nhung",
                    dia_chi_nha_hang: "QL21B, Quảng Phú Cầu, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Phở Bún Sốt Vang",
                    dia_chi_nha_hang: "Đường tốc 426, Hoa Lâm, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán Ăn Thanh Thủy 52",
                    dia_chi_nha_hang: "52 QL21B, TT. Vân Đình, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Yến Yến",
                    dia_chi_nha_hang: "Đồng Tiến, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Gt Xà Cừ",
                    dia_chi_nha_hang: "ĐT.426, Trầm Lộng, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán Vinh Hói",
                    dia_chi_nha_hang: "Đường tỉnh 76, Hoà Xa, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Quán Bia Hơi",
                    dia_chi_nha_hang: "thôn Thần, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },
                {
                    ten_nha_hang: "Nhà Hàng Gà Tươi Mạnh Hoạch",
                    dia_chi_nha_hang: "Trung Tâm Thương Mại Thị Trấn Vân Đình, Đồng Tiến, Ứng Hòa, Hà Nội, Vietnam",
                    anh_nha_hang:" ",   
                },

            ],
    },
]

{
    function khuvuc(data,) {
        if (conten) {
            let chon_khu_vuc = document.querySelector(".chon_khu_vuc");
            chon_khu_vuc.innerHTML = '';
            for (let item of data) {
                chon_khu_vuc.innerHTML += 
                `                
                    <div class="khu_vuc">
                        <a href="thongtinnhahang.html?id=${item.id}">
                            <img src="${item.anh_khu_vuc}" alt="" class="anh_khu_vuc">
                            <p class="ten_khu_vuc">${item.ten_khu_vuc}</p>
                        </a>
                    </div>
                `   
            }
        }
    }
    let conten = document.querySelector(".chon_khu_vuc");
    khuvuc(khu_vuc)     
}

// tạo trang mới 

function NEWWEB(mang_du_lieu) {
    let id = new URLSearchParams(window.location.search).get('id');
    let data_trang_moi = mang_du_lieu.find((item) => { return item.id == id }) ;

    let trangmoi = document.querySelector(".trangmoi");
    let thongtin = document.querySelector(".thongtin");
    if (trangmoi) {
        //header trang moi
        let header_page_2 = document.querySelector(".header_page_2");
        header_page_2.innerHTML = `
        <img src="${data_trang_moi.anh_khu_vuc}" alt="" class="banner_page_2">
        <h1>Sau đây là các nhà hàng có trong khu vực bạn chọn</h1>
        `

        //conten trang moi
        for (let i = 0; i<mang_du_lieu.length; i++) {
        thongtin.innerHTML +=`
            <div class="thong_tin_nha_hang">
                    <p>${i+1}.${data_trang_moi.nha_hang[i].ten_nha_hang}</p>
                    <p>Địa chỉ: ${data_trang_moi.nha_hang[i].dia_chi_nha_hang}</p>
            </div>
         `
        }

        // //footer trang moi ------- dang bug
        // let footer_page_2 = document.querySelector(".footer_page_2");
        // footer_page_2.innerHTML = `
        // <h1>${data_trang_moi.ten_khu_vuc}</h1>
        // `

    }
}   
NEWWEB(khu_vuc)

        //footer trang moi ------- dang bug
        let footer_page_2 = document.querySelector(".footer_page_2");
        footer_page_2.innerHTML = `
        <h1>h1llo</h1>
        `

