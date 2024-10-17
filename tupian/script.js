// 获取所有图片元素
const galleryItems = document.querySelectorAll('.gallery-item');

// 获取模态框相关元素
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

let scale = 1; // 初始缩放比例

// 遍历每个图片，添加鼠标事件
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.2)'; // 放大效果
        item.style.zIndex = '10'; // 确保该图片在最上层
        item.style.filter = 'none'; // 移除模糊效果
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)'; // 恢复原大小
        item.style.zIndex = '1'; // 恢复原来的层级
        item.style.filter = 'blur(4px)'; // 恢复模糊效果
    });

    // 点击事件，打开模态框并显示放大的图片
    item.addEventListener('click', () => {
        modal.style.display = "flex"; // 使用 flexbox 显示模态框
        modalImg.src = item.src; // 设置模态框中的图片为点击的图片
        captionText.innerHTML = item.alt; // 设置图片描述
        scale = 1; // 重置缩放比例
        modalImg.style.transform = `scale(${scale})`; // 设置初始缩放
    });
});

// 点击关闭按钮时关闭模态框
closeBtn.addEventListener('click', () => {
    modal.style.display = "none"; // 隐藏模态框
    scale = 1; // 重置缩放比例
});



// 鼠标滚轮事件，用于缩放图片
modalImg.addEventListener('wheel', (event) => {
    event.preventDefault(); // 阻止默认滚动行为

    // 根据滚轮方向调整缩放比例
    if (event.deltaY < 0) {
        scale += 0.1; // 放大
    } else {
        scale -= 0.1; // 缩小
    }

    // 设置最大最小缩放限制
    scale = Math.min(Math.max(1, scale), 5); // 限制缩放比例在1到5之间

    // 设置图片的缩放效果
    modalImg.style.transform = `scale(${scale})`;
});
