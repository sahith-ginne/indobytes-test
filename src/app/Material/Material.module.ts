import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';



const Materialcomponents = [
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule


]

@NgModule({

    imports : [Materialcomponents],
    exports : [Materialcomponents]

})

export class MaterialModule {}