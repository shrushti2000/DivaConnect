import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio:"Creating a life, I love! Lets talk about fashion,makeup and styling!",
    sociallink:"https://github.com/shrushti2000",
    profilepic:'https://res.cloudinary.com/shrushti23/image/upload/v1655625751/dp1_zv6jcy.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "shruti",
    lastName: "jain",
    username: "shruti23",
    password: "Shrushti@123",
    bio:"Lifestyle || Makeup || Fitness || Travel",
    sociallink:"https://github.com/shrushti2000",
    profilepic:"https://res.cloudinary.com/shrushti23/image/upload/v1655625751/dp4_qtn7yy.webp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "krupa",
    lastName: "shah",
    username: "krupa28",
    password: "Krupa@123",
    bio:"Aim for moon! You may hit a star!",
    sociallink:"https://github.com/shrushti2000",
    profilepic:"https://res.cloudinary.com/shrushti23/image/upload/v1655625750/dp3_sheelc.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "priya",
    lastName: "joshi",
    username: "priya25",
    password: "Priya@123",
    bio:"Lifestyle || Makeup || Fitness || Travel",
    sociallink:"https://github.com/shrushti2000",
    profilepic:"https://res.cloudinary.com/shrushti23/image/upload/v1655625750/dp2_xsyeui.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
