import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'core-app',
	moduleId: module.id,
	templateUrl: './core-app.component.html',
	styleUrls: ['./core-app.component.css']
})

export class CoreAppComponent implements OnInit {

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute
	) { }

	ngOnInit() { }
	public textBody = 'Lorem ipsum amet blandit imperdiet augue nulla, aliquam consectetur nunc rhoncus cras, consectetur enim consequat habitasse volutpat. ut integer vehicula morbi sapien donec mollis neque rutrum, tortor vestibulum consequat a risus egestas iaculis eros pulvinar, tempus commodo fringilla euismod a morbi tempus. eget himenaeos dapibus egestas curabitur elit habitant vestibulum tempus, volutpat fringilla lacus risus pulvinar rhoncus erat, at auctor venenatis ad etiam ante auctor. egestas eu netus quisque curabitur arcu dictum dui ipsum, purus nulla nunc lacus duis habitant rhoncus integer suspendisse, etiam fusce lacinia vivamus sapien rutrum porta. ';

}