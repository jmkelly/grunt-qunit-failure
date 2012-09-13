/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    qunit: {
      files: ['test/**/*.html']
    }
  });

  // Default task.
  grunt.registerTask('default', 'qunit');

};
