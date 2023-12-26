import vehicleMasti from "@Public/welcome-vehiclemasti.png";

export const DateMonthYearForBlogPost = (lastUpdateTime: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(lastUpdateTime);
  const day = date.getDate();
  const month = months[date.getMonth()]; // Months are 0-based in JavaScript Dates
  const year = date.getFullYear();
  // console.log(`${day}/${month}/${year}`, "DATE");
  return `${day}, ${month}, ${year}`;
};

export const dynamicLastUpdatedTime = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are 0-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
  return formattedDate;
};

interface Base_Url_Props {
  HOME_PAGE_BASE_URL: string;
}

export const BASE_URLS: Base_Url_Props = {
  HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL!,
};

interface Blog_Post_URL_Props {
  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;

  PRIVACY_PAGE_ABSOLUTE: string;
  PRIVACY_PAGE_RELATIVE: string;

  CONTACT_PAGE_ABSOLUTE: string;
  CONTACT_PAGE_RELATIVE: string;

  DISCLAIMER_PAGE_ABSOLUTE: string;
  DISCLAIMER_PAGE_RELATIVE: string;
}

export const blogPostURLS: Blog_Post_URL_Props = {
  HOME_PAGE_ABSOLUTE: BASE_URLS.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  PRIVACY_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/privacy`,
  PRIVACY_PAGE_RELATIVE: "/privacy",

  CONTACT_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/contact`,
  CONTACT_PAGE_RELATIVE: "/contact",

  DISCLAIMER_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/disclaimer`,
  DISCLAIMER_PAGE_RELATIVE: "/disclaimer",
};

interface Tag {
  tag: string;
  href: string;
}

interface BlogPage {
  absoluteURL: string;
  relativeURL: string;
  title: string;
  description: string;
  lastUpdateTime: string;
  publishedTime: string;
  featuredImage: any;
  featuredImageAltText: string;
}

interface HomePage extends BlogPage {}
interface PolicyPage extends BlogPage {}
interface ContactPage extends BlogPage {}
interface DisclaimerPage extends BlogPage {}

interface SEOObjProps {
  HOME_PAGE: HomePage;
  POLICY_PAGE: PolicyPage;
  CONTACT_PAGE: ContactPage;
  DISCLAIMER_PAGE: DisclaimerPage;
}

export const SEO_OBJ: SEOObjProps = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "VehicleMasti: A hub for Automobile enthusiasts.",
    description:
      "Welcome to VehicleMasti Blog! This is the perfect place for people who love automobiles whether you are a car enthusiast or a casual driver. You'll find easy-to-understand articles, maintenance tips, and reviews about different automobile manufacturers. Join our community and let's learn and grow together in the world of automobiles!",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: vehicleMasti,
    featuredImageAltText: "a-person-with-computer",
  },

  POLICY_PAGE: {
    absoluteURL: blogPostURLS.PRIVACY_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.PRIVACY_PAGE_RELATIVE,
    title: "Privacy Policy | VehicleMasti",
    description:
      "Welcome to VehicleMasti privacy policy. In here you can find all the details about privacy policy of VehcileMasti",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: vehicleMasti,
    featuredImageAltText: "a-person-with-computer",
  },

  CONTACT_PAGE: {
    absoluteURL: blogPostURLS.CONTACT_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CONTACT_PAGE_RELATIVE,
    title: "Contact Us | VehicleMasti",
    description:
      "Welcome to VehicleMasti contact page. In here you can find all the details of about VehicleMasti contact information and a way to contact administrator of the VehicleMasti site.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: vehicleMasti,
    featuredImageAltText: "a-person-with-computer",
  },

  DISCLAIMER_PAGE: {
    absoluteURL: blogPostURLS.DISCLAIMER_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.DISCLAIMER_PAGE_RELATIVE,
    title: "Disclaimer | VehicleMasti",
    description:
      "Welcome to VehicleMasti disclaimer page. In here you can find all the details of about VehicleMasti's Disclaimer and its policies.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: vehicleMasti,
    featuredImageAltText: "a-person-with-computer",
  },
};

export const blogPostsObj = [
  {
    id: 0,
    url: "simple url in here...!",
    title: "Title",
    description: "Descrption",
    lastUpdateTime: "lastUpdated",
    publishedTime: "published",
    tags: [
      { tag: "Cars", href: "url" },
      { tag: "Tata", href: "url" },
      { tag: "Tata Safari", href: "url" },
    ],
    featuredImage: vehicleMasti,
    featuredImageAltText: "AlT",
  },

  // {
  //   id: 0,
  //   url: `${blogPostURLS.TATA_COMPANY_OBJ.TATA_BLOG_PAGES.TATA_SAFARI_RELATIVE_URL}`,
  //   title: `${SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.title}`,
  //   description: `${SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.description}`,
  //   lastUpdateTime: `${SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.lastUpdateTime}`,
  //   publishedTime: `${SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.publishedTime}`,
  //   tags: SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.tags!,
  //   featuredImage: SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.featuredImage,
  //   featuredImageAltText: `${SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.featuredImageAltText}`,
  // },
];
