export default {
  title: 'Header',
  name: 'header',
  type: 'document',
  fields: [
    {
      title: "Header Banner",
      name: 'header_name',
      type: 'string'
    },
    {
      title: 'Banner',
      name: 'banner',
      type: 'image',
      options : {
        hotspot: true
      }
    }
  ]
}