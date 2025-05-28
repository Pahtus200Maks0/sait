// Для первой рекламы (рабочий крестик)
document.querySelector('.ad-close').addEventListener('click', function() {
    this.parentElement.style.display = 'none';
});

// Для второй рекламы (фейковый крестик)
document.querySelector('.fake-close').addEventListener('click', function() {
    // Вместо закрытия - показываем сообщение
    alert("Ха! Вы думали, это так просто? 😈");
    
    // Можно добавить анимацию "тряски" для эффекта
    this.parentElement.style.animation = "shake 0.5s";
    setTimeout(() => {
        this.parentElement.style.animation = "";
    }, 500);
});