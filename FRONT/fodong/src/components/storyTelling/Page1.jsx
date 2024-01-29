import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import MainBook from "./img/Mainbook.png";
import "./StoryTelling.css";
import DummyScript from "./DummyScript";


const Page = ({ onPageChange }) => {
  const [imageSrc, setImageSrc] = useState('');
  const  { page : pageParam }  = useParams();
  const page = parseInt(pageParam, 10) || 1;
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(15, pageParam);
    const imgeUrl = require(`./img/background${pageParam}.png`)
    // fetch(`http://.com/api/image?page=${page}`)
      // .then((response) => response.json())
      // .then((data) => setImageSrc(data.imageUrl));

      // const imgeUrl = require(`./img/background${page}.png`)
      setImageSrc(imgeUrl);

  }, [pageParam]);

  const handleNextPage = () => {
    const nextPage = page + 1;
    console.log(28, page)
    if ( nextPage <= DummyScript.length ) {
      navigate(`/storytelling/${nextPage}`);
      // setPage(nextPage);
      onPageChange();
    }
  }
  const handleBeforePage = () => {
    const BeforePage = page - 1;
    console.log(36, page)
    if ( BeforePage >= 1 ) {
      navigate(`/storytelling/${BeforePage}`);
      // setPage(BeforePage);
      onPageChange();
    }
  }
  // ;}

  return (
    <div style={{ 
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'center',
    }}>
      <button style={{
        fontSize: '3rem',
        padding : '10px 20px',
        cursor : 'pointer',
        outline : 'none',
        order: '1',
        background : 'none',
        border : 'none',
        color : '#ADD8E6',
        fontWeight : '700',
      }}
       onClick={handleBeforePage}>
        {'<'}
      </button>
    <div style={{
        flexGrow: '1',
        order : '2'
      }}
      className="story_img">
      <img src={imageSrc} alt={`page ${page}`} style={{width : '50vw', height: '50vh'}}/>
    </div>
      <button style={{
        fontSize: '3rem',
        padding : '10px 20px',
        cursor : 'pointer',
        outline : 'none',
        order: '3',
        color : '#ADD8E6',
        fontWeight : '700',
        background : 'none',
        border : 'none',
      }}
       onClick={handleNextPage}>
        {'>'}
      </button>
    </div>
  );
};

export default Page;
