import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

const etherscanApi = 'https://api.etherscan.io/api';
const etherscanApiKey = 'NSZCD6S4TKVWRS13PMQFMVTNP6H7NAGHUY';

@Injectable()
export class EtherscanService {
  constructor(private http: HttpService) {
  }

  getBalances = async (addresses: string[]) => {
    return this.http
      .get(
        `${etherscanApi}` +
          '?module=account' +
          '&action=balancemulti' +
          `&address=${addresses.join(',')}` +
          '&tag=latest' +
          `&apikey=${etherscanApiKey}`,
      )
      .pipe(map(response => response.data));
  };

  getTransactions = async (address: string) => {
    return this.http
      .get(
        `${etherscanApi}` +
          '?module=account' +
          '&action=txlist' +
          `&address=${address}` +
          `&startblock=0` +
          `&endblock=99999999` +
          `&page=1` +
          `&offset=10` +
          `&sort=asc` +
          `&apikey=${etherscanApiKey}`,
      )
      .pipe(map(response => response.data));
  };
}
