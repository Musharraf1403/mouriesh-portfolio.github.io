const imageUrl = require('@sanity/image-url');
const blocksToHtml = require('@sanity/block-content-to-html');
import sanityClient from "@sanity/client";
const sanity = sanityClient({
  projectId: process.env['SANITY_PROJECT_ID'],
  dataset: process.env['SANITY_DATASET'],
  useCdn: true
})

exports.handler = async ()=>{
  const query = '*[type=="footer"]';
  const footerDetails = await sanity.fetch(query).then((response:any)=>{
    const footerURLDetails = response.social_media_urls.map((footer:any)=>{
      const output = {
        url_name: footer.social_media_url.url_name,
        url_link: footer.social_media_url.url_link
      }
      return output;
    });
    console.log(footerURLDetails);
    return footerURLDetails;
  })
  return {
    status: 200,
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(footerDetails)
  }
}