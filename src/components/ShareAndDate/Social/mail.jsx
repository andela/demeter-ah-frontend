const Mail = (url, title) => {
  const setUrl = `mailto:?subject=${title}&body=Check out this article ${url}`;
  window.open(setUrl, 'MailWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600');
};

export default Mail;
