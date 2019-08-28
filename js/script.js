// tooltip 啟動需要的程式碼
$('[data-toggle="tooltip"]').tooltip();

// 阻止 輪播圖 往上移動
$('.carousel-control-prev,.carousel-control-next').on('click', function(event) {
    $('html,body').stop();
});

// Bootstrap驗證表單
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
