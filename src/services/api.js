export default {
  queryRouteList: '/routes',

  queryUserInfo: 'POST /usercenter/user/current',
  logoutUser: 'POST /logout',
  loginUser: 'POST /login',

  queryUser: '/usercenter/user/get',
  queryUserList: 'POST /usercenter/user/page',
  updateUser: 'POST /usercenter/user/addOrUpdate',
  createUser: 'POST /usercenter/user/addOrUpdate',
  removeUser: 'POST /usercenter/user/delete',
  removeUserList: 'POST /usercenter/user/delete',
  resetPassword: 'POST /usercenter/user/resetPassword',

  queryPostList: '/posts',

  queryDashboard: '/dashboard',

  getMenuTree: '/security/menu/getMenuTree',
  queryMenu: '/security/menu/get',
  getParentMenus: '/security/menu/getParentMenus',
  queryMenuList: 'POST /security/menu/page',
  updateMenu: 'POST /security/menu/addOrUpdate',
  createMenu: 'POST /security/menu/addOrUpdate',
  removeMenu: 'POST /security/menu/delete',
  removeMenuList: 'POST /security/menu/delete',

  queryRole: '/security/role/get',
  getRoles: '/security/role/getRoles',
  queryRoleList: 'POST /security/role/page',
  updateRole: 'POST /security/role/addOrUpdate',
  createRole: 'POST /security/role/addOrUpdate',
  removeRole: 'POST /security/role/delete',
  removeRoleList: 'POST /security/role/delete',
  saveRoleMenu: 'POST /security/role_menu/addOrUpdate',
  getRoleMenuByRoleId: 'GET /security/role_menu/getRoleMenuByRoleId',

  queryCategoryByPage: 'POST /folk/category/page',
  queryCategoryById: 'GET /folk/category/get',
  updateCategory: 'POST /folk/category/edit',
  createCategory: 'POST /folk/category/add',
  removeCategory: 'POST /folk/category/delete',
  removeCategoryList: 'POST /folk/category/delete',

  queryCemeteryByPage: 'POST /folk/cemetery/page',
  queryCemeteryById: 'GET /folk/cemetery/get',
  updateCemetery: 'POST /folk/cemetery/edit',
  createCemetery: 'POST /folk/cemetery/add',
  removeCemetery: 'POST /folk/cemetery/delete',
  removeCemeteryList: 'POST /folk/cemetery/delete',

  queryPeopleByPage: 'POST /folk/people/page',
  queryPeopleById: 'GET /folk/people/get',
  viewPeopleById: 'GET /folk/people/view',
  updatePeople: 'POST /folk/people/edit',
  createPeople: 'POST /folk/people/add',
  removePeople: 'POST /folk/people/delete',
  removePeopleList: 'POST /folk/people/delete',

  queryCategoryContentByPage: 'POST /folk/category_content/page',
  queryCategoryContentById: 'GET /folk/category_content/get',
  updateCategoryContent: 'POST /folk/category_content/edit',
  createCategoryContent: 'POST /folk/category_content/add',
  removeCategoryContent: 'POST /folk/category_content/delete',
  removeCategoryContentList: 'POST /folk/category_content/delete',

  queryTreeByPage: 'POST /folk/people/tree',
  getFamilyTree: 'POST /folk/people/getFamilyTree',

  queryVillage: 'GET /bs/village/get',
  getCurrentVillage: 'GET /bs/village/getCurrentVillage',
  queryVillageList: 'POST /bs/village/page',
  updateVillage: 'POST /bs/village/addOrUpdate',
  createVillage: 'POST /bs/village/addOrUpdate',
  removeVillage: 'POST /bs/village/delete',
  removeVillageList: 'POST /bs/village/delete',

  queryDict: 'GET /basic/dict/get',
  queryDictList: 'POST /basic/dict/page',
  updateDict: 'POST /basic/dict/addOrUpdate',
  createDict: 'POST /basic/dict/addOrUpdate',
  removeDict: 'POST /basic/dict/delete',
  removeDictList: 'POST /basic/dict/delete',
  getParentDict: 'POST /basic/dict/getParentDict',
  getSubDictListByParentCode: 'POST /basic/dict/getSubDictListByParentCode',
  getProdTeam: 'GET /basic/dict/getProdTeam',
  getCategoryList: 'GET /folk/category/getCategoryList',
  getBranchList: 'GET /basic/dict/getBranchList',
  fileUpload: 'POST /file_upload/upload',

  queryRegion: '/basic/region/get',
  queryRegionList: 'POST /basic/region/page',
  updateRegion: 'POST /basic/region/addOrUpdate',
  createRegion: 'POST /basic/region/addOrUpdate',
  removeRegion: 'POST /basic/region/delete',
  removeRegionList: 'POST /basic/region/delete',

  addRelationship: 'POST /folk/people/addRelationship',
  configMenu: 'POST /security/user_menu/addOrUpdate',
  getUserMenuByUserId: 'GET /security/user_menu/getUserMenuByUserId',

  getOverview: 'GET /bs/village/getOverview',

  getNames: 'POST /folk/people/getNames',

  signup: 'POST //usercenter/user/signup',
}
