import sanityClient from "@sanity/client";
const imageUrlBuilder = require('@sanity/image-url');
const sanity = sanityClient({
  projectId: process.env['SANITY_PROJECT_ID'],
  dataset: process.env['SANITY_DATASET'],
  useCdn: true
})

exports.handler = async () => {
  const query = '*[_type=="portfolio_body"]';
  const bodyDetails = await sanity.fetch(query).then((response: any) => {
    const allDetails = response[0].portfolio_contents?.map((content: any) => {
      const output: any = {
        title: content.title,
      }
      const mobileImage = content.banner_image.mobile_banner;
      const desktopImage = content.banner_image.desktop_banner;
      if (mobileImage)
        output['mobile_banner'] = imageUrlBuilder(sanity).image(mobileImage).url();
      if (desktopImage)
        output['desktop_banner'] = imageUrlBuilder(sanity).image(desktopImage).url();
      output['cards'] = content.cards?.map((card: any) => {
        const cardDetail: any = {
          card_title: card.card_title,
          card_body: card.card_body
        };
        const mobileCardImage = card.card_banner.mobile_banner;
        const desktopCardImage = card.card_banner.desktop_banner;
        if (mobileCardImage)
          cardDetail['mobile_card_banner'] = imageUrlBuilder(sanity).image(mobileCardImage).url();
        if (desktopCardImage)
          cardDetail['desktop_card_banner'] = imageUrlBuilder(sanity).image(desktopCardImage).url();
        return cardDetail;
      })
      return output;
    });
    return allDetails;
  })
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyDetails)
  }
}