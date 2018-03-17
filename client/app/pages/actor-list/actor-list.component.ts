// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { ActorService } from '../../services/actor.service';
import { FilmService } from '../../services/film.service';

// Import Models
import { Actor } from '../../domain/manage_film_example_db/actor';

import { Film } from '../../domain/manage_film_example_db/film';

// START - USED SERVICES
/*
 *	ActorService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	ActorService.list
 *		PARAMS: 
 *		
 *
 *	FilmService.prenota
 *		PARAMS: 
 *		RETURN: json
 *				
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ActorService  
 * FilmService  
 */
// END - REQUIRED RESOURCES

@Component({
    selector: "actor-list",
    templateUrl: './actor-list.component.html',
    styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
    
    // Attributes
    list: Actor[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
        private actorService: ActorService,
        private filmService: FilmService, 
        public dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.actorService.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.actorService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}