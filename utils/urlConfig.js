const serverRoot = 'http://176.47.8.88:8999'

// 获取所有座位信息
const chairs = serverRoot + '/chair/'

// 获取轮播图
const banner = serverRoot + '/banner/'

// 占座
const chair_id = serverRoot + '/chair/';

// 搜索
const search = serverRoot + '/search';

module.exports = {
  chair_id: chair_id,
  search: search,
  chairs: chairs,
  banner: banner,
}