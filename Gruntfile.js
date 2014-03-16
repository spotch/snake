module.exports = function(grunt) {
	grunt.initConfig({
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
				files: ['app/**/*.js', 'app/**/*.html'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.registerTask('server', ['connect', 'watch']);

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
};