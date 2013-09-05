module.exports = function(grunt) {
  grunt.initConfig({
    js_src: ['g/**/*.js', 'u/**/*.js'],
    jshint: {
      dist: {
        src: '<%= js_src %>',
        options: {
          curly: true,
          eqeqeq: true,
          immed: true,
          latedef: true,
          newcap: true,
          noarg: true,
          sub: true,
          undef: true,
          boss: true,
          eqnull: true,
          globals: {
            Backbone: false,
            G: false,
            U: false
          }
        }
      }
    },
    concat: {
      dist: {
        src: '<%= js_src %>',
        dest: 'dist/danda-ui.js'
      }
    },
    uglify: {
      dist : {
        src : 'dist/danda-ui.js',
        dest : 'dist/danda-ui.min.js'
      }
    },
    stylus: {
      compile: {
        files: {
          'dist/danda-ui.css': 'css/**.styl'
        },
        options: {
          import: ['theme']
        }
      }
    },
    watch: {
      files: ['<%= js_src %>', 'css/**.styl'],
      tasks: ['jshint', 'concat', 'uglify', 'stylus']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'stylus']);
};
