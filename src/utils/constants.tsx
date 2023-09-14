import { GiClothes } from "react-icons/gi";
import { MdOutlineSmartToy } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import ToysBg from "../assets/toys-bg.jpg";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <MdOutlineSmartToy />,
    title: "toy",
    text: "toy text",
    cardBg: ToysBg,
  },
  {
    id: 2,
    icon: <GiClothes />,
    title: "clothing",
    text: "clothing text",
    cardBg: ToysBg,
  },
  {
    id: 3,
    icon: <FaBaby />,
    title: "accessories",
    text: "accessories text",
    cardBg: ToysBg,
  },
];

export const API_ENDPOINT =
  "https://bqk6gkzk.api.sanity.io/v1/graphql/production/default";

export const QUERY = `
{
  allProduct {
    _id
    name
    slug {
      current
    }
    brand
    categories {
      categories
    }
    clothingCategories {
      clothingCategories
    }
    price
    stock
    forWhom {
      forWhom
    }
    height {
      height
    }
    heightDescription
    age {
      age
    }
    ageDescription
    itemDescription
    featured
    images {
      asset {
        url
      }
    }
  }
}

`;
