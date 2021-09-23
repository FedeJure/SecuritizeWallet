import { HttpService, Injectable } from '@nestjs/common';
import { from, observable, Observable, zip } from 'rxjs';
import { concatMap, flatMap, map, toArray } from 'rxjs/operators';

const etherscanApi = 'https://api.etherscan.io/api';
const etherscanApiKey = 'NSZCD6S4TKVWRS13PMQFMVTNP6H7NAGHUY';

@Injectable()
export class EtherscanService {
  constructor(private http: HttpService) {}

  getBalances = (addresses: string[]) => {
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

  getFirstTransaction = (address: string) => {
    return this.http
      .get(
        `${etherscanApi}` +
          '?module=account' +
          '&action=txlist' +
          `&address=${address}` +
          `&startblock=0` +
          `&endblock=99999999` +
          `&page=1` +
          `&offset=1` +
          `&sort=asc` +
          `&apikey=${etherscanApiKey}`,
      )
      .pipe(map(response => response.data));
  };

  getInfos = (addresses: string[]) => {
    if (addresses.length === 0) return from([]);
    const balancesObservable = this.getBalances(addresses).pipe(
      map(res => res.result),
    );

    const transactionsObservable = from(addresses)
      .pipe(flatMap(w => this.getFirstTransaction(w)))
      .pipe(map(res => res.result))
      .pipe(concatMap(r => r))
      .pipe(toArray());

    return zip(balancesObservable, transactionsObservable).pipe(
      map(([balances, transactions]) => {
        const mappedBalances = balances.map(b => b.balance || 0);
        return addresses.map((w, i) => ({
          address: w,
          balance: mappedBalances[i],
          firstTransaction: transactions[i] || null,
        }));
      }),
    );
  };
}
