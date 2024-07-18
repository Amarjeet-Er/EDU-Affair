import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-qbunit-list',
  templateUrl: './qbunit-list.component.html',
  styleUrls: ['./qbunit-list.component.css']
})
export class QBunitListComponent  implements OnInit{
  course_id: number = 0
  subject_id: number = 0
  unit_data: any

  constructor(
    private _crud: CrudService,
    private _shared: SharedService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._shared.course_id.subscribe(
      (res: any) => {
        console.log(res);
        this.course_id = res
      }
    )

    this._shared.subject_id.subscribe(
      (res: any) => {
        console.log(res);
        this.gte_unit(this.course_id, res)
      }
    )
  }


  gte_unit(course_id: number, subject_id: number) {

    const data = {
      "Course": course_id,
      "Subject": subject_id
    }

    this._crud.get_unit(data).subscribe(
      (res: any) => {
        console.log(res);
        this.unit_data = res
      }
    )
  }


  OnVideos(id: any) {
    console.log(id);
    this._shared.unit_id.next(id)
    this._router.navigate(['/QBlist'])
  }
  
}
