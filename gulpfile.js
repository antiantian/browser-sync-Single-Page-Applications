var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var streamify = require("gulp-streamify")
var vueify = require("vueify");
var babelify = require("babelify");
var watchify = require('watchify');
var hmr = require('browserify-hmr');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var assign = require('lodash.assign');
var uglify = require('gulp-uglify');
var env = require('gulp-env');
var fs = require('fs');
var less = require('gulp-less');//less编译
var minifyCSS = require('gulp-clean-css');//css压缩
var concat = require('gulp-concat');        // 文件合并
var autoprefixer = require('gulp-autoprefixer');//处理浏览器前缀
var connect = require('gulp-connect');//实时刷新
//var url = require('url');
var proxy = require('http-proxy-middleware');
var browserSyncSpa  = require('browser-sync-middleware-spa');
var historyApiFallback = require('connect-history-api-fallback')
var path = require('path')
//url.resolve('http://192.168.1.115:24000/api', '/api') // 'http://example.com/two'
//定义less任务
gulp.task('less', function() {
  gulp.src('./src/static/css/*.less')   //获取流['./src/less/*.less']
    .pipe(less())
    .pipe(concat('indexapp.css')) 
  .pipe(minifyCSS())        //css压缩
  .pipe(autoprefixer({ browsers: ['> 1%','IE 7'], cascade: false }))
  .pipe(connect.reload()) //监视less文件是否被改变
    .pipe(gulp.dest('./src/static/css/newcss'));//指定处理完后文件输出的路径；
  
});
//定义livereload任务
// gulp.task('connect', function () {
     // connect.server({
     // root: 'app',
         // port:3000,
         // livereload: true
    // });
// });

//监视器
gulp.task('watchLess', function () {
  gulp.watch('./src/static/css/*.less', ['less']);
});
// 在这里添加自定义 browserify 选项
var customOpts = {
  entries: ['./src/app.js'],
  debug: true,
  plugin:[hmr]
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));
b.transform(vueify);
b.transform("babelify", {presets: ["es2015"]})

b.on('update', bundle); // 当任何依赖发生改变的时候，运行打包工具

function bundle() {
  return b.bundle()
    .on('error', function (meesage) {
      console.log(meesage)
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./tmp'));
}

gulp.task('devTransJs', bundle);


gulp.task('trans_imgs',function(){
  var fileList = [];
  function walk(path){
    var dirList = fs.readdirSync(path);
    dirList.forEach(function(item){
      if(fs.statSync(path + '/' + item).isDirectory()){
        walk(path + '/' + item);
      }else{
        if(item == '.DS_Store') return;
        fileList.push('./static/images/'+item);
      }
    });
  }
  walk('src/static/images');

  var arrayString = '['
  fileList.forEach(function(item){
    arrayString += '"'+item+'",'
  })
  arrayString += ']'
  var content = 'var imgs = ' + arrayString +';' + '\r\nexport default imgs;'
  fs.writeFileSync('src/static/js/img.js', content, 'utf-8');
  return;
})



gulp.task('destHtml',function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./tmp/'))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('destStatic',function () {
  return gulp.src('./src/static/**')
    .pipe(gulp.dest('./tmp/static'))
    .pipe(gulp.dest('./dist/static'))
})

gulp.task('default',['less','watchLess','destStatic','destHtml','devTransJs'],function () {
// 代理配置, 实现环境切换  'v1_activity'http://192.168.1.115:24000
  var middleware = proxy(
         ['/v1_activity'], {
            target: 'http://192.168.1.115:24000', 
            changeOrigin: true,
            pathRewrite: {
          '^/v1_activity': ''
        }}
     );
  var middleware2= proxy(
         ['/v1_detail'], {
            target: 'http://xhcj-api.qqdcloud.com:8888/api/v0.1/cms/', 
            changeOrigin: true,
            pathRewrite: {
          '^/v1_detail': ''
        }}
     );
  const content_404 = fs.readFileSync(path.join(__dirname, '404.html'));
  // var baseDir         = __dirname + '/_public/index.html';
  const content_index = fs.readFileSync(path.join(__dirname, '/tmp/index.html')); 
  var baseDirindex         = __dirname + '/tmp/index.html';
  //browserSyncSpa(/^[^\.]+$/, baseDirindex),
  browserSync({
    port:8000,
    //中间件 - 需要V2.1.0

    server:{
      baseDir:['tmp'],
      middleware: [historyApiFallback(),middleware,middleware2]
    }

  }, (err, bs) => {
    bs.addMiddleware("*", (req, res) => {
        // Provides the 404 content without redirect.
        res.write(content_404);
        res.end();
    });
})


  gulp.watch('src/static/images/*', ['destStatic',content_index]).on('change',function(){
    setTimeout(function(){reload()},100)
  });


})


gulp.task('html',function () {
  return gulp()
})

gulp.task('build', ['destHtml'], function(){

  const envs = env.set({
    NODE_ENV: 'production'
  });

  return browserify('./src/app.js')
    .transform(vueify)
    .transform("babelify", {presets: ["es2015"]})
    .bundle().on('error', function(err){
      console.log(err.message);
      this.emit('end');
    })
    .pipe(source('app.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('dist'));
});

