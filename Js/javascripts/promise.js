// nơi lưu trữ thông tin users( dạng bảng array[])
var users = [
    {
        id: 1,
        name: 'Quoc Loi',
    },
    {
        id: 2,
        name: 'Duy Huynh',
    },
    {
        id: 3,
        name: 'Dinh Thi',
    },
    // ....
];

var comments = [
    {
        id: 1,
        users_id: 1,
        content: "Anh son chua ra video :("
    },
    {
        id: 2,
        users_id: 2,
        content: "Vua ra xong em oi"
    },
    {
        id: 1,
        users_id: 1,
        content: "ok luôn em :("
    },
    {
        id: 2,
        users_id: 2,
        content: "oke "
    },
]
// back end -- trả API về -- front-end lấy về thông từ API 
//b1: gọi API lấy comment trước
//b2: Từ comment lấy ra user_id,
//b3: từ user_id lấy ra user tương ứng

//1.array
// 2. fuction, callback
// 3. promise
// 4. Dom

// Fake API
function getComments() {
    return new Promise(function (resole) {
        // mô phỏng mạng bị chậm
        setTimeout(function () {
            // lấy dữ liệu từ comment
            resole(comments)
        }, 1000);
    });
}

// hàm lấy user thông qua user_id từ dữ liệu comments
function getUserByIds(userIds) {
    return new Promise(function (resole) {
        // filter lọc phần từ trong mảng với điều kiện đã cho
        var result = users.filter(function (user) {
            // includes -- kiểm tra trong 1 mảng có chứa giá trị là user.id hay không
            // lọc ra những ông user nằm trong list id này thôi
            return userIds.includes(user.id)
        });
        setTimeout(function () {
            resole(result);
        }, 1000);
    }, 1000);
}

getComments()
    .then(function (comments) {
        // lấy cả list user-id
        var userIds = comments.map(function (comments) {
            // dùng hàm map để lấy ra user_id -- lấy ra thông tin theo yêu cầu
            return comments.users_id;
            
        });
        console.log(userIds);
        // hàm lấy ra được những thông tin khi truyền id vào
        //  Trong then là hàm return về 1 promise
        return getUserByIds([1, 2])
            .then(function (users) {
                return {
                    users: users,
                    comments: comments,
                };
            });
    })
    .then(function (data) {
        console.log(data)

        var comentBlock = document.getElementById('comment-block');

        var html = '';
        data.comments.forEach(function (comment) {
            // get ra user tương ứng
            var user = data.users.find(function (user) {
                return user.id == comment.users_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        comentBlock.innerHTML = html;
    });

// viết ra 1 hàm để lấy đúng userid 1  và 2 thôi




