module.exports = function(grunt) {
	grunt.initConfig({
		snake_scripts: grunt.file.expand([
			'app/bower_components/angular/angular.js',
			'app/**/*.js',
			'!app/snake_game.js',
			'app/snake_game.js'
		]),
		snake_htmls: grunt.file.expand(['app/**/*.html']),
		snake_all: ['<%= snake_htmls %>', '<%= snake_scripts %>'],

		connect: {
			all: {
				options: {
					port: 9000,
					base: 'app',
					open: {
						target: 'http://localhost:9000',
						appName: 'chrome'
					},
					livereload: true
				}
			}
		},

		watch: {
			all: {
				files: '<%= snake_all %>',
				options: {
					livereload: true,
				}
			},

			karma: {
				files: '<%= snake_all %>',
				tasks: ['karma:unit:run']
			}
		},

		karma: {
			unit: {
				options: {
					files: '<%= snake_scripts %>',
					browsers: ['PhantomJS'],
					frameworks: ['jasmine'],
					background: true
				}
			}
		}
	});

	grunt.registerTask('server', ['connect', 'watch:all']);
	grunt.registerTask('test', ['karma:unit:start', 'watch:karma']);

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');
};