import { getAsyncActionTypes } from "../utils";

export const TYPE_SET_CHAPTER_INDEX = getAsyncActionTypes("SET_CHAPTER_INDEX");
export const TYPE_SET_PAGE_INDEX = getAsyncActionTypes("SET_PAGE_INDEX");
export const TYPE_SET_HEADER_TITLE = getAsyncActionTypes("SET_HEADER_TITLE");
export const TYPE_SET_COMPLETED = getAsyncActionTypes("SET_COMPLETED");

export const setChapterIndexRequest = (chapterIndex) => ({
  type: TYPE_SET_CHAPTER_INDEX.REQUEST,
  payload: { chapterIndex },
});
export const setPageIndexRequest = (pageIndex) => ({
  type: TYPE_SET_PAGE_INDEX.REQUEST,
  payload: { pageIndex },
});
export const setHeaderTitleRequest = (headerTitle) => ({
  type: TYPE_SET_HEADER_TITLE.REQUEST,
  payload: { headerTitle },
});
export const setCompletedRequest = (chapter, page, status) => ({
  type: TYPE_SET_COMPLETED.REQUEST,
  payload: {
    chapter,
    page,
    status
  },
});