import React, { useEffect } from "react";
import { useProductContext } from "./context/ProductContext";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import PageNavigation from "./components/PageNavigation";
import Container from "./components/Container";
import MyImage from "./components/MyImage";
import FormatPrice from "./helpers/FormatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";
import LinearIndeterminate from "./components/LinearIndeterminate";
import Review from "./components/Review";

// const Api = "https://api.pujakaitem.com/api/products";
const Api = "https://dummyjson.com/products";
const Singleproduct = () => {
  const { singleProduct, isSingleLoading, getSingleProduct } =
    useProductContext();

  const { id } = useParams();

  // const {
  //   id: alias,
  //   name,
  //   company,
  //   price,
  //   description,
  //   stars,
  //   stock,
  //   reviews,
  //   title,
  //   thumbnail,
  // } = singleProduct || {};

  // useEffect(() => {
  //   // getSingleProduct(`${Api}?id=${id}`);
  //   getSingleProduct(`${Api}/${id}`);

  //   console.log("hi", singleProduct[0]);
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  useEffect(() => {
    getSingleProduct(`${Api}/${id}`);
    console.log("hi", singleProduct[0]?.title);
  }, []);
  if (isSingleLoading) {
    return <LinearIndeterminate />;
  }

  return (
    <Wrapper>
      <PageNavigation name={singleProduct[0]?.title} />
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product-images">
            <MyImage img={singleProduct[0]?.images} />
          </div>

          <div className="product-data">
            <Star
              stars={singleProduct[0]?.rating}
              reviews={singleProduct[0]?.reviews}
            />

            <h2>{singleProduct[0]?.title}</h2>

            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={singleProduct[0]?.price} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the day
              <FormatPrice
                price={singleProduct[0]?.price}
                discountPercentage={singleProduct[0]?.discountPercentage}
              />
            </p>
            {/* <img src={singleProduct[0]?.thumbnail} alt="" /> */}
            <p>{singleProduct[0]?.description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>
                  {singleProduct[0]?.shippingInformation ||
                    "Ships within a few days"}
                </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>
                  {singleProduct[0]?.warrantyInformation || "Standard Warranty"}
                </p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>
                  {singleProduct[0]?.returnPolicy ||
                    "Return Policy Not Available"}
                </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span>{singleProduct[0]?.availabilityStatus}</span>
              </p>
              <p>
                ID:
                <span>{id}</span>
              </p>
              <p>
                Brand:
                <span>{singleProduct[0]?.brand}</span>
              </p>
              <p>
                Weight:
                <span>{singleProduct[0]?.weight}</span>
              </p>
              <p>
                Category:
                <span>{singleProduct[0]?.category}</span>
              </p>
            </div>
            {/* <hr /> */}

            {singleProduct[0]?.stock > 0 && (
              <AddToCart product={singleProduct} />
            )}

            <Review
              stars={singleProduct[0]?.rating}
              reviews={singleProduct[0]?.reviews}
            />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem;
  }
  .product-images {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #f3f3f3;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: bold;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
    }
  }
`;

export default Singleproduct;
