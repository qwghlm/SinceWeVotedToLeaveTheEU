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
        },

        watch: {
            scripts: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true,
                },
            },
        },

    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);
    grunt.registerTask('serve', ['shell:serve']);

};
