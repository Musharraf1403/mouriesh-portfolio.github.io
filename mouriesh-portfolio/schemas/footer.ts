export default {
  title: 'Footer',
  name: 'footer',
  type: 'document',
  fields: [
    {
      title: "Social Media URL's",
      name: 'social_media_urls',
      type: 'array',
      of: [
        {
          title: 'Social Media URL',
          name: 'social_media_url',
          type: 'object',
          fields: [
            {
              title: 'URL Name',
              name: 'url_name',
              type: 'string'
            },
            {
              title: 'URL',
              name: 'url_link',
              type: 'string'
            },
            {
              title: 'To be displayed',
              name: 'to_be_displayed',
              type: 'boolean'
            }
          ]
        }
      ]
    },
  ]
}