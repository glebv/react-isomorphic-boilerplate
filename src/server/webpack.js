// Webpack dev server
// Ran in parallel with the Express server

import WebpackDevServer from "webpack-dev-server";
import webpack from "webpack";
import config from "../../webpack.config.dev";

var compiler = webpack(config);
var bundleStart = null;

compiler.plugin('compile', function() {
  console.log('Bundling...');
  bundleStart = Date.now();
});

compiler.plugin('done', function() {
  console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
});

var server = new WebpackDevServer(compiler, {
  // webpack-dev-server options
  publicPath: config.output.publicPath,
  hot: true,
  quiet: false,
  noInfo: true,
  stats: {
    colors: true,
    progress: true
  }
});
server.listen(8080, "localhost", function() {});
