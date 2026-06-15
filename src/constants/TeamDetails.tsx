const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/himanshi-travel-task" : "";

export const Teams = [
  {
    img: `${BASE_PATH}/assets/images/teams/a.jpg`,
    title: "Alice Carter",
    role: "CEO & Founder",
  },
  {
    img: `${BASE_PATH}/assets/images/teams/b.jpg`,
    title: "Marie Dumbrell",
    role: "CEO",
  },
  {
    img: `${BASE_PATH}/assets/images/teams/c.jpg`,
    title: "John Wick",
    role: "Office Manager",
  },
  {
    img: `${BASE_PATH}/assets/images/teams/d.jpg`,
    title: "Peter Dsouza",
    role: "Technical Head",
  },
  {
    img: `${BASE_PATH}/assets/images/teams/e.jpg`,
    title: "Erik Walt",
    role: "HR",
  },
  {
    img: `${BASE_PATH}/assets/images/teams/f.jpg`,
    title: "Emily James",
    role: "Accounting Manager",
  },
];
