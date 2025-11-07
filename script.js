document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('showPassword');
  const passwordInput = document.getElementById('password');

  if (toggle && passwordInput) {
    toggle.addEventListener('change', function () {
      passwordInput.type = this.checked ? 'text' : 'password';
    });
  }
});