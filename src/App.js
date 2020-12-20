import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Player from "./components/Player";
import FooterNav from "./components/FooterNav/FooterNav";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import { getCourseRequest } from "./store/actions/course.action";

const App = ({ course, getCourse }) => {
  const [chapterIndex, setChapterIndex] = useState(-1);
  const [pageIndex, setPageIndex] = useState(0);
  const [headerTitle, setHeaderTitle] = useState("Main Menu");
  let totalPageCount = 0;
  let totalChapterCount = 0;
  useEffect(() => {
    getCourse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChapterIndex = (index) => {
    setChapterIndex(index);
    setPageIndex(0);
  };
  const handlePageIndex = (index) => {
    if (index === totalPageCount) {
      handleChapterIndex(chapterIndex + 1);
    } else {
      setPageIndex(index);
    }
  };
  const initialCourse = course;

  if (initialCourse && chapterIndex > -1) {
    totalPageCount = initialCourse.chapters[chapterIndex].pages.length;
    totalChapterCount = initialCourse.chapters.length;
  }

  return (
    <div className="App">
      <div className="flex flex-col justify-center">
        <HeaderNav
          headerTitle={headerTitle}
          setChapterIndex={handleChapterIndex}
          setHeaderTitle={setHeaderTitle}
        />
        <Player
          course={initialCourse}
          chapterIndex={chapterIndex}
          pageIndex={pageIndex}
          setChapterIndex={handleChapterIndex}
          setHeaderTitle={setHeaderTitle}
        />
        {chapterIndex > -1 ? (
          <FooterNav
            pageIndex={pageIndex}
            chapterIndex={chapterIndex}
            totalPageCount={totalPageCount}
            totalChapterCount={totalChapterCount}
            setPageIndex={handlePageIndex}
            setChapterIndex={handleChapterIndex}
          />
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    course: { course },
  } = state;
  return { course };
};

const mapDispatchToProps = (dispatch) => ({
  getCourse: () => dispatch(getCourseRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
