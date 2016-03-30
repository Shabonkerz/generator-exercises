'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the striking ' + chalk.red('generator-exercises') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your exercise name',
      store: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('exercise.js'),
      this.destinationPath('js/' + this.props.name + '.js'), {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('test.js'),
      this.destinationPath('js/tests/' + this.props.name + '.js'), {
        name: this.props.name
      }
    );
  }
});
