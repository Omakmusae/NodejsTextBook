require('./2_1_test')//2_1_test.js를 실행만 하고 싶을 때, require 후 대입 안하면 됨

console.log(require)
// [Function: require] {
//     resolve: [Function: resolve] { paths: [Function: paths] },
//     main: {
//       id: '.',
//       path: 'c:\\Users\\quintet\\Desktop\\dev\\prac\\nodejsPrac\\NodejsTextBook\\2_node_basic',
//       exports: {},
//       filename: 'c:\\Users\\quintet\\Desktop\\dev\\prac\\nodejsPrac\\NodejsTextBook\\2_node_basic\\3_require.js',
//       loaded: false,
//       children: [ [Object] ],
//       paths: [ ...],
//     },
//     cache: [Object: null prototype] {
//         'c:\\Users\\quintet\\Desktop\\dev\\prac\\nodejsPrac\\NodejsTextBook\\2_node_basic\\3_require.js': {
//             id: '.',
//             path: 'c:\\Users\\quintet\\Desktop\\dev\\prac\\nodejsPrac\\NodejsTextBook\\2_node_basic',
//             exports: {},
//             filename: 'c:\\Users\\quintet\\Desktop\\dev\\prac\\nodejsPrac\\NodejsTextBook\\2_node_basic\\3_require.js',
//             loaded: false,
//             children: [Array],
//             paths: [Array]
//         },
//         'c:\\Users\\quintet\\Desktop\\dev\\prac\\nodejsPrac\\NodejsTextBook\\2_node_basic\\2_1_test.js': {
//             id: 'c:\\Users\\quintet\\Desktop\\dev\\prac\\nodejsPrac\\NodejsTextBook\\2_node_basic\\2_1_test.js',
//             path: 'c:\\Users\\quintet\\Desktop\\dev\\prac\\nodejsPrac\\NodejsTextBook\\2_node_basic',
//             exports: {},
//             filename: 'c:\\Users\\quintet\\Desktop\\dev\\prac\\nodejsPrac\\NodejsTextBook\\2_node_basic\\2_1_test.js',
//             loaded: true,
//             children: [Array],
//             paths: [Array]
//         },
//         'c:\\Users\\quintet\\Desktop\\dev\\prac\\nodejsPrac\\NodejsTextBook\\2_node_basic\\2_CommonJS_module_system.js': {
//             id: 'c:\\Users\\quintet\\Desktop\\dev\\prac\\nodejsPrac\\NodejsTextBook\\2_node_basic\\2_CommonJS_module_system.js',
//             path: 'c:\\Users\\quintet\\Desktop\\dev\\prac\\nodejsPrac\\NodejsTextBook\\2_node_basic',
//             exports: [Object],
//             filename: 'c:\\Users\\quintet\\Desktop\\dev\\prac\\nodejsPrac\\NodejsTextBook\\2_node_basic\\2_CommonJS_module_system.js',
//             loaded: true,
//             children: [],
//             paths: [Array]
//         }
//     }
// }


