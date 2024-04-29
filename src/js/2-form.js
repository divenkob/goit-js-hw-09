const formRef = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[name="email"]'),
    message: document.querySelector('textarea[name="message"]'),
  };
  
  const formData = { email: '', message: '' };
  
  const FEEDBACK_FORM_KEY = 'feedback-form-state';
  
  formRef.form.addEventListener('input', event => {
    const { name, value } = event.target;
  
    formData.email = formRef.email.value;
    formData.message = formRef.message.value;
    localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
  });
  
  if (localStorage.getItem(FEEDBACK_FORM_KEY)) {
    const data = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));
    formRef.email.value = data.email || '';
    formRef.message.value = data.message || '';
  };
  
  formRef.form.addEventListener('submit', event => {
    event.preventDefault();
    if (
      formRef.email.value.trim() === '' ||
      formRef.message.value.trim() === ''
    ) {
      alert('Please, fill in all the fields');
    } else {
      localStorage.removeItem(FEEDBACK_FORM_KEY);
      formRef.form.reset();
      console.log(formData);
      formData.email = '';
      formData.message = '';
    }
  });