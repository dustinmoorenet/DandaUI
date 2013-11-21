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
            U: false,
            JST: false
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
            JST: false,
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
          'dist/danda-ui.css': 'css/*.styl'
        },
        options: {
          paths: ['css'],
          import: ['theme/dark']
        }
      }
    },
    handlebars: {
      dist: {
        src: 'html/*.html',
        dest: 'g/jst.js'
      }
    },
    watch: {
      files: ['<%= js_src %>', '<%= js_test_src %>', 'css/**.styl', 'html/*.html'],
      tasks: ['jshint', 'uglify', 'stylus', 'handlebars']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.registerTask('default', ['jshint', 'uglify', 'stylus', 'handlebars']);
};
