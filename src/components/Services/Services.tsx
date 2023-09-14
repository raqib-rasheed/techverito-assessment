import styled from "styled-components";
import { ServicesCards } from "./ServicesCards";
import { ServicesHeader } from "./ServicesHeader";

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <ServicesHeader />
        <ServicesCards />
      </div>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.section`
  h3{
    color: var(--clr-white);
  }
  h4 {
    color: var(--clr-grey-2);
  }
  padding: 5rem 0;

  background: var(--clr-primary-4);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-white);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    position: relative;
    box-shadow: var(--dark-shadow);
    background: var(--clr-grey-10);
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    
    p {
      color: var(--clr-primary-2);
    }
    h4{
      text-align: center;
    }
    &-body{
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-grey-4);
    color: var(--clr-white);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
