dev=require('./dev')
production=require('./production')
commons=require('./commons.json')

module.exports =  {
  dev:dev,
  production:production,
  entries:commons.entries,
  tracker:commons.stats_file,
  output:commons.output,
  static_folder:commons.static_folder
}
