import { Injectable } from '@angular/core'
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {
  readonly DELIMITER = '-'

  fromModel(value: string | null): NgbDateStruct | null {
    console.log(value)
    if (value) {
      const datesss: Date = new Date(Date.parse(value))
      console.log(datesss.getDate())
      return {
        day: datesss.getDate(),
        month: datesss.getMonth() + 1,
        year: datesss.getFullYear(),
      }
    }
    return null
  }

  toModel(date: NgbDateStruct | null): string | null {
    const dateddd: Date = new Date()
    if (date) {
      dateddd.setDate(date.day)
      dateddd.setMonth(date.month - 1)
      dateddd.setFullYear(date.year)
    }
    console.log('date iso string ' + dateddd.toISOString)

    return dateddd.toISOString()
  }
}
