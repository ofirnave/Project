const form = document.getElementById('contactForm');

function check(id, cond) {
    document.getElementById(id).classList.toggle('invalid', !cond);
    return cond;
}

function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullname = document.getElementById('fullName').value.trim();
    const phone    = document.getElementById('phone').value.trim();
    const email    = document.getElementById('email').value.trim();
    const subject  = document.getElementById('subject').value.trim();
    const msg      = document.getElementById('message').value.trim();

    const ok = [
        check('grp-name',    fullname.length >= 3),
        check('grp-phone',   phone.replace(/\D/g, '').length >= 10),
        check('grp-email',   validEmail(email)),
        check('grp-subject', subject.length >= 5),
        check('grp-message', msg.length >= 10),
    ].every(Boolean);

    if (ok) {
        fetch("http://localhost:3000/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullname, email, phone, subject, msg })
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            form.style.display = 'none';
            document.getElementById('successBox').style.display = 'block';
        })
        .catch(err => {
            alert('שגיאה בשליחה לשרת. ודא שהשרת רץ!');
            console.error(err);
        });
    }
});

document.getElementById('successBox').addEventListener('click', function () {
    form.reset();
    form.style.display = 'block';
    document.getElementById('successBox').style.display = 'none';
});
