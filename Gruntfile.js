module.exports = function(grunt) {
	grunt.initConfig({
		snake_scripts: grunt.file.expand(['app/**/*.js']),
		snake_htmls: grunt.file.expand(['app/**/*.html']),
		snake_all: '<%= snake_scripts %>,<%= snake_htmls %>',

		connect: {
			all: {
				options: {
					port: 9001,
					base: 'app',
					open: {
						target: 'http://localhost:9001',
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
					livereload: true
				}
			},

			karma: {
				files: '<%= snake_scripts %>',
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

	grunt.registerTask('server', ['connect', 'watch']);
	grunt.registerTask('test', ['karma:unit:start', 'watch']);

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');
};