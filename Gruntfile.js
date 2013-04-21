module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		csso: {
			dist: {
				src : './lib/bootstrap-narrow.css',
				dest: './lib/bootstrap-narrow.min.css'
			}
		},
		watch: {
			files: ['./lib/less/*.less'],
			tasks: ['less', 'csso']
		},
		less: {
			production: {
				files: {
					"./lib/bootstrap-narrow.css": "./lib/less/bootstrap-narrow.less"
				}
			}
		}
	});

	// Load npm tasks
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', 'watch');

};