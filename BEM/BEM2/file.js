// Toast Function
        // Đặt giastrij mặt định cho các biến
        function toast({
            title = '',
            message = '',
            type = 'infor',
            duration = 3000

        })  {
            // Tạo ra một biến main lấy từ id toast
            const main = document.getElementById('toast');
            // kiểm tra nếu có main
            if(main) {
                // Tạo ra toast
                const toast = document.createElement('div');

                // Auto remove toast
                 const autoRemoveID= setTimeout(function (){

                    main.removeChild(toast);
                    }, duration +1000);

                    // Remove toast when clicked
                toast.onclick = function(event){
                    // Nếu bấm trúng vào nút có class toast__close thì gọi hàm remove
                    if(event.target.closest('.toast__close')){
                        main.removeChild(toast);
                        clearTimeout(autoRemoveID);
                    }
                }
            
            // Tạo 1 biến đưa nhiều icon vào gán đúng với từng giá trị
                const icons ={
                    success:`fa-sharp fa-solid fa-circle-check`,
                    infor:`fa-sharp fa-solid fa-circle-info`,
                    warning: `fa-solid fa-triangle-exclamation`,
                    error: `fa-solid fa-triangle-exclamation`

            };
                // Tạo biến icon lấy ra từ icons
                const icon = icons[type];

                // sử dụng biến delay để truyền vào animation động, thời gian chờ xóa
                // tofixed(2) lấy ra 2 số thập phân
                const delay = (duration / 1000).toFixed(2);
                // add class là toast mặc định vào
                toast.classList.add('toast', `toast--${type}`);

                // Lấy biến animation từ css sang để thay đổi giá trị tùy thích dựa vào duration
                toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
                // đưa nội dung con vào bên trong nó 
                toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>

                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>

                <div class="toast__close">
                    <i class="fa-sharp fa-solid fa-rectangle-xmark"></i>
                </div>
                
                `;
                // Đưa toast vào trong main
                main.appendChild(toast);

           }
            

        }

        //Truyền vào tham số ứng với các kiểu khởi tạo bên dưới
        // duration là khoảng thời gian bao lâu mới ẩn (3000 là 3s)
        // Chạy vào là show luôn rồi
        // toast({
        //     title:'Success 123',
        //     message:' 123Các bạn subscribe kênh Youtube F8 Official để nhận thông báo khi có các bài học mới nhé ❤️',
        //     type:'error',
        //     duration: 3000

        // });