// Отправка данных в бота
function sendOrderToBot(productName, price) {
    const data = {
        product: productName,
        price: price,
        user_id: tg.initDataUnsafe.user.id,
        username: tg.initDataUnsafe.user.username
    };
    
    // Здесь можно отправить данные на ваш сервер
    console.log('Заказ:', data);
    
    tg.showPopup({
        title: 'Заказ принят!',
        message: `Вы выбрали ${productName}. С вами свяжутся в течение 5 минут.`,
        buttons: [{ type: 'ok' }]
    });
}