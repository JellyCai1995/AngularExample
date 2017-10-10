import '../css/index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import user from '../modules/user/js/user.js';
import bookshelf from '../modules/bookshelf/js/bookshelf.js';
import bookshelf from '../modules/bookdetail/js/bookdetail.js';
import config from './config.js';
import router from './router.js';


//导出app
var app = angular.module('app',['config','router','user','bookshelf','bookdetail']);
export {app};