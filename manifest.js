const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touch-icon.png"],
  manifest:{
    name:"GLW Care by Raluca",
    short_name:"GLW Care",
    icons:[ {
      src: '/favicon.ico',
      sizes: '72x72 96x96 128x128 256x256',
      purpose: 'favicon'
    },
    {
      src: '/glw-192x192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'any'
    },
    {
      src:'/glw-512x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable'
    },
    {
      src: '/apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'favicon',
    }
  ],
  theme_color:'#000000',
  background_color:'#FFFFFF',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}

export default manifestForPlugIn;