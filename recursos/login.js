function verifyPin() {
    const pin = document.getElementById('pinInput').value;
    const user = document.getElementById('user').value;

    const credentials = [
        { user: 'admin', pin: 'madira', url: 'https://entriti.github.io/DashboardNovo/dashboard.html#' },
        { user: 'operacional', pin: 'ope789', url: 'https://entriti.github.io/DashboardNovo/operacional.html#' },
    ];

    const foundUser = credentials.find(cred => cred.user === user && cred.pin === pin);

    if (foundUser) {
        window.location.href = foundUser.url;
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}
