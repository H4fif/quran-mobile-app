import { initialPage } from '../constants';

export const getPagination = _page => ({
  limit: initialPage.limit,
  offset: initialPage.limit * (_page - 1),
});
