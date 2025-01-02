
function showDetails(takimId) {
    const details = {
        6: "Şuan geliştirme aşamasındayız.İletişim kısmındaki numaraları arayarak detaylı bilgi alabilirsiniz.Anlayışınız için Teşekkür ederiz."
    };
    alert(details[takimId]);
}
document.getElementById('cart-btn').addEventListener('click', function() {
    window.location.href = '../özel/özeltasarım.html';
});
