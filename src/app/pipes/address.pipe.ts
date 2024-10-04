import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const INVALID_ADDRESS =
    !address ||
    !address.rua ||
    !address.cidade ||
    address.estado === null || address.numero === undefined;

    if(INVALID_ADDRESS) {
      return 'Endereço indisponivel ou invalido';
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;
  }
}
