import sanityClient from "@sanity/client";
const imageUrlBuilder = require('@sanity/image-url');
const sanity = sanityClient({
  projectId: process.env['SANITY_PROJECT_ID'],
  dataset: process.env['SANITY_DATASET'],
  useCdn: true
})

exports.handler = async () => {
  const query = '*[_type=="header"]';
  const headerDetails = await sanity.fetch(query).then((response: any) => {
    const headerBannerDetails = response.map((header: any) => {
      const output: any = {}
      const mobileImage = header.header_banner.mobile_banner;
      output['contact_us_link'] = header.header_banner.contact_us_link;
      const resume = header.header_banner.resume;
      const desktopImage = header.header_banner.desktop_banner;
      if (mobileImage)
        output['mobile_banner'] = imageUrlBuilder(sanity).image(mobileImage).url();
      if (desktopImage)
        output['desktop_banner'] = imageUrlBuilder(sanity).image(desktopImage).url();
      if (resume)
        output['resume'] = `https://cdn.sanity.io/files/${process.env['SANITY_PROJECT_ID']}/${process.env['SANITY_DATASET']}/${resume.asset._ref.split('-')[1]}.pdf`;
      return output;
    });
    return headerBannerDetails[0];
  })
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(headerDetails)
  }
}