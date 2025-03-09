import { styled } from "styled-components";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import FilterSection from "./components/FilterSection";
import { useFilterContext } from "./context/FilterContext";
import LinearIndeterminate from "./components/LinearIndeterminate";

const Product = () => {
  const { loading } = useFilterContext();

  if (loading) {
    return <LinearIndeterminate />;
  }
  return (
    <Wrapper>
      <div className="container grid grid-filter-column grid-filter-rows">
        <div>
          <FilterSection />
        </div>
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>

          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
    padding-top: 40px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-rows {
      grid-template-rows: 0fr 1fr;
      grid-template-columns: none;
      padding-top: 40px;
    }
  }
`;

export default Product;
