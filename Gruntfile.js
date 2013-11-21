module.exports = function(grunt) {
  grunt.initConfig({
    js_src: ['g/*.js', 'g/**/index.js', 'u/*.js', 'u/**/index.js', 'g/**/*.js', 'u/**/*.js'],
    js_test_src: ['test/g/**/index.js', 'test/u/**/index.js', 'test/g/**/*.js', 'test/u/**/*.js'],
    jshint: {
      dist: {
        src: '<%= js_src %>',
        options: {
          curly: false,
          laxbreak: true,
          eqeqeq: true,
          latedef: true,
          newcap: true,
          noarg: true,
          sub: true,
          undef: true,
          boss: true,
          eqnull: true,
          browser: true,
          globals: {
            $: false,
            _: false,
            console: false,
            Backbone: false,
            G: false,
            U: false
          }
        }
      },
      test: {
        src: '<%= js_test_src %>',
        options: {
          curly: false,
          laxbreak: true,
          eqeqeq: true,
          latedef: true,
          newcap: true,
          noarg: true,
          sub: true,
          undef: true,
          boss: true,
          eqnull: true,
          browser: true,
          globals: {
            $: false,
            _: false,
            Backbone: false,
            G: false,
            U: false,
            expect: false,
            describe: false,
            it: false
          }
        }
      }
    },
    uglify: {
      dist : {
        src: '<%= js_src %>',
        dest : 'dist/danda-ui.min.js',
        options: {
          sourceMap: 'dist/danda-ui.map',
          sourceMapRoot: '/js/source',
          sourceMappingURL: 'danda-ui.map',
        }
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
      files: ['<%= js_src %>', '<%= js_test_src %>', 'css/**.styl'],
      tasks: ['jshint', 'uglify', 'stylus']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.registerTask('default', ['jshint', 'uglify', 'stylus']);
};
