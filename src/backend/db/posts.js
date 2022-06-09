import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    title:'Makeup Tips To Apply Primer',
    content:
      "Whether oil or water, your primer and foundation should share the same base; otherwise, they will repel each other or just slide off your face, making it difficult to blend.Dabbing a little amount of primer around your eyes dramatically minimizes the appearance of crow’s feet.Always apply foundation using downward strokes. Most of us have a thin layer of hair on our face, and applying foundation in an upward stroke will make the hair strands stand out. Looking fresh and pink like a peach may be your goal, but highlighting your peach fuzz definitely shouldn’t be.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "sneharoy",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "isha",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    title:'HOW TO WEAR BROWN LIP LINER',
    content:
      "Start by choosing your perfect shade of brown or nude lip liner. Our Color Sensational Shaping Lip Liners come in 21 awesome, long-lasting shades.Smile so your lips are stretched out and apply your liner, starting at the cupid's bow. Smiling ensures you cover your entire lip.Next, fill in the outer corners of your lips with the liner and blend with your fingertips. Do one section at a time.You can leave your lips lined and matte as a final look…or you can apply lipstick.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "priya25",

    comments: [
      {
        _id: uuid(),
        username: "adarshbalika",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "krupa28",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title:'Fashion Tips to Ensure You Always Look Stylish',
    content:
      "Make sure you have reliable wardrobe staples: an iconic little black dress, a pair of jeans that fit perfectly, a classic blazer, simple T-shirts and button-downs in neutral colors, and an effortless leather jacket (or denim jacket). Investing in a capsule collection of mix-and-match basics (and learning how to style them) is the key to looking put together.One trick to making any item of clothing look amazing is to hire a good tailor. Tailored clothing not only looks polished, but it also feels more comfortable. Pants that drag on the ground and dresses that bunch up awkwardly won't make you feel stylish. If your capsule wardrobe fits you well, you can start to play with over- and under-sized items in a way that feels fashionable, not sloppy.Play with color. If you're nervous about adding color to your look, start with just one colorful piece, and keep the rest of your look neutral. As you get more comfortable with colors, you'll learn which color combinations work best for your style.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "priya25",

    comments: [
      {
        _id: uuid(),
        username: "adarshbalika",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "krupa28",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
