document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('successMessage');

  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const payload = {
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      message: formData.get('message') || ''
    };

    const url = 'https://script.google.com/macros/s/AKfycbz6Xmbh_pBzLJSUbDq8dZRoKaqAJN8_Wf-E2NlRFutbYCkRv88D6CW45Mdffko_xKJY/exec';

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: new URLSearchParams(payload),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      });

      if (response.ok) {
        form.reset();
        if (success) {
          success.hidden = false;
          success.textContent = 'Спасибо! Ваша заявка отправлена.';
        }
      } else {
        if (success) {
          success.hidden = false;
          success.textContent = 'Ошибка отправки. Попробуйте позже.';
        }
      }
    } catch (error) {
      if (success) {
        success.hidden = false;
        success.textContent = 'Ошибка отправки. Проверьте URL Apps Script.';
      }
    }
  });
});
