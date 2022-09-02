import axiosInstance from "../../utils/axios"

export const getVideos = async ({tags, search}) => {
  console.log(tags, search);
  let queryString = "";
  const hasTags = tags.length > 0;

  if (hasTags) {
    queryString += tags.map(tag => `tags_like=${tag}`).join("&");
  }

  if (search !== " ") {
    queryString += `${hasTags ? '&': ""}q=${search}`;
  }

  console.log(queryString);

  const response = await axiosInstance.get(`/videos?${queryString}`);

  return response.data;
}