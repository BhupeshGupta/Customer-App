import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from '../home/home';
@Component({
    templateUrl: 'login.html'
})
export class LoginPage {
	movies: Array<any>;
    constructor(private navController: NavController) {
    }
    changePage(event) {
		this.navController.push(HomePage);
	}   
}