/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'hips.hearstapps.com',
      'g.foolcdn.com',
      'i0.wp.com',
      'www.blogilates.com',
      'cdn.vox-cdn.com',
      's.yimg.com',
      'twistedsifter.com',
      'static.seekingalpha.com',
      'd36iur3orme9ke.cloudfront.net',
      'foodgawker.com',
      'media1.fdncms.com',
      'cdn1.matadornetwork.com',
      'bossip.com',
      'i.chzbgr.com',
      'cdn.funcheap.com',
      'imageio.forbes.com',
      'brobible.com',
      'i.dailymail.co.uk',
      'www.jungewelt.de',
      'cdn.trendhunterstatic.com',
      // all other domains
      '*',
    ],
  },
}

module.exports = nextConfig
