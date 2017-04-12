/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const LOAD_POPULAR = 'boilerplate/App/LOAD_POPULAR';
export const LOAD_POPULAR_SUCCESS = 'boilerplate/App/LOAD_POPULAR_SUCCESS';
export const CHANGE_SEARCH_QUERY = 'boilerplate/App/CHANGE_SEARCH_QUERY';
export const LOAD_WATCH = 'boilerplate/App/LOAD_WATCH';
export const RETR_FAV = 'boilerplate/App/RETR_FAV';
export const FETCH_MOVIE_DB = 'boilerplate/App/FETCH_MOVIE_DB';
export const FETCH_MOVIE_DB_SUCCESS = 'boilerplate/App/FETCH_MOVIE_DB_SUCCESS';
export const DEFAULT_LOCALE = 'en';
