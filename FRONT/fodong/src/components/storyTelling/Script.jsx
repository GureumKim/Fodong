// import { Button } from "../Common";
import React, { useEffect, useState } from "react";
import "./StoryTelling.css";
import DummyScript from "./DummyScript";
import { useParams, useNavigate } from "react-router-dom";
import StoryEndModal from "./StoryEndModal";

const Script = ({ scriptPage, setScriptPage, stopVideo }) => {
  const { page: pageParam } = useParams();
  const [page, setPage] = useState(parseInt(pageParam, 10) || 1);
  // const [page, setPage] = useState(useParams().page);
  const [scriptIndex, setScriptIndex] = useState(0);
  // console.log(page);
  const [script, setScript] = useState(DummyScript[page - 1][scriptIndex].text);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [prevPage, setPrevPage] = useState(page)

  useEffect(() => {
    //   setScript(DummyScript[page - 1][scriptIndex].text);
    // }, [scriptIndex, page]);

    const numPage = parseInt(pageParam, 10);
    // console.log(numPage);
    if (numPage !== page) {
      setPage(numPage);
    
      // if (numPage !== prevPage) {
      //   setScriptIndex(0);
      //   // setScript(DummyScript[page - 1][0].text);
      //   setPrevPage(numPage);
      // }
      setScriptIndex(scriptPage);
    }
  }, [pageParam, page, scriptPage]);

  useEffect(() => {

    if (DummyScript[page - 1] && DummyScript[page - 1][scriptIndex]) {
      setScript(DummyScript[page - 1][scriptIndex].text);
    }}
, [scriptIndex, page]);



  const handleNextScript = () => {
    const scriptLength = DummyScript[page - 1].length;
    console.log(scriptIndex)
    console.log(page)
    console.log(scriptLength)
    if (scriptIndex + 1 < scriptLength) {
      setScriptIndex((idx) => idx + 1);
    } else if (page === DummyScript.length && scriptIndex === scriptLength -1) {
      showModal();
    }
    else if (page < DummyScript.length) {
      // console.log(scriptIndex)
      // console.log(page )
      // console.log(setPage)
      const nextPage = page + 1;
      navigate(`/storytelling/${nextPage}`);
      setPage(nextPage);
      setScriptIndex(0);
      setScript(DummyScript[nextPage - 1][0].text);
    } 
  };

  const showModal = () => {
    console.log(123123)
    setIsModalOpen(true); 
  }

  // console.log(script);
  return (
    // <div className="main-content" >
      <div className="script-container">
        <div className="script-text-container">
          <h1 className="script_text">{script}</h1>
        </div>
        <div className="bottom" style={{margin:'0px'}}>
          <button className="story_button" onClick={handleNextScript}>
            다음
          </button>
          {isModalOpen && <StoryEndModal onClose={stopVideo} />}
        </div>
      </div>
    // </div>
  );
};

export default Script;
