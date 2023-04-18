export const getFirstImage = (content) => {
  if (content) {
    let imgTag = content.match(/<img([\w\W]+?)>/g);
    if (imgTag) {
      let newImgTag = imgTag[0].replace("/>", " referrerpolicy='no-referrer' />");
      return newImgTag;
    }
  }
}

export function convertDate(date, option) {
  return new Date(date).toLocaleDateString('en-US', option);
}

export function handleDescription(e) {
  const description = new DOMParser().parseFromString(e, 'text/html');
  const truncated = truncateString(description.body.innerHTML, 150);
  return truncated;
}

function truncateString(str, num) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}