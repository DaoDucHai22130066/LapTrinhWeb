let currentIndex = 0; // Vị trí ban đầu cho carousel
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function scrollCarousel(direction) {
    const visibleItems = 3; // Số sản phẩm hiển thị cùng một lúc
    const itemWidth = items[0].clientWidth + parseInt(getComputedStyle(items[0]).marginRight); // Lấy chiều rộng bao gồm khoảng cách
    const maxIndex = totalItems - visibleItems; // Số index tối đa để không có khoảng trống ở cuối
    const track = document.querySelector('.carousel-track');
    const scrollAmount = track.offsetWidth / visibleItems; // Cuộn bằng 1/3 chiều rộng track
    
    // Cập nhật vị trí hiện tại
    currentIndex += direction;

    // Kiểm tra để không vượt quá các chỉ số hợp lệ
    if (currentIndex < 0) {
        currentIndex = 0; // Nếu đang ở sản phẩm đầu tiên, không cuộn thêm nữa
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex; // Nếu đang ở sản phẩm cuối cùng, không cuộn thêm nữa
    }

    // Dịch chuyển carousel
    track.style.transform = `translateX(${-currentIndex * itemWidth}px)`;

    // Kiểm tra để ẩn hoặc hiển thị mũi tên cuộn
    toggleButtons();
}

function toggleButtons() {
    const leftButton = document.querySelector('.carousel-button.left');
    const rightButton = document.querySelector('.carousel-button.right');

    // Ẩn nút trái nếu đang ở sản phẩm đầu tiên
    if (currentIndex === 0) {
        leftButton.style.display = 'none';
    } else {
        leftButton.style.display = 'block';
    }

    // Ẩn nút phải nếu đã cuộn đến sản phẩm cuối cùng
    if (currentIndex >= totalItems - 3) {
        rightButton.style.display = 'none';
    } else {
        rightButton.style.display = 'block';
    }
}

// Gọi hàm này khi trang được tải để kiểm tra ban đầu
toggleButtons();

