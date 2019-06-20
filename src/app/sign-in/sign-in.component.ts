import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'sign-in',
	moduleId: module.id,
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute
	) { }

	ngOnInit() { }

	signInUser() {
		this.router.navigate(['/tasks']);
	}
	createAccount() {
		this.router.navigate(['']);
	}
}