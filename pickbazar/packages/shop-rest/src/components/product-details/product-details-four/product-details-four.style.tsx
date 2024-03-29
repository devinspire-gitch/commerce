import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ProductDescriptionTabsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const ProductDescriptionTabs = styled.div`
  width: 77.5%;
  background-color: #fff;
  @media (max-width: 767px) {
    width: 100%;
    .tab-content {
      padding: 20px 25px
    }
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #dedede;
  .active {
    border-bottom: 1px solid #019e7f;
  }
`;

export const Tab = styled.button`
  display: flex;
  flex: 1;
  max-width: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px 0;
  background-color: transparent;
  color: #019e7f;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  text-transform: uppercase;
  &:hover {
    border-bottom: 1px solid #019e7f;
  }
`;

export const TabsContent = styled.div`
  padding: 30px 90px;
`;

export const TabContent = styled.div``;

export const ProductDetailsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 25px;
  * {
    box-sizing: border-box;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    .full {
      width: 100%;
      margin-bottom: 25px;
      min-height: auto * {
        min-height: auto;
      }
    }
  }
`;

export const ProductPreview = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    display: block;
    max-width: 100%;
    max-height: 200px;
    height: auto;
  }

  @media (max-width: 990px) {
    padding: 30px 40px 60px;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 30px 25px 60px;
    order: 0;
  }
`;

export const BackButton = styled.div`
  position: absolute;
  top: 60px;
  left: 60px;
  z-index: 999;

  @media (max-width: 990px) {
    top: 20px;
    left: 25px;
  }
  .reusecore__button {
    font-family: ${themeGet("fonts.body", "sans-serif")};
    font-size: ${themeGet("fontSizes.sm", "13")}px;
    font-weight: ${themeGet("fontWeights.bold", "700")};
    color: ${themeGet("colors.text.regular", "#77798C")};
    height: 30px;
    .btn-icon {
      margin-right: 5px;
    }
    .btn-text {
      padding: 0;
    }
  }
`;

export const ProductInfoWrapper = styled.div`
  width: 45%;
  min-height: 360px;
  padding: 20px 20px;
  border-left: 1px solid ${themeGet("colors.gray.500", "#f1f1f1")};
  background-color: #fff;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 320px;
  @media (max-width: 990px) {
    padding: 15px 15px;
  }
`;

// @media (max-width: 767px) {
//   flex: 0 0 100%;
//   max-width: 100%;
//   padding: 30px 25px;
//   border: 0;
//   order: 1;
// }

export const ImagePart = styled.div`
  width: 30%;
  margin-right: 2.5%;
  background-color: #fff;
  border-left: 1px solid ${themeGet("colors.gray.500", "#f1f1f1")};
  padding: 10px 10px;

  @media (max-width: 990px) {
    padding: 10px 10px;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 30px 25px;
    border: 0;
    order: -1;
    margin: 25px 0;
  }
`;

export const SaleTag = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${themeGet("colors.white", "#ffffff")};
  background-color: ${themeGet("colors.yellow.alternate", "#f4c243")};
  padding: 0 10px;
  line-height: 24px;
  border-radius: ${themeGet("radii.medium", "12px")};
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const DiscountPercent = styled.span`
  font-size: ${themeGet("fontSizes.xs", "12")}px;
  font-weight: ${themeGet("fontWeights.bold", "700")};
  color: ${themeGet("colors.white", "#ffffff")};
  line-height: 24px;
  background-color: ${themeGet("colors.secondary.regular", "#ff5b60")};
  padding-left: 20px;
  padding-right: 15px;
  position: relative;
  display: inline-block;
  position: absolute;
  bottom: 180px;
  right: -60px;
  -webkit-transform: translate3d(0, 0, 1px);
  transform: translate3d(0, 0, 1px);

  &:before {
    content: "";
    position: absolute;
    left: -8px;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 12px 0;
    border-color: transparent ${themeGet("colors.secondary.regular", "#ff5b60")}
      transparent transparent;
  }

  &:after {
    content: "";
    position: absolute;
    left: -8px;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 12px 8px;
    border-color: transparent transparent
      ${themeGet("colors.secondary.regular", "#ff5b60")} transparent;
  }
`;

export const ProductTitlePriceWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.h1`
  font-family: ${themeGet("fonts.body", "sans-serif")};
  font-size: ${themeGet("fontSizes.xl", "30")}px;
  font-weight: ${themeGet("fontWeights.semiBold", "600")};
  color: ${themeGet("colors.text.bold", "#0D1136")};
  line-height: 1;
  display: flex;

  @media (max-width: 767px) {
    word-break: break-word;
  }
`;

export const ProductPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const ProductPrice = styled.div`
  font-family: ${themeGet("fonts.body", "sans-serif")};
  font-size: calc(${themeGet("fontSizes.md", "18")}px - 1px);
  font-weight: ${themeGet("fontWeights.bold", "700")};
  color: ${themeGet("colors.text.bold", "#019e7f")};
`;

export const Subheading = styled.div`
  font-family: ${themeGet("fonts.body", "sans-serif")};
  font-size: calc(${themeGet("fontSizes.md", "11")}px - 1px);
  font-weight: ${themeGet("fontWeights.regular", "400")};
  color: ${themeGet("colors.text.bold", "#0D1136")};
`;

