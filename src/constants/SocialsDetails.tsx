const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/himanshi-travel-task" : "";

export const Socials = [
  { svg: `${BASE_PATH}/assets/svg/facebook.svg` },
  { svg: `${BASE_PATH}/assets/svg/twitter.svg` },
  { svg: `${BASE_PATH}/assets/svg/linkedin.svg` },
  { svg: `${BASE_PATH}/assets/svg/instagram.svg` },
  { svg: `${BASE_PATH}/assets/svg/youtube.svg` },
];

export const PersonalSocials = [
  {
    url: "https://github.com/vrushabhgawas14/",
    text: "Github",
  },
  {
    url: "https://linkedin.com/in/vrushabhgawas/",
    text: "LinkedIn",
  },
];
