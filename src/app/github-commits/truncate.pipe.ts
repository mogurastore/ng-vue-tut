import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "truncate"
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const newline = value.indexOf("\n");
    return newline > 0 ? value.slice(0, newline) : value;
  }
}
