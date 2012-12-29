module.exports = function(grunt) {
    
// Project configuration.
grunt.initConfig({
    csso: {
        dist: {
            src: 'bootstrap-narrow.css',
            dest: 'bootstrap-narrow.min.css'
        }
    },
    less:{
        dist:{
            src:'./less/bootstrap-narrow.less', 
            dest:'bootstrap-narrow.css'
        }
    },
    watch: {
        files: ['./less/*.less'],
        tasks: ['less', 'csso']
    }
});

// Load npm tasks
grunt.loadNpmTasks('grunt-csso');
grunt.loadNpmTasks('grunt-less');

// Default task.
grunt.registerTask('default', 'watch');

// less
grunt.registerTask('less', 'less csso');

};