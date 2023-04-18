// goes through content to extract first image. Used to set post thumbnail
export const getFirstImage = (content) => {
  if (content) {
    let imgTag = content.match(/<img([\w\W]+?)>/g);
    if (imgTag) {
      let newImgTag = imgTag[0].replace("/>", " referrerpolicy='no-referrer' />");
      return newImgTag;
    }
  }
}

// convert Blogger date to desired format
export function convertDate(date, option) {
  return new Date(date).toLocaleDateString('en-US', option);
}

// function is passed in the first comment of a Blogger's post to use as description.
// it will parse the string into html text and truncate down to 150 characters. 
export function handleDescription(e) {
  const description = new DOMParser().parseFromString(e, 'text/html');
  const truncated = truncateString(description.body.innerHTML, 150);
  return truncated;
}

// helper function to truncate string and append '...'
function truncateString(str, num) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}