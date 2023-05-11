import sanityClient from "@sanity/client";
const sanity = sanityClient({
  projectId: process.env['SANITY_PROJECT_ID'],
  dataset: process.env['SANITY_DATASET'],
  useCdn: true
})

exports.handler = async ()=>{
  const query = '*[_type=="footer"]';
  const footerDetails = await sanity.fetch(query).then((response:any)=>{
    const footerURLDetails = response[0].social_media_urls.map((footer:any)=>{
      const output = {
        url_name: footer.url_name,
        url_link: footer.url_link,
        is_active: footer.to_be_displayed
      }
      return output;
    });
    return footerURLDetails;
  })
  return {
    statusCode: 200,
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(footerDetails)
  }
}