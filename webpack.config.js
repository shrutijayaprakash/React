module.exports = {
    entry:'./main.js',
    output:{
        path:'./',
        filename:'bundle.js'
    },
    devServer: {
        port:'3333',
        inline:true
     },
    module: {
        loaders:[
         {
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel',
            query:{
                presets: ['react', 'es2015']
                }
            }
         ]
    }

}