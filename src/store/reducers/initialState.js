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
  usernameArticles: [],
  articleStats: []
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
  followers: null,
  following: null,
};

export const viewArticleState = {
  article: {},
  error: null,
  isLoading: false,
  isCompleted: false,
  keyword: null,
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

export const comments = {
  comments: null,
  error: null,
  isLoading: false,
  isCompleted: false,
};

export const searchInitialState = {
  articles: [],
  isLoading: false,
  isCompleted: false,
  error: null
};

export const notifications = {
  notifications: null,
  notificationStatus: null,
  error: null,
};

export const rateState = {
  rate: null,
  error: null,
  isLoading: false,
  isCompleted: false,
};

export const articleListing = {
  selectedCategory: 0,
  articleList: null,
};
