module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        ["babel-plugin-root-import", {   //  相对路劲插件
            "rootPathSuffix": "./src/", //  将src目录设置为根入口
            "rootPathPrefix": "@"    //  src对应的别名（如果不设置，默认为“~”）
        }],
    ]
};
