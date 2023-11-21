const tabItems = document.querySelectorAll('.tab-item');
const tabActive = document.querySelector(".tab-item.active");
const underLine = document.querySelector('.under-line');
underLine.style.left = tabActive.offsetLeft + 'px';
underLine.style.width = tabActive.offsetWidth + 'px';

tabItems.forEach( (item) => {
    item.onclick = function () {
        document.querySelector(".tab-item.active").classList.remove('active'); //nếu cùng có 2 class thì remove active
        this.classList.add("active"); //khi click thì thêm class active vào chính đối tượng click
        underLine.style.left = this.offsetLeft  + 'px';// chính đối tượng đang click (là đối tượng chứa cả 2 class bên trên) sẽ tiến hành change thuộc tính CSS
        underLine.style.width = this.offsetWidth + 'px';
    }
})