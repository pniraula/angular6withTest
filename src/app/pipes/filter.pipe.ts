import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => {
        let all="";
        Object.keys(item).forEach(key=>{
            all+=item[key].toString().toLowerCase();
        });
        return all.includes(searchText);
    });
  }
}
