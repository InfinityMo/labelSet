const mock = [{
  id: '1',
  title: '悦诗风吟护肤洁面套装新春限定礼盒装，拍一发10，送小样悦诗风吟护肤洁面套装新春限定礼盒装，拍一发10，送小样,悦诗风吟护肤洁面套装新春限定礼盒装，拍一发10，送小样悦诗风吟护肤洁面套装新春限定礼盒装，拍一发10，送小样',
  image: [
    'https://img.alicdn.com/imgextra/i3/845001562/O1CN01n9YFkY1NPRH87BMuq_!!0-item_pic.jpg_430x430q90.jpg',
    'https://img.alicdn.com/imgextra/i3/845001562/O1CN01pSQXp01NPRGXEYtFl_!!845001562-0-lubanu-s.jpg_430x430q90.jpg',
    'https://img.alicdn.com/imgextra/i3/845001562/O1CN0107PIr51NPRHp8dTUg_!!0-item_pic.jpg_430x430q90.jpg'
  ],
  cate: ['jm', 'ms', 'qt'],
  valid: '1',
  url: 'https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.9.2a5647b8GfKpa5&id=523226770331&skuId=4216179883463&areaId=310100&user_id=845001562&cat_id=2&is_b=1&rn=34d58dd19df0f8be008465f7438b06a6'
}, {
  id: '2',
  title: '悦诗风吟护肤洁面套装新春限定礼盒装，拍一发10，送小样悦诗',
  image: [
    'https://img.alicdn.com/imgextra/i4/2671267336/O1CN01EQzZA2243w7d63Yj1_!!2671267336.jpg_430x430q90.jpg',
    'https://img.alicdn.com/imgextra/i1/725677994/O1CN01SuPsLK28vIjhQIdD2_!!725677994.jpg_430x430q90.jpg',
    'https://img.alicdn.com/imgextra/i4/725677994/O1CN01DEFtUV28vIn5cz0sO_!!0-item_pic.jpg_430x430q90.jpg'
  ],
  cate: [],
  valid: '0',
  url: 'https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.9.2a5647b8GfKpa5&id=523226770331&skuId=4216179883463&areaId=310100&user_id=845001562&cat_id=2&is_b=1&rn=34d58dd19df0f8be008465f7438b06a6'
}, {
  id: '3',
  title: '【双12预售】elixir怡丽丝尔防护精华乳防晒霜 保湿美白银管',
  image: [
    'https://img.alicdn.com/imgextra/i4/3077102354/O1CN01ZxeUlE1TGAvmiTGcW_!!0-item_pic.jpg_430x430q90.jpg',
    'https://img.alicdn.com/imgextra/i1/3077102354/O1CN01DX9YfO1TGAvolycp3_!!3077102354.jpg_430x430q90.jpg',
    'https://img.alicdn.com/imgextra/i1/3077102354/O1CN01LnpDB61TGAydJLQSt_!!3077102354.jpg_430x430q90.jpg'
  ],
  cate: ['fs', 'ys', 'mm'],
  valid: '1',
  url: 'https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-15814329589.364.7e7d7ce33vJ9Eu&id=544590679748&rn=6559bea38c4433c37431f26a91f5a264'
}, {
  id: '4',
  title: 'MAKEUPFOREVER玫珂菲全新双用水粉霜粉底水润轻薄',
  image: [
    'https://img.alicdn.com/imgextra/i3/2500428739/O1CN01OVAz9W2EQVqswh16J_!!2500428739.jpg_430x430q90.jpg',
    'https://img.alicdn.com/imgextra/i1/2500428739/O1CN01qqLjos2EQVqzZOrF2_!!2500428739.jpg_430x430q90.jpg',
    'https://img.alicdn.com/imgextra/i3/2500428739/O1CN01ur4Neb2EQVqwfhgdL_!!2500428739.jpg_430x430q90.jpg'
  ],
  cate: ['fs', 'ry', 'jh'],
  valid: '1',
  url: 'https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-15814329589.364.7e7d7ce33vJ9Eu&id=544590679748&rn=6559bea38c4433c37431f26a91f5a264'
}, {
  id: '5',
  title: 'MAKEUPFOREVER玫珂菲全新双用水粉霜粉底水润轻薄',
  image: [
    'https://img.alicdn.com/imgextra/i3/2500428739/O1CN01OVAz9W2EQVqswh16J_!!2500428739.jpg_430x430q90.jpg',
    'https://img.alicdn.com/imgextra/i1/2500428739/O1CN01qqLjos2EQVqzZOrF2_!!2500428739.jpg_430x430q90.jpg',
    'https://img.alicdn.com/imgextra/i3/2500428739/O1CN01ur4Neb2EQVqwfhgdL_!!2500428739.jpg_430x430q90.jpg'
  ],
  cate: [],
  valid: '0',
  url: 'https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-15814329589.364.7e7d7ce33vJ9Eu&id=544590679748&rn=6559bea38c4433c37431f26a91f5a264'
}]
const cates = [{
  name: '乳液',
  value: 'ry'
}, {
  name: '洁面',
  value: 'jm'
}, {
  name: '精华',
  value: 'jh'
}, {
  name: '面霜',
  value: 'ms'
}, {
  name: '化妆水',
  value: 'hzs'
}, {
  name: '面膜',
  value: 'mm'
}, {
  name: '眼霜',
  value: 'ys'
}, {
  name: '防晒',
  value: 'fs'
}, {
  name: '原液',
  value: 'ruy'
}, {
  name: '其他',
  value: 'qt'
}]
export { mock, cates }
