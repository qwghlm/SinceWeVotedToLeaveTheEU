module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        shell : {
            serve : {
                command : 'python -mSimpleHTTPServer'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-shell');

    // Default task(s).
    grunt.registerTask('serve', ['shell:serve']);

};
