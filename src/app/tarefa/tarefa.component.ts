import { Component, OnInit } from '@angular/core';
import { TextField } from 'ui/text-field';

@Component({
	selector: 'tarefa',
	moduleId: module.id,
	templateUrl: './tarefa.component.html',
	styleUrls: ['./tarefa.component.css']
})

export class TarefaComponent implements OnInit {

	public tasks: Array<string> = [
		'Lorem ipsum velit et rhoncus',
		'tincidunt leo suspendisse sapien',
		'lectus potenti imperdiet cras consectetur platea eget id morbi',
		'congue ornare nunc ultrices ante curabitur consequat',
		'torquent vivamus conubia nullam pharetra aliquet ut euismod auctor',
		'aliquam per sit tellus est consectetur id vestibulum',
		'rhoncus orci cubilia et vulputate suspendisse habitasse',
		'torquent auctor phasellus habitant volutpat platea suscipit',
		'nulla ullamcorper tincidunt justo lorem venenatis',
		'maecenas pellentesque eros volutpat fusce',
		'porta hac habitasse venenatis viverra dictumst aliquam vulputate',
		'etiam turpis vivamus consectetur diam phasellus duis',
		'venenatis ac leo sit vitae vivamus',
		'urna sem vehicula aliquam massa aenean risus eleifend neque leo',
		'nisl sed congue morbi commodo a aptent himenaeos',
		'tempor leo et augue congue potenti senectus cubilia',
	];

	constructor() { }

	ngOnInit() { }

	createTask(tarefa: TextField) {
		this.tasks.unshift(tarefa.text);
		tarefa.text = '';
	}
	deleteTask(tarefa) {
		let indiceTarefa = tarefa.index;
		this.tasks.splice(indiceTarefa, 1);
		alert('tarefa removida!');
	}
}