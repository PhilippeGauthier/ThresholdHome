module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.initConfig({	
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} // dev
		}, // compass
        autoprefixer: {
            dist: {
                files: {
                    'public/css/styles.css': '_/sass/build/styles.css'
                }
            },
            options: {
				browsers: ['last 2 version', 'ie 8', 'ie 7']
			}
        },
        cssmin: {
		  compress: {
		    files: {
		      'public/css/styles.min.css': 'public/css/styles.css'
		    }
		  }
		},
		watch: {
			options: { livereload: true },
			html: {
				files: ['public/index.html']
			},
			sass: {
				files: ['_/sass/*.scss'],
				tasks: ['compass:dev']
			},
	        styles: {
                files: ['_/sass/build/*.css'],
                tasks: ['autoprefixer','cssmin']
            } // styles
		} // watch
	}) //initConfig
	grunt.registerTask('default','watch');
} //exports