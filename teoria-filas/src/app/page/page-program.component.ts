import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { element } from 'protractor';

@Component({
    selector: 'app-page-program',
    templateUrl: 'page-program.component.html',
    styleUrls: ['page-program.component.css'],
})


export class PageProgram  implements OnInit {
    constructor(private fb: FormBuilder) {}


    form1: FormGroup
    Aarrivalrate: any
    Barrivalrate: any
    Carrivalrate: any

    Aservice: any
    Bservice: any
    Cservice: any

    averageAL: any
    averageBL: any
    averageCL: any

    averageAW: any
    averageBW: any
    averageCW: any

    averageAP: any
    averageBP: any
    averageCP: any
    maxTable = [] as any

    testArr =  [] as object
    sceneryA: any
    sceneryB: any
    sceneryC: any

    ngOnInit(): void {
        this.formCreation();
    }
    formCreation() {
        this.form1 = this.fb.group({
            time: [''],
            AarrivalrateMin: [''],
            BarrivalrateMin: [''],
            CarrivalrateMin: [''],
            AserviceMin: [''],
            BserviceMin: [''],
            CserviceMin: [''],
            max:['']
        });

    }
    sendData() {
        const TIME = this.form1.get('time')?.value
        const Aarrivalrate = this.form1.get('AarrivalrateMin')?.value
        const Barrivalrate = this.form1.get('BarrivalrateMin')?.value
        const Carrivalrate = this.form1.get('CarrivalrateMin')?.value
        const Aservice = this.form1.get('AserviceMin')?.value
        const Bservice = this.form1.get('BserviceMin')?.value
        const Cservice = this.form1.get('CserviceMin')?.value

        this.Aarrivalrate = (TIME/Aarrivalrate).toFixed(2)
        this.Barrivalrate = (TIME/Barrivalrate).toFixed(2)
        this.Carrivalrate = (TIME/Carrivalrate).toFixed(2)
        this.Aservice = (TIME/Aservice).toFixed(2)
        this.Bservice = (TIME/Bservice).toFixed(2)
        this.Cservice = (TIME/Cservice).toFixed(2)
        

        this.averageAL = (this.Aarrivalrate/(this.Aservice - this.Aarrivalrate)).toFixed(2)
        this.averageBL = (this.Barrivalrate/(this.Bservice - this.Barrivalrate)).toFixed(2)
        this.averageCL = (this.Carrivalrate/(this.Cservice - this.Carrivalrate)).toFixed(2)

        this.averageAW = (1/(this.Aservice - this.Aarrivalrate)).toFixed(2)
        this.averageBW = (1/(this.Bservice - this.Barrivalrate)).toFixed(2)
        this.averageCW = (1/(this.Cservice - this.Carrivalrate)).toFixed(2)

        this.averageAP = (this.Aarrivalrate / this.Aservice).toFixed(2)
        this.averageBP = (this.Barrivalrate / this.Bservice).toFixed(2)
        this.averageCP = (this.Carrivalrate / this.Cservice).toFixed(2)
        let max = parseInt(this.form1.get('max')?.value)
        let teste
        for(var i=0; i < max; i++) {
            this.maxTable.push({
                id:  i,
                sceneryA: ((1-(this.Aarrivalrate/this.Aservice))*Math.pow((this.Aarrivalrate/this.Aservice), i)).toFixed(2),
                sceneryB: ((1-(this.Barrivalrate/this.Bservice))*Math.pow((this.Barrivalrate/this.Bservice), i)).toFixed(2),
                sceneryC: ((1-(this.Carrivalrate/this.Cservice))*Math.pow((this.Carrivalrate/this.Cservice), i)).toFixed(2),
            })
            console.log(this.maxTable);
        }
    }
}