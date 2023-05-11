export default {
  title: 'Header',
  name: 'header',
  type: 'document',
  fields: [
    {
      title: 'Banner',
      name: 'header_banner',
      type: 'object',
      fields: [
        {
          title: 'Mobile Banner',
          name: 'mobile_banner',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          title: 'Desktop Banner',
          name: 'desktop_banner',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          title: 'Contact Us Link',
          name: 'contact_us_link',
          type: 'url'
        }
      ]
    }
  ]
}