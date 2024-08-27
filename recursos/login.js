function verifyPin() {
    const pin = document.getElementById('pinInput').value;
    const user = document.getElementById('user').value;
    const correctPIN = '139127';
    const correctUser = 'admin';

    if (pin === correctPIN && user === correctUser) {
        window.location.href = "http://https://entriti.github.io/DashboardNovo/dashboard.html#";
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}
