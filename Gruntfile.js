module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-bootlint');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('build', ['wiredep', 'jade']);
  grunt.registerTask('lint', ['jshint', 'htmlhint', 'htmllint', 'csslint', 'bootlint']);
  grunt.registerTask('serve', ['build', 'lint', 'connect:livereload', 'webdriver', 'watch']);
  grunt.registerTask('test', ['build', 'lint', 'connect:test', 'webdriver']);

  var port = 5000;

  grunt.initConfig({
    connect: {
      livereload: {
        options: {
          port: port,
          open: true,
          livereload: port + 1
        }
      },
      test: {
        options: {
          port: port
        }
      }
    },

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      html: {
        files: ['*.html'],
        tasks: ['htmlhint', 'htmllint', 'bootlint', 'webdriver']
      },
      js: {
        files: ['Gruntfile.js', 'js/*.js', 'features/*.js'],
        tasks: ['jshint', 'webdriver']
      },
      css: {
        files: ['css/*.css'],
        tasks: ['csslint']
      },
      jade: {
        files: ['*.jade'],
        tasks: ['jade']
      },
      features: {
        files: ['features/*.feature'],
        tasks: ['webdriver']
      },
      options: {
        livereload: port + 1,
      },
    },

    wiredep: {
      all: {
        src: [
          'index.html',
          'index.jade'
        ]
      }
    },

    jshint: {
      options: {
        force: true
      },
      all: ['Gruntfile.js', 'js/*.js']
    },

    htmlhint: {
      all: {
        options: {
          "tag-pair": true
        },
        src: ['*.html']
      }
    },

    htmllint: {
      all: {
        options: {
          force: true
        },
        src: ['*.html']
      }
    },

    csslint: {
      all: {
        src: ['css/*.css']
      }
    },

    bootlint: {
      options: {
        stoponerror: false,
      },
      files: ['*.html']
    },

    jade: {
      all: {
        options: {
          pretty: true
        },
        files: {
          'index.html': 'index.jade'
        }
      }
    },

    webdriver: {
      test: {
        configFile: './wdio.conf.js'
      }
    }
  });
};
