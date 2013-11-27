module.exports = function(grunt) {
  grunt.initConfig({
    js_src: ['m/**/index.js', 'u/**/index.js', 'm/**/*.js', 'g/*.js', 'g/**/index.js', 'g/**/*.js', 'u/**/*.js'],
    js_test_src: ['test/m/**/index.js', 'test/g/**/index.js', 'test/u/**/index.js', 'test/m/**/*.js', 'test/g/**/*.js', 'test/u/**/*.js'],
    handlebars: {
      dist: {
        src: 'templates/*.html',
        dest: 'g/jst.js',
        options: {
          processName: function(filePath) {
              return filePath.replace(/^templates\//, '').replace(/\.html$/, '');
          }
        }
      }
    },
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
            HumanView: false,
            Handlebars: false,
            M: false,
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
            HumanView: false,
            Handlebars: false,
            M: false,
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
          mangle: true,
          compress: true,
          report: 'gzip',
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
    watch: {
      files: ['<%= js_src %>', '<%= js_test_src %>', 'css/**.styl', 'templates/*.html'],
      tasks: ['handlebars', 'jshint', 'uglify', 'stylus']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.registerTask('default', ['handlebars', 'jshint', 'uglify', 'stylus']);
};
