import sanityClient from "@sanity/client";
const imageUrlBuilder = require('@sanity/image-url');
const sanity = sanityClient({
  projectId: process.env['SANITY_PROJECT_ID'],
  dataset: process.env['SANITY_DATASET'],
  useCdn: true
})

exports.handler = async ()=>{
  const query = '*[_type=="header"]';
  const headerDetails = await sanity.fetch(query).then((response:any)=>{
    const headerBannerDetails = response.map((header:any)=>{
      const output:any = {
        banner_name: header.header_name,
      }
      const image = header.banner;
      if(image)
        output['image'] = imageUrlBuilder(sanity).image(image).url();
      return output;
    });
    return headerBannerDetails;
  })
  return {
    statusCode: 200,
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(headerDetails)
  }
}