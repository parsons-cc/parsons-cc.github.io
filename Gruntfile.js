/*global module:false*/
module.exports = function(grunt) {

  // Load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    shell: {
      dev: {
        command: 'bundle exec jekyll serve --force_polling'
      },
      build: {
        command: 'bundle exec jekyll build'
      }
    },

    'release-it' : {
      options: {
        pkgFiles: ['package.json', 'bower.json'],
        commitMessage: 'Release %s',
        tagName: '%s',
        tagAnnotation: 'Release %s',
        publish: false,
        distRepo: false
      }
    },


  });


  // Default task.
  grunt.registerTask('default', ['build']);

  grunt.registerTask('build', ['shell:build']);

  grunt.registerTask('dev', ['shell:dev']);

  // release tasks to aid in versioning/tagging
  // also ensures that a built version is always tagged
  grunt.registerTask( 'release', ['build', 'release-it'] );
  grunt.registerTask( 'release:minor', ['build', 'release-it:minor'] );
  grunt.registerTask( 'release:major', ['build', 'release-it:major'] );


  grunt.util.linefeed = '\n';

};
