import sanityClient from "@sanity/client";
const imageUrlBuilder = require('@sanity/image-url');
const sanity = sanityClient({
  projectId: process.env['SANITY_PROJECT_ID'],
  dataset: process.env['SANITY_DATASET'],
  useCdn: true
})

exports.handler = async () => {
  const query = '*[_type=="texts"]';
  const textDetails = await sanity.fetch(query).then((response: any) => {
    const portfolioTextDetails = response.map((text: any) => {
      const output: any = {}
      output['navbar_text']= text.portfolio_texts.navbar_text;
      output['footer_text']= text.portfolio_texts.footer_text;
      return output;
    });
    return portfolioTextDetails[0];
  })
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(textDetails)
  }
}