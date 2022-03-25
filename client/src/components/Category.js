import styled from "styled-components";
import car_pr_gif from "../Utility/car_pr.gif";
import fur_gif from "../Utility/fur.gif";
import elec_gif from "../Utility/elec.gif";
import book_gif from "../Utility/book.gif";
import windy_gif from "../Utility/windy.gif";
const Category = (props) => {
  return (
    <Container>
      <h3>Category</h3>
      <p>The best deals are available </p>
      <Content>
        <div className="box">
          <Wrap>
            <img src={car_pr_gif} alt="" />
            {/* <video autoPlay loop playsInline>
                        <source src="/video/1564676714-pixar.mp4" type="video/mp4" />
                    </video> */}
          </Wrap>
          <h5>Cars</h5>
        </div>
        <div className="box">
          <Wrap>
            <img src={elec_gif} alt="" />
            {/* <video autoPlay loop playsInline>
                        <source src="/video/1564676714-pixar.mp4" type="video/mp4" />
                    </video> */}
          </Wrap>
          <h5>Electronics</h5>
        </div>
        <div className="box">
          <Wrap>
            <img src={fur_gif} alt="" />
            {/* <video autoPlay loop playsInline>
                        <source src="/video/1564676714-pixar.mp4" type="video/mp4" />
                    </video> */}
          </Wrap>
          <h5>Furniture</h5>
        </div>
        <div className="box">
          <Wrap>
            <img src={book_gif} alt="" />
            {/* <video autoPlay loop playsInline>
                        <source src="/video/1564676714-pixar.mp4" type="video/mp4" />
                    </video> */}
          </Wrap>
          <h5>Books</h5>
        </div>

        <div className="box">
          <Wrap>
            <img src={windy_gif} alt="" />
            {/* <video autoPlay loop playsInline>
                        <source src="/video/1564676714-pixar.mp4" type="video/mp4" />
                    </video> */}
          </Wrap>
          <h5>Fashion</h5>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
  background-color: none;

  h3 {
    margin-top: 10px;
    margin-left: 40px;
    font-size: 35px;
    font-weight: 500;
    text-decoration: underline;
    color: #000;
    margin-bottom: 2px;
    font-family: "Heebo", sans-serif;
  }

  p {
    margin-left: 40px;
    margin-top: 2px;
    font-size: 20px;
    color: #9f33ff;
    font-style: underline;
    font-family: "Heebo", sans-serif;
  }
`;

const Content = styled.div`
  margin-top: 10px;
  padding: 30px 0px 26px;
  /* margin-left: 10px; */
  display: grid;
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

// const Wrap = styled.div`
// padding-top: 56.25%;
// border-radius: 10px;
// box-shadow: rgba(10px 10px 01px 0.9px);
// //box-shadow: rgb( 0 0 0 / 69%) 0px 26px 30px --10px, rgb( 0 0 0 / 73%) 0px 16px 10px -10px;
// cursor: pointer;
// overflow: hidden;
// position: relative;
// transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
// border: 1px solid lightgray;

// img {
//     inset: 0px;
//     display: block;
//     height: 100%;
//     object-fit: cover;
//     opacity: 1;
//     position: absolute;
//     transition: opacity 500ms ease-in-out 0s;
//     width: 100%;
//     z-index: 1;
// }
// video {
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     top: 0px;
//     opacity: 0;
//     z-index: 0;
//     left: 0;
//     justify-content: center;
//     align-items: center;
//   }

//   &:hover {
//     box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
//       rgb(0 0 0 / 72%) 0px 30px 22px -10px;

//     transform: scale(1.05);
//     border-color: rgba(249, 249, 249, 0.8);

//     video {
//       opacity: 1;
//     }
//   }
// `;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 9%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 2px solid lightblue;

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
    background-color: rgba(0, 0, 0, 0.1);
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
    left: 0;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: 2px lightblue;
    background-color: none;

    video {
      opacity: 1;
    }
  }
`;
export default Category;
