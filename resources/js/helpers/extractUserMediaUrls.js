export default function extractUserMediaUrls(user) {
  const urlObj = {
    avatar: "",
    cover: "",
  };
  user.media.forEach((m) => {
    if (m?.collection_name === `u${user.id}avatar`) {
      urlObj.avatar = m.original_url;
    }
    if (m?.collection_name === `u${user.id}cover`) {
      urlObj.cover = m.original_url;
    }
  });
  return urlObj;
}
