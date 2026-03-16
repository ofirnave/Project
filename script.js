
    const form = document.getElementById('contactForm');

    function check(id, cond) {
        document.getElementById(id).classList.toggle('invalid', !cond);
        return cond;
    }

    function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name    = document.getElementById('fullName').value.trim();
        const phone   = document.getElementById('phone').value.trim();
        const email   = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const msg     = document.getElementById('message').value.trim();

        const ok = [
            check('grp-name',    name.length >= 3),
            check('grp-phone',   phone.replace(/\D/g,'').length >= 10),
            check('grp-email',   validEmail(email)),
            check('grp-subject', subject.length >= 5),
            check('grp-message', msg.length >= 10),
        ].every(Boolean);

        if (ok) {
            alert('ההודעה נשלחה בהצלחה! נחזור אליך בקרוב 🏀');
            form.style.display = 'none';
            document.getElementById('successBox').style.display = 'block';
        }
    });

    document.getElementById('successBox').addEventListener('click', function() {
        form.reset();
        form.style.display = 'block';
        document.getElementById('successBox').style.display = 'none';
    });
