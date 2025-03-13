import axios from "axios";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1";

export const fetchArticles = async (topic, page) => {
//   const response = await axios.get(
//     `http://hn.algolia.com/api/v1/search?query=${topic}&page=${page}&hitsPerPage=5`
//   );

  const response = await axios.get("/search", {
    params: {
      query: topic,
      page,
      hitsPerPage: 5,
    },
  });
  console.log(response.data.hits)
console.log(response.data.nbPages)
  return {
    articles: response.data.hits,
    totalPages: response.data.nbPages,
  };
};