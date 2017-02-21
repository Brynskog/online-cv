module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		/* stylesheet */

		sass: {
			options:{
				outputStyle: 'compressed'
			},
			build: {
				files: {
					'deploy/css/main.css': ['source/sass/main.scss']
				}
			}
		},

		postcss: {
			options: {
				map: false,
				processors: [
					require('autoprefixer')({browsers: 'last 5 versions'}),
					require('cssnano')()
				]
			},
			build: {
				files: {
					'deploy/css/main.css': 'deploy/css/main.css'
				}
			}
		},

		/* javascript */

		uglify: {
			dist: {
				files: {
					'deploy/js/main.js': [
						'source/js/*.js',
						'source/js/components/*.js'

					]
				}
			}
		},

		copy: {
			dist:{
				cwd: 'source/assets',  // set working folder / root to copy
				src: '**/*',           // copy all files and subfolders
				dest: 'deploy/assets',    // destination folder
				expand: true
			}
		},

		clean: ['deploy/**'],

		/* includereplace */

		includereplace: {
			build: {
				files: [{
					src: 'source/html/*.html',
					dest: 'deploy/',
					flatten: true,
					expand: true
				}]
			}
		},

		/* utility */

		watch: {

			stylesheet: {
				files: ['source/sass/**/*.scss'],
				tasks: ['sass', 'postcss']
			},

			javascript: {
				files: ['source/js/**/*.js'],
				tasks: ['uglify']
			},

			html: {
				files: ['source/html/**/*.html'],
				tasks: ['includereplace']
			}
		}
	});

	/* dependencies */

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-include-replace');

	/* tasks */

	grunt.registerTask('default', ['clean','sass', 'postcss', 'uglify', 'copy' , 'includereplace']);
};