if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}
const fs = require('fs')
// const imgur = require('imgur')
// const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID


function getUser (req) {
  return req.user
}

// const imgurFileHandler = file => {
//   return new Promise(async (resolve, reject) => {
//     console.log('有沒有進handler')
//     if (!file) return resolve(null)
//     const img = await imgur.uploadFile(file.path)
//       .then((img) => {
//         console.log('有沒有進handler下面',img)
//         resolve(img?.link || null)
//       })
//       .catch(err => reject(err))    
//     return img
//   })
// }

module.exports = {
	getUser,
//   imgurFileHandler,
  // localFileHandler
}