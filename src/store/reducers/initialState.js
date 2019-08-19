export const resetPassword = {
  response: {},
  isSubmitting: false,
};

export const changePassword = {
  response: {},
  isSubmitting: false,
};

export const articles = {
  openPublishModal: false,
  isSubmitting: false,
  response: {},
  usernameArticles: []
};

export const editProfile = {
  error: null,
  isLoading: false,
  isCompleted: false,
  pictureFile: null
};

export const viewProfile = {
  user: {},
  error: null,
  isLoading: false,
  isCompleted: false,
};

export const membership = {
  followers: [],
  following: [],
};

export const viewArticleState = {
  article: {},
  error: null,
  isLoading: false,
  isCompleted: false,
};

export const relatedArticlesState = {
  articles: {},
  error: null,
  isLoading: false,
  isCompleted: false,
};

export const viewBookmarkedArticle = {
  error: null,
  isLoading: false,
  isCompleted: false,
  articles: [],
};

export const bookmarkArticle = {
  error: null,
  isLoading: false,
  isCompleted: false,
  bookmark: {}
};
