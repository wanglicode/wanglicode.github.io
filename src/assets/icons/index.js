const req = require.context('./svg', false, /\.svg$/)

// console.log('文件req----', req)
// console.log('文件req----keys--', req.keys())

const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
