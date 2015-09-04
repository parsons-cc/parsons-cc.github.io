/*global module:false*/
module.exports = function(grunt) {

  // Load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    less: {
      dev: {
        options: {
          compress: false
        },
        files: {
          'assets/css/style.css' : ['assets/css/src/style.less']
        }
      }
    },

    jekyll : {
      options : {
        src: '.'
      },

      dev: {
        options: {
          dest: './_site'
        }
      }
    },

    watch : {
      options: {
        livereload: true
      },

      css: {
        files: ['assets/css/src/**/*.less'],
        tasks: ['css', 'jekyll:dev']
      },

      js: {
        files: ['assets/js/**/*.js'],
        tasks: ['jekyll:dev']
      },

      html: {
        files: ['*.html', '*.md', '_includes/*.html', '_layouts/*.html', '_posts/*'],
        tasks: ['jekyll'],
        options: {
          spawn: false
        }
      }
    },


    connect: {
      server: {
        options: {
          port: 8000,
          base: './_site'
        }
      }
    },

    // shell: {
    //   dev: {
    //     command: 'bundle exec jekyll serve --force_polling'
    //   },
    //   build: {
    //     command: 'bundle exec jekyll build'
    //   }
    // },

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

  grunt.registerTask('dev', ['jekyll:dev', 'connect', 'watch']);

  grunt.registerTask('build', ['css', 'jekyll']);

  grunt.registerTask('css', ['less']);


  // release tasks to aid in versioning/tagging
  // also ensures that a built version is always tagged
  grunt.registerTask( 'release', ['build', 'release-it'] );
  grunt.registerTask( 'release:minor', ['build', 'release-it:minor'] );
  grunt.registerTask( 'release:major', ['build', 'release-it:major'] );


  grunt.util.linefeed = '\n';

};
