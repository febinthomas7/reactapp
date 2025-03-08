import React, { useState } from "react";
import { styled } from "styled-components";

const MyImage = ({ img = [] }) => {
  const [pimgage, setPimage] = useState(img[0]);

  console.log(img);

  return (
    <Wrapper>
      <div className="grid ">
        {img.map((curelem, index) => {
          return (
            <figure key={index}>
              <img
                src={curelem}
                alt={curelem}
                className="box-image--style"
                onClick={() => setPimage(curelem)}
              />
            </figure>
          );
        })}
      </div>

      <div className="main-screen">
        <img src={pimgage} alt={pimgage} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 0.4fr 1fr;
  align-items: center;
  gap: 2rem;

  .grid {
    display: grid;
    gap: 1rem;
  }

  figure {
    width: 150px;
    grid-template-columns: 0.4fr 1fr;

    img {
      height: 100%;
      width: 100%;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;
    }
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px 3px;
    }
  }
  .main-screen {
    width: 309px;
    height: 212px;

    img {
      width: 309px;
      height: 212px;
    }
  }
`;
export default MyImage;
