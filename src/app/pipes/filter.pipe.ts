import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
        let all="";
        Object.keys(it).forEach(key=>{
            all+=it[key].toString().toLowerCase();
        });
        return all.includes(searchText);
    });
  }
}
