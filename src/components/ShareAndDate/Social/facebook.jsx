
const Facebook = (url, content, title, description) => {
  const setUrl = `${process.env.FACEBOOK_SHARE_URL}share?app_id=${process.env.FACEBOOK_SHARE_APP_ID}&display=popup&title=${title}&description=${description}&quote=${title}
  &caption=${description}&href=${url}`;
  window.open(setUrl, 'FacebookWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600');
};
export default Facebook;