export const SalePrice = styled.span`
  font-family: ${themeGet("fonts.body", "sans-serif")};
  font-size: calc(${themeGet("fontSizes.base", "15")}px + 1px);
  font-weight: ${themeGet("fontWeights.regular", "400")};
  color: ${themeGet("colors.text.regular", "#77798C")};
  padding: 0 5px;
  overflow: hidden;
  position: relative;
  margin-left: 10px;

  &:before {
    content: "";
    width: 100%;
    height: 1px;
    display: inline-block;
    background-color: ${themeGet("colors.text.regular", "#77798C")};
    position: absolute;
    top: 50%;
    left: 0;
  }
`;

export const ProductWeight = styled.div`
  font-family: ${themeGet("fonts.body", "sans-serif")};
  font-size: ${themeGet("fontSizes.sm", "13")}px;
  font-weight: ${themeGet("fontWeights.regular", "400")};
  color: ${themeGet("colors.text.regular", "#77798C")};
`;

export const ProductDescription = styled.p`
  font-family: ${themeGet("fonts.body", "sans-serif")};
  font-size: calc(${themeGet("fontSizes.base", "15")}px + 1px);
  font-weight: ${themeGet("fontWeights.regular", "400")};
  color: ${themeGet("colors.text.medium", "#424561")};
  line-height: 1.7;
  margin-top: 0.5px;
`;

export const ProductDosage = styled.p`
  font-family: ${themeGet("fonts.body", "sans-serif")};
  font-size: calc(${themeGet("fontSizes.base", "15")}px + 1px);
  font-weight: ${themeGet("fontWeights.regular", "400")};
  color: ${themeGet("colors.text.medium", "#424561")};
  line-height: 1.5;
  margin-top: 30px;
`;

export const ProductCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;

export const ProductCartBtn = styled.div`
  .card-counter {
    height: 48px;
    width: 130px;

    .control-button {
      padding: 10px 15px;
    }
  }

  .cart-button {
    padding-left: 30px;
    padding-right: 30px;

    .btn-icon {
      margin-right: 5px;

      svg {
        width: 14px;
        height: auto;
        @media (max-width: 990px) {
          width: 14px;
          margin-right: 8px;
        }
      }
    }
  }
  .quantity {
    width: 115px;
    height: 38px;
  }
`;

export const ButtonText = styled.span`
  /* @media (max-width: 767px) {
    display: none;
  } */
`;

export const ProductMeta = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;

export const MetaTitle = styled.span`
  font-family: ${themeGet("fonts.body", "sans-serif")};
  font-size: calc(${themeGet("fontSizes.base", "15")}px + 1px);
  font-weight: ${themeGet("fontWeights.regular", "400")};
  color: ${themeGet("colors.text.regular", "#77798C")};
  flex-shrink: 0;
`;

export const MetaItem = styled.span`
  font-family: ${themeGet("fonts.body", "sans-serif")};
  font-size: calc(${themeGet("fontSizes.base", "21")}px + 1px);
  font-weight: ${themeGet("fontWeights.semiBold", "600")};
  color: ${themeGet("colors.text.bold", "#0D1136")};
  margin-right: 3px;
  letter-spacing: 0.3px;

  &:hover {
    text-decoration: underline;
  }
`;

export const MetaSingle = styled.p`
  display: flex;
  flex-wrap: wrap;

  a {
    &::last-child {
      ${MetaItem} {
        &:after {
          content: "";
        }
      }
    }
  }
`;

export const RelatedItems = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;

  @media (max-width: 990px) {
    margin-top: 50px;
    margin-left: 15px;
    margin-right: 15px;
  }
  > h3 {
    font-family: ${themeGet("fonts.body", "sans-serif")};
    font-size: ${themeGet("fontSizes.xl", "24")}px;
    font-weight: ${themeGet("fontWeights.semiBold", "600")};
    color: ${themeGet("colors.text.bold", "#0D1136")};
    line-height: 1.2;
    margin-bottom: 30px;
    @media (max-width: 767px) {
      margin-left: 0;
      margin-bottom: 25px;
    }
  }

  > div > div {
    flex: 0 0 20%;
    max-width: 20%;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 30px;

    @media (max-width: 1500px) {
      flex: 0 0 20%;
      max-width: 20%;
    }
    @media (max-width: 1400px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
    @media (max-width: 1060px) {
      flex: 0 0 33.3333333%;
      max-width: 33.3333333%;
    }
    @media (max-width: 1199px) and (min-width: 991px) {
      padding-left: 10px;
      padding-right: 10px;
    }
    @media (max-width: 768px) {
      padding-left: 7.5px;
      padding-right: 7.5px;
      margin-bottom: 15px;
    }
    @media (max-width: 767px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
`;

export const InnerDiscountPercent = styled.div`
  background-color: #019e7f;
  color: #fff;
  padding: 3px 3px 4px 3px;
  font-size: 12px;
  border-radius: 3px;
  color: #fff;
  margin-left: 10px;
`;

export const CallToActionWrapper = styled.div`
  width: 20%;
  margin-left: 2.5%;
  padding: 25px 15px;
  background-color: #fff;
  min-height: 360px;
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 310px;
`;

export const CallToActionTitle = styled.h5`
  font-size: 16px;
  font-weight: 500;
`;

export const CallToActionList = styled.ul`
  list-style: circle;
  margin-top: 15px;
`;

export const CallToActionListItem = styled.li`
  font-size: 12px;
  margin-bottom: 5px;
`;

export const CallToActionButton = styled.a`
  display: block;
  background-color: #019e7f;
  text-align: center;
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
`;
