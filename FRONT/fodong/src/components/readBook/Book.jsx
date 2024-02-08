import React, { useRef } from "react";
import FlipPage from "react-pageflip";
import "./book.css";

// A 컴포넌트 정의
const A = () => {
  // 총 페이지 수와 FlipPage 컴포넌트를 조작하기 위한 ref

  const flipBookRef = useRef(null);
  const Image1 = `${process.env.PUBLIC_URL}/img/pinokio/1.webp`;
  const Image2 = `${process.env.PUBLIC_URL}/img/pinokio/2.webp`;
  const Image3 = `${process.env.PUBLIC_URL}/img/pinokio/3.webp`;
  const Image4 = `${process.env.PUBLIC_URL}/img/pinokio/4.webp`;
  const Image5 = `${process.env.PUBLIC_URL}/img/pinokio/5.webp`;
  const Image6 = `${process.env.PUBLIC_URL}/img/pinokio/6.webp`;
  const Image7 = `${process.env.PUBLIC_URL}/img/pinokio/7.webp`;
  const Image8 = `${process.env.PUBLIC_URL}/img/pinokio/8.webp`;
  const pageImages = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];
  const Script = [
    "제페토 할아버지가 마법의 나무로 인형을 만들었어요. 그 이름은 피노키오! 제페토 할아버지는 피노키오가 진짜 소년이 되기를 바랐죠.",
    "피노키오가 갑자기 움직이기 시작했어요. '나 살아있어!' 제페토 할아버지는 피노키오를 사랑으로 가르치기 시작했답니다.",
    "제페토 할아버지는 피노키오를 학교에 보냈어요. 하지만 피노키오는 인형극단에 끌려가고 말았죠.",
    "인형극단 주인의 속임수에 빠진 피노키오. 하지만 친절한 요정의 도움으로 위험에서 벗어났어요.",
    "피노키오는 제페토 할아버지를 찾다가 바다에 빠져 거대한 고래에게 삼켜졌어요. 고래 배 속에서 제페토 할아버지를 만났답니다.",
    "피노키오와 제페토 할아버지는 고래 배 속에서 서로를 꼭 안았어요. 그들은 함께 탈출 계획을 세웠죠.",
    "집으로 돌아온 피노키오는 학교에 다니며 성실하게 살기 시작했어요. 요정의 말대로 좋은 행동을 하기로 했죠.",
    "피노키오의 선한 마음은 결국 마법으로 보상받았어요. 아침에 일어나 보니 피노키오는 진짜 소년이 되었답니다! 제페토 할아버지와 피노키오는 행복하게 살았어요.",
  ];
  const numberOfImages = pageImages.length;
  const totalPage = numberOfImages + 1;
  // 표지 페이지를 위한 컴포넌트
  // React.forwardRef를 사용해 ref를 내부 div로 전달
  const PageCover = React.forwardRef(({ title }, ref) => (
    <div className="page page-cover" ref={ref}>
      <h2>{title}</h2>
      <div className="page-content"></div>
    </div>
  ));

  // 페이지 클릭 시 동작하는 핸들러
  // 이미지가 클릭되면 다음 페이지로 자동으로 넘김
  const handlePageClick = (e) => {
    if (e.target.classList.contains("page-image")) {
      const clickedPageIndex = flipBookRef.current.getPageFlip().getPage();
      flipBookRef.current.getPageFlip().flipTo(clickedPageIndex + 1);
    }
  };

  // FlipPage 컴포넌트와 페이지 렌더링
  return (
    <div
      className="A-con"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="book-container" style={{ width: 900, height: 800 }}>
        <FlipPage
          width={900}
          height={800}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={0}
          maxShadowOpacity={1}
          mobileScrollSupport={true}
          onPageClick={handlePageClick}
          ref={flipBookRef}
        >
          <PageCover title="피 노 키 오" />
          {/* 중간 페이지들을 렌더링합니다. */}
          {Array.from({ length: totalPage - 2 }).map((_, index) => (
            <div key={index} className="page-content">
              {/* 페이지에 이미지 추가 */}

              <div
                className="page-image"
                style={{
                  width: "100%",
                  height: "80%",
                  background: `url(${pageImages[index]}) no-repeat center center`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="script-text">{Script[index]}</div>
            </div>
          ))}
          <PageCover title="THE END" />
        </FlipPage>
      </div>
    </div>
  );
};

export default A;