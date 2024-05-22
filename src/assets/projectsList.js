import gof from "./projects_image/gameoflife.gif";
import todo from "./projects_image/todo.gif";
import movie from "./projects_image/movie.png";
import minecraft from "./projects_image/minecraft.gif";

export const gameOfLife = {
  title: "Game Of Life",
  description:
    'A simple implementation of John Conway\'s "Game Of Life" with Chakra UI and React. Project was bootstrapped with npx create-react-app',
  image: gof,
  link: "https://github.com/GhifariArsa/game-of-life",
  skills: ["React", "NodeJS", "ChakraUI", "Javascript", "HTML", "CSS"],
};

export const TodoApp = {
  title: "React Todo App",
  description:
    "This is a quick and simple implementation of a Todo app created with React and Tailwind CSS. The app implements local storage, thus saving the tasks even when user refreshes the page.",
  image: todo,
  link: "https://github.com/GhifariArsa/todo-app-react",
  skills: ["React", "NodeJS", "Javascript", "HTML", "CSS"],
};

export const movieApp = {
  title: "React Movie App",
  description:
    'This is a full-stack movie application, featuring a catalog of movies, a "coming soon" section, user reviews, account creation, and an admin dashboard. Users can browse through detailed movie listings, stay updated on upcoming releases, and read and write reviews. Administrators have access to manage movie listings and reviews through a dedicated dashboard.',
  image: movie,
  skills: [
    "React",
    "NodeJS",
    "Bootstrap",
    "ExpressJS",
    "SQL",
    "Postgres",
    "Javascript",
    "HTML",
    "CSS",
  ],
};

export const minecraftVil = {
  title: "Minecraft Procedurally Generated Village",
  description:
    "This is a procedurally generated minecraft village, implemented using Python through the MCPI-API. It features, terrain smoothing, randomly generated houses and rooms.",
  image: minecraft,
  skills: [
    "Python",
    "Networking",
    "Algorithms",
  ],
};
