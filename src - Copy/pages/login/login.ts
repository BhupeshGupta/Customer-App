import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage2} from '../home2/home2';
@Component({
    templateUrl: './login.html'
})
export class LoginPage {
	movies: Array<any>;
    constructor(private navController: NavController) {
    }
    changePage(event) {
		this.navController.push(HomePage2);
	}   
}