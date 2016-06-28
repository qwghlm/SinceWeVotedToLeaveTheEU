module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        shell : {
            serve : {
                command : 'python -mSimpleHTTPServer'
            }
        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    './css/main.css': './sass/main.scss'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['sass']);
    grunt.registerTask('serve', ['shell:serve']);

};
