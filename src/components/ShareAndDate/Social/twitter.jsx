
const Twitter = (url, content) => {
  const setUrl = `${process.env.TWITTER_SHARE_URL}tweet?url=${encodeURIComponent(url)}&via=AuthorsHaven&text=${content}`;
  window.open(setUrl, 'TwitterWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600');
};

export default Twitter;
