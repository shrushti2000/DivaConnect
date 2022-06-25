import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    title:'A Guide To Glow Like The Sun This Season: Summer Skin Care Tips And Tricks',
    url:'https://res.cloudinary.com/shrushti23/image/upload/v1655739750/summer-beauty-bright-lip-glowing-skin_szxzwg.jpg',
   
    content:"Remember the beach vacation you took with your parents when you were around ten years old? Do you recall the hours you spent on the beach that resulted in a mind-numbing sunburn? Ouch. Whether you are going out on a shopping spree or staying at home and powering through a cleaning spree, the most important yet basic tip is to wear sunscreen. Dermatologists and experts have repeatedly stressed the importance of a broad spectrum SPF 30 or higher on all exposed skin. Even if the humidity and hot weather may make your skin feel oily, moisturising post-cleansing is a must. According to experts, moisturisers reestablish the outermost layer of the skin which can be damaged due to harmful pollutants and chemicals.Classy ladies don’t sweat through their makeup. So, heavy makeup is definitely a no-no. Caking our faces with war paint also prevents our skin from breathing, add to that the humidity which is the number one contributor to clogging pores. Hence, this summer ditch your heavy foundations and powder-based products and swap them with tinted moisturisers and lip balms  ",
      
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
    title:'How to protect your hair from heat in summer',
    url:'https://res.cloudinary.com/shrushti23/image/upload/v1655737958/beauty-portrait-sensual-ginger-woman-with-long-hair-posing-with-green-leaf-min_nnafjx.jpg',
    content:
      "1. Reconsider the items that occupy your precious shelf space. Does your shampoo really suit you well? Shampoos are laden with plenty of chemicals that can cause extreme damage to your hair in the long run instead of repairing them.2. Is the water supply you receive healthy for your skin and hair? We all have heard of the hard and soft water problem but are we really aware of what they are? Hard water is the kind of water with a lot of natural occurring salts of magnesium and calcium mixed in that give it a sticky feel and leave a rough after-effect on the skin and on the hair.3. Oils: Remember our moms running after us in childhood to oil the hair, something we detested because of their sticky texture and the oily aftermath? Turns out, our moms were right. Oils help form a thin protective shield over the hair which saves them from rubbing against one another (which would cause friction damage). Oil also protects the hair from entanglement and nourishes the scalp",
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
    title:'Home Remedies: Treat Your Feet To A Spa Treatment At Home',
    url:'https://res.cloudinary.com/shrushti23/image/upload/v1655737849/spa-treatment-product-female-feet-hand-spa-min_s09byq.jpg',
    content:
     "Soak the feet in the water for 15 minutes. Then, give your feet a scrub treatment. The most common ingredients that you can use for scrubs are almond meal, oatmeal or wheat bran (choker). To this, you can add dry ground orange and lemon peels, or even coarse salt or granulated sugar. Yoghurt, milk or oils can be added to such ingredients. You can use any vegetable oil that is available at home, like sunflower, safflower oil, sesame seed (til) oil, or olive oil. Mix the scrub ingredients and apply them to the feet. After 15 to 20 minutes, rub gently on the skin with circular movements. Pay attention to the heels. Wash it off with water. Then give the feet a massage with oil or cream. ",    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "krupa28",

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
  , {
    _id: uuid(),
    title:'Avoid These Beauty Treatments This Summer',
    url:'https://res.cloudinary.com/shrushti23/image/upload/v1655738054/post3_y7dxd0.jpg',
    content:
     "Hair transplant is a permanent hair replacement surgical treatment that allows treatment of male/female patterned baldness. It is usually a 6-8 hour long procedure done under local anaesthesia. However, the recovery is not as short as is advertised.Chemical peels are a variety of skin solutions that are applied on the skin and causes deep exfoliation leading to peeling. of the skin hence the name. They can work on many skin concerns from acne to pigmentation and even for ageing. Liposuction is a surgical method to remove subcutaneous fat from the skin. It is considered an inch loss procedure and not recommended for weight loss. It is done under general anaesthesia under supervision of a plastic surgeon.",    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",

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
    title:'Makeup Tips To Apply Primer',
    url:'https://res.cloudinary.com/shrushti23/image/upload/v1655738327/How-To-Apply-Liquid-Foundation-For-A-Flawless-Finish_kdtqn1.jpg',
    content:
      "Whether oil or water, your primer and foundation should share the same base; otherwise, they will repel each other or just slide off your face, making it difficult to blend.Dabbing a little amount of primer around your eyes dramatically minimizes the appearance of crow’s feet.Always apply foundation using downward strokes. Most of us have a thin layer of hair on our face, and applying foundation in an upward stroke will make the hair strands stand out. Looking fresh and pink like a peach may be your goal, but highlighting your peach fuzz definitely shouldn’t be.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shruti23",
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
    url:'https://res.cloudinary.com/shrushti23/image/upload/v1655739103/78693107_10157776757264173_8467512149864873984_n_kcd03u.jpg',
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
];
