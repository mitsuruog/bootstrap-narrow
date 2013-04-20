module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		csso: {
			dist: {
				src: './bootstrap-narrow/bootstrap-narrow.css',
				dest: './bootstrap-narrow/bootstrap-narrow.min.css'
			}
		},
		watch: {
			files: ['./bootstrap-narrow/less/*.less'],
			tasks: ['less', 'csso']
		},
		less: {
			production: {
				files: {
					"./bootstrap-narrow/bootstrap-narrow.css": "./bootstrap-narrow/less/bootstrap-narrow.less"
				}
			}
		}
	});

	// Load npm tasks
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-contrib');

	// Default task.
	grunt.registerTask('default', 'watch');

};